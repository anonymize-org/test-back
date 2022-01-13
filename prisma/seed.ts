import { PrismaClient } from '@prisma/client'
import got from "got-cjs";

type MovieListItem = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
}

type Movie = MovieListItem & {
  budget: number;
  revenue: number;
  runtime: number;
  status: string;
}

type PopularResponse = {
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_results: number;
}

const prisma = new PrismaClient()

const baseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "bf31014f604c47d237d118c63797fc8b";

async function getMovieDetail(movieId: number): Promise<Movie> {
  const data = await got.get(`${baseUrl}${movieId}?api_key=${apiKey}`).json<Movie>();
  return data;
}

async function seedMovies(): Promise<void> {
  let page = 1;
  const data = await got.get(`${baseUrl}popular?api_key=${apiKey}&page=${page}`).json<PopularResponse>();
  while (page <= data.total_pages) {
    console.log(`page ${page}`);
    try {
      const data = await got.get(`${baseUrl}popular?api_key=${apiKey}&page=${page}`).json<PopularResponse>();
      for (const movie of data.results) {
        const data = await getMovieDetail(movie.id);
        console.log(`Seeding movie ${movie.id}`);
        await prisma.movie.upsert({
          where: {
            id: movie.id,
          },
          create: {
            id: data.id,
            original_language: data.original_language,
            original_title: data.original_title,
            overview: data.overview,
            popularity: data.popularity,
            poster_path: data.poster_path,
            release_date: data.release_date,
            budget: data.budget,
            revenue: data.revenue,
            runtime: data.runtime,
            status: data.status,
          },
          update: {
            //
          }
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      page++;
    }
  }
}

async function main() {
  console.log(`Start seeding ...`)
  await seedMovies();
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })