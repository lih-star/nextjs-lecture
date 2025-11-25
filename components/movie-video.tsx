import { API_URL } from "../app/(home)/page";

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideo({id}: {id:string}){
    const video = await getVideo(id);
    return <h6>{JSON.stringify(video)}</h6>;
}