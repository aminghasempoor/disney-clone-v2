import MoviesCarousel from "@/components/MoviesCarousel";
import {getPopularMovies, getTopRatedMovies, getUpComingMovies} from "@/lib/getMovies";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";

export default async function Home() {
    const upComingMovies = await getUpComingMovies()
    const topRatedMovies = await getTopRatedMovies()
    const popularMovies = await getPopularMovies()

    return (
        <main>
            <CarouselBannerWrapper />
            <div className={'flex flex-col space-y-2 xl:-mt-48'}>
                <MoviesCarousel title={'Upcoming'} movies={upComingMovies}/>
                <MoviesCarousel title={'Top Rated'} movies={topRatedMovies}/>
                <MoviesCarousel title={'Popular'} movies={popularMovies}/>
            </div>
        </main>
    );
}
