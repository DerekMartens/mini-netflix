import Image from 'next/image';

interface Params {
    id: string;
}

interface Rating {
    Source: string;
    Value: string;
}

export default async function Details({ params }: { params: Params }) {
    const { id } = await params;

    try {
        // server side page/component so we can use the API key here
        const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`)

        if (!res.ok) {
            console.error(res);
            return (
                <div className='w-full p-4 bg-red-100 text-red-700 rounded-lg'>
                    <h1 className='text-2xl font-bold mb-4'>Something went wrong, could not fetch movie details.</h1>
                    <p>{res.statusText}</p>
                </div>
            )
        }

        const movie = await res.json();

        return (
            <div className='w-full p-6 bg-gray-800 text-white rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold mb-6'>{movie.Title}</h1>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/3 mb-4 md:mb-0'>
                        {movie.Poster !== 'N/A' ? (
                            <Image src={movie.Poster} alt={movie.Title} width={300} height={450} className='rounded-lg shadow-lg' />
                        ) : (
                            <div className="w-full h-[450px] bg-gray-700 rounded-lg flex items-center justify-center">
                                <div className="text-gray-400">No Image Available</div>
                            </div>
                        )}
                    </div>
                    <div className='md:w-2/3 md:pl-6'>
                        <h2 className='text-xl font-bold mb-2'>Plot</h2>
                        <p className='mb-8 text-lg'>{movie.Plot}</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <p className='mb-2'><strong>Year:</strong> {movie.Year}</p>
                                <p className='mb-2'><strong>Rated:</strong> {movie.Rated}</p>
                                <p className='mb-2'><strong>Released:</strong> {movie.Released}</p>
                                <p className='mb-2'><strong>Runtime:</strong> {movie.Runtime}</p>
                                <p className='mb-2'><strong>Genre:</strong> {movie.Genre}</p>
                                <p className='mb-2'><strong>Director:</strong> {movie.Director}</p>
                                <p className='mb-2'><strong>Writer:</strong> {movie.Writer}</p>
                                <p className='mb-2'><strong>Actors:</strong> {movie.Actors}</p>
                            </div>
                            <div>
                                <p className='mb-2'><strong>Language:</strong> {movie.Language}</p>
                                <p className='mb-2'><strong>Country:</strong> {movie.Country}</p>
                                <p className='mb-2'><strong>Awards:</strong> {movie.Awards}</p>
                                <p className='mb-2'><strong>Metascore:</strong> {movie.Metascore}</p>
                                <p className='mb-2'><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                                <p className='mb-2'><strong>IMDB Votes:</strong> {movie.imdbVotes}</p>
                                <p className='mb-2'><strong>Total Seasons:</strong> {movie.totalSeasons}</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-xl font-bold mb-2'>Ratings</h2>
                            <div className='flex flex-wrap'>
                                {movie.Ratings?.map((rating: Rating) => (
                                    <div key={rating.Source} className='bg-gray-900 p-2 m-2 rounded-lg shadow-md'>
                                        <p><strong>{rating.Source}:</strong> {rating.Value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } catch (error: any) {
        console.error(error)
        return (
            <div className='w-full p-4 bg-red-100 text-red-700 rounded-lg'>
                <p className='text-xl font-bold mb-2'>Something went wrong</p>
                <p>{error.message}</p>
            </div>
        )
    }

};