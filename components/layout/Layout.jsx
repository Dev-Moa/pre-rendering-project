import React from 'react'
import Navbar from './Navbar'
function Layout(props) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='px-[15%] my-auto'>{props.children} </main>
        </>
    )
}

export default Layout