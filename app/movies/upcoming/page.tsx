import MovieCard, { IMovieCard } from "@/components/MovieCard";
import Paginate from "@/components/Paginate";
import React from "react";
import "../../style/movies.css"

type Props = {
  searchParams?: {
    page?: number;
  };
};

async function getUpcomingMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  const data = await res.json();
  console.log(data); 
  console.log(process.env.API_KEY)
  return data;
}

const Page = async ({ searchParams }: Props) => {
  const page = searchParams?.page || 1;

  const upcomingMovies = await getUpcomingMovies(page);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="popular-title">Upcoming Movies</h1> 
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {upcomingMovies.results.map((movie: IMovieCard) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>
        <Paginate
          currentPage={page < 1 || page > upcomingMovies.total_pages ? 1 : page}
          totalPages={upcomingMovies.total_pages}
          pageType="upcoming"
        />
      </div>
    </main>
  );
};
export default Page;