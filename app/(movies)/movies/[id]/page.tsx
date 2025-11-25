import { get } from "http";
import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const [movie,video] = await Promise.all([getMovie(id), getVideo(id)]);
  return <h1>{movie.title}</h1>;
}