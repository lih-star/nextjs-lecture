"use client";

import Link from "next/link";
import styles from "../styles/homepage.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
    id: string;
    title: string;
    poster_path: string;
}

export default function Movie({id, title, poster_path} : MovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    };

    return (
            <li key={id} className={styles.movieItem}>
                <div>
                    <img src={poster_path} alt={title} onClick={onClick}/>
                    <Link href={`/movies/${id}`}>{title}</Link>
                </div>
            </li>
    );
}