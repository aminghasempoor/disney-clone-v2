import {notFound} from "next/navigation";
import {getPopularMovies, getSearchMovies} from "@/lib/getMovies";
import MoviesCarousel from "@/components/MoviesCarousel";

export default async function SearchPage ({params : {term}} : {params : {term : string}}) {
    if (!term) notFound();

    const termToUse = decodeURI(term);

    const movies = await getSearchMovies(termToUse);
    const popularMovies = await getPopularMovies();

    return(
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

                <MoviesCarousel title="Movies" movies={movies} isVertical />

                <MoviesCarousel title="You may also like" movies={popularMovies} />
            </div>
        </div>
    )
}