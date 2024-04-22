import {searchResults} from "@/type";

async function fetchFromTMDB (url : URL, cacheTime ?: number){
    url.searchParams.set("language", "en-US")
    url.searchParams.set("page", "1")

    const options : RequestInit = {
        method : "GET",
        headers : {
            accept : "application/json",
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        },
        next : {
            revalidate : cacheTime || 60 * 60 * 24
        }
    }

    const response = await fetch(url.toString(), options)
    return (await response.json()) as searchResults
}

export async function getUpComingMovies () {
    const url = new URL('https://api.themoviedb.org/3/movie/upcoming')
    const data = await fetchFromTMDB(url)

    return data.results
}

export async function getTopRatedMovies () {
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated')
    const data = await fetchFromTMDB(url)

    return data.results
}

export async function getPopularMovies () {
    const url = new URL('https://api.themoviedb.org/3/movie/popular')
    const data = await fetchFromTMDB(url)

    return data.results
}

export async function getDiscoverMovies (id ?: string, keywords ?: string) {
    const url = new URL("https://api.themoviedb.org/3/discover/movie")

    keywords && url.searchParams.set("with_keyword", keywords)
    id && url.searchParams.set("with_genres", id)
    const data = await fetchFromTMDB(url)

    return data.results
}

export async function getSearchMovies (term : string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie");

    url.searchParams.set("query", term);
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        },
        next: {
            revalidate: 60 * 60 * 24,
        },
    };

    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as searchResults;

    return data.results;
}