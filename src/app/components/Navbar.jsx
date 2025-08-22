import Link from 'next/link'
import React from 'react'

export default function Navbar() {
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
