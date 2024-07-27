"user client";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
            <div className='h-full flex items-center justify-between'>
            {/*MOBILE*/}
            <Link href="/">
            <div className="text-2xl tracking=wide>">
                </div>
            </Link>
            <Menu/>
        </div>
        {/*BIGGER SCREENS*/}
        <div className='hidden md:flex items-center justify-between gap-8 h-full'>
            {/*LEFT*/}
            <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                <Link href="/" className="flex items-center gap-3">
                <div>Hi</div>
                <div className='text-2xl tracking-wide text-center'>Ecommercery</div>
                </Link>
            </div>
            <div className="hidden xl:flex gap-4">
                <Link href="/">Homepage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </div>
            {/*RIGHT*/}
            <div className='w-2/3 flex items-center justify-between gap-8'>
            <SearchBar/>
            </div>
            </div>
        </div>
    );
}
export default NavBar;