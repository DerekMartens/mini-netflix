import Link from 'next/link';
import Image from 'next/image';

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <Link key={movie.imdbID} href={`/details/${movie.imdbID}`} aria-label={`View details for ${movie.Title}`}>
                        <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col h-full text-white transform transition-transform duration-300 hover:scale-102 hover:shadow-xl active:scale-98 active:shadow-lg">
                            {movie.Poster !== "N/A" ? (
                                <Image src={movie.Poster} alt={movie.Title} width={300} height={450} className="w-full object-cover" />
                            ) : (
                                <div className="w-full h-[450px] bg-gray-700 flex items-center justify-center">
                                    <span className="text-gray-400">No Image Available</span>
                                </div>
                            )}
                            <div className="p-4 flex-grow flex flex-col">
                                <h2 className="text-lg font-semibold">{movie.Title}</h2>
                                <p className="">{movie.Year}</p>
                                <p className="capitalize">{movie.Type}</p>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="col-span-full text-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-500">No movies to display</h2>
                    <p className="text-gray-400 mt-4">Please check back later or try a different search.</p>
                </div>
            )}
        </div>
    );
};

export default MovieList;
