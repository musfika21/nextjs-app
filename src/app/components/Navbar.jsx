"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathName = usePathname();
    // console.log(pathName)
    if (!pathName.includes("dashboard")) {
        return (
            <nav>
                <ul className='flex justify-around bg-gray-700 p-5'>
                    <Link href='/'>
                        <li>Home</li>
                    </Link>
                    <Link href='/services'>
                        <li>Services</li>
                    </Link>
                    <Link href='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        )
    }
    else{
        return <></>
    }

}
