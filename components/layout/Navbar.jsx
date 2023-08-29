import React from 'react'
import Link from 'next/link'
function Navbar() {
    return (
        <div className='bg-gray-900 mb-12 text-primary flex justify-between px-[15%] font-bold py-[5%]'>
            <h1 className=''>
                <Link href='/'>Next Events</Link>
            </h1>
            <ul className='space-x-5'>
                <Link href='/events/'> All Events </Link>
                <Link href='/events/FilteredEvent'> Browse </Link>
            </ul>


        </div>
    )
}

export default Navbar