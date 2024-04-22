import Link from "next/link";
import Image from "next/image";
import LogoImage from '@/public/logoicon.ico'
import ThemeToggle from "@/components/ThemeToggle";
import SearchInput from "@/components/SearchInput";
import GenreDropdown from "@/components/GenreDropdown";

export default function Header() {
    return (
        <header className="fixed w-full z-50 top-0 flex items-center justify-between p-5">
            <Link href={'/'} className="mr-10">
                <Image src={LogoImage} alt={'logo'} width={50} className={'cursor-pointer'}/>
            </Link>
            <div className={'flex space-x-2'}>
                <GenreDropdown/>
                <SearchInput/>
                <ThemeToggle/>
            </div>
        </header>
    )
}