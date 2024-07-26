"user client";
import Menu from "./Menu";

export default function Nav(){
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
            <div className='h-full flex items-center justify-between'>
            {/*MOBILE*/}
            <Link href="/">
            <div className="text-2xl tracking=wide>"></div>
            
            Homepage</Link>
            <Menu/>
        </div>
        </div>


    )
}
