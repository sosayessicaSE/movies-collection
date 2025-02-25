import MovieCard, { IMovieCard } from "@/components/MovieCard";
import Paginate from "@/components/Paginate";
import React from "react";
import "../../style/movies.css"
type Props = {
  searchParams?: {
    page?: number;
  };
};

async function getTopRatedMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );
  return res.json();
}

const Page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const topRatedMovies = await getTopRatedMovies(page);
  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="popular-title">Top Rated Movies</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {topRatedMovies.results.map((movie: IMovieCard) => (
            <div className="card-container" key={movie?.id}> 
              <div className="card">
                <div className="card-front">
                  <img
                    className="card-image"
                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                    alt={movie?.title}
                  />
                </div>
                <div className="card-back">
                  <h3>{movie?.title}</h3>
        
                  {/* Add other movie details as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Paginate
          currentPage={page < 1 || page > topRatedMovies.total_pages ? 1 : page}
          totalPages={topRatedMovies.total_pages}
          pageType="top-rated"
        />
      </div>
    </main>
  );
};

export default Page;