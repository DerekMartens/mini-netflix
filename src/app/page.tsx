'use client';

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import SearchBar from "./_components/SearchBar";
import MovieList from "./_components/MovieList";

const HomePage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || "star wars";
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMovies = async (query: string) => {
            setLoading(true);
            const res = await fetch(`/api/movies?query=${query}`);
            const data = await res.json();
            setMovies(data.Search || []);
            setLoading(false);
        };

        getMovies(query);
    }, [query]);

    return (
        <div className="container mx-auto p-4">
            <SearchBar />
            {loading ? (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-gray-800"></div>
                </div>
            ) : (
                <MovieList movies={movies} />
            )}
        </div>
    );
};

export default HomePage;
