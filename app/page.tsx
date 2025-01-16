import PopularMovies from '@/components/PopularMovies';
import TopRatedMovies from '@/components/TopRatedMovies';
import UpcomingMovies from '@/components/UpcomingMovies';
import "./style/movies.css"

async function getMovies(type: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${type} movies`);
  }
  return res.json();
}

export default async function Home() {
  try {
    const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      getMovies('popular'),
      getMovies('top_rated'),
      getMovies('upcoming')
    ]);

    return (
      <main className="mt-5 flex flex-col">
        <div className="w-[1300px] max-w-full px-4 mx-auto">
          <UpcomingMovies upcomingMovies={upcomingMovies} />
          <PopularMovies popularMovies={popularMovies} />
          <TopRatedMovies topRatedMovies={topRatedMovies} />
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="mt-5 flex flex-col">
        <div className="w-[1300px] max-w-full px-4 mx-auto">
          <h1 className="text-center text-xl font-medium text-red-600">
            Failed to load movie data. Please try again later.
          </h1>
        </div>
      </main>
    );
  }
}
