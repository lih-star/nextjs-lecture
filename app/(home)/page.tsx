export const metadata = {
    title: "Home"
}

async function getMovies() {
    return await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
        .then(response => response.json());
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {JSON.stringify(movies)}
        </div>
    );
}