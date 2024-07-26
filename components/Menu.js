"use client"
import { CiMenuBurger } from "react-icons/ci";

import { useState } from "react"
const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className=''>
            <CiMenuBurger width={28} height={28} className="cursor-pointer" 
            onClick={()=>setOpen((prev)=>!prev)}/>
            {
        open && (
            <div className='absolute bg-black text-white left-0 top-20'>
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
 
export default Menu