import styles from "../../styles/homepage.module.css";
import Movie from "../../components/movie";


export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    const response = await fetch(API_URL, { cache: "force-cache"});
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.page}>
            <ul className={styles.movieList}>
                {movies.map(movie => (
                    <Movie 
                        key={movie.id}
                        id={movie.id} 
                        title={movie.title} 
                        poster_path={movie.poster_path}
                    />))
                }
            </ul>
        </div>
    );
}