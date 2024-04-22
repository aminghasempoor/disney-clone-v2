import {Genres} from "@/type";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default async function GenreDropdown () {
    const url:string = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
    const option : RequestInit = {
        method : "GET",
        headers : {
            accept : "application/json",
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        },
        next : {
            revalidate : 60 * 60 * 24
        }
    }
    const response : Response = await fetch(url, option)
    const data = (await response.json()) as Genres

    return(
        <DropdownMenu>
            <DropdownMenuTrigger className={'text-white flex justify-between items-center mr-2'}>
                Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                {
                    data.genres.map(genre => (
                        <DropdownMenuItem key={genre.id}>
                            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                                {genre.name}
                            </Link>
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}