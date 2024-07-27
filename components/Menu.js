"use client"
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
const Menu = () => {

    return (
        <div className=''>
            <CiMenuBurger width={28} height={28} className="cursor-pointer"/>
            {
        open && (
            <div className='absolute bg-slate-500 text-white left-0 top-20 h-{calc(100vh-80px)} flex flex-col items-center justify-center gap-8 text-xl z-10'>
                <Link href="/">Homepage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart(1)</Link>
            </div>
        )}
        </div>
    )

}
 
export default Menu;