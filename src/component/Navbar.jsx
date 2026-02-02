import React from 'react'
import "../App.css"

export default function Navbar() {
  return (
    <>
    <header className='flex items-center py-4 mt-4 max-w-6xl mx-auto'>
        <div>
            <img className='w-25' src='/images/logo.svg'/>
        </div>
        <nav className='flex w-full items-center justify-between ml-4'>
            <div className='flex gap-x-5 items-center'>
            <a className='graytext font-bold' href='/'>Features</a>
            <a className='graytext font-bold' href='/'>Pricing</a>
            <a className='graytext font-bold' href='/'>Resources</a>
            </div>
            <div className='flex gap-x-5 items-center'>
                 <a className='graytext font-bold' href='/'>Login</a>
                 <button className='BgCyanColor text-white font-bold rounded-full py-2 px-5 cursor-pointer hover:opacity-50'>Sign Up</button>
            </div>
        </nav>
    </header>
    </>
  )
}
