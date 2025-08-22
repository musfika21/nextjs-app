"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {

    const router = useRouter();

    const handleNavigate = () =>{
        router.push('/about/address')
    }

    return (
        <div>
            <p className='font-bold'>About Page</p>
            <Link href='/about/address'><p>Address Page</p></Link>
            <button type='button' onClick={handleNavigate}>Go To Address Page</button>
        </div>
    )
}
