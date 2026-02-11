import React, { useState } from 'react'
import "../App.css"
import {Menu} from "lucide-react"

export default function Navbar() {
  const[menu,setMenu]=useState(false)
  return (
    <>
    <header className='flex flex-col md:flex-row items-center md:py-4 md:mt-4 max-w-6xl mx-auto  '>
      <div className='flex justify-between items-center w-full not-md:shadow md:px-4 lg:px-0  py-4 '>
        <div className='px-2 md:px-0'>
            <img className='w-25' src='/images/logo.svg'/>
        </div>
        <nav className='md:flex md:w-full md:items-center md:justify-between ml-4'>
            <div className='md:flex hidden  gap-x-5 items-center'>
            <a className='graytext font-bold' href='/'>Features</a>
            <a className='graytext font-bold' href='/'>Pricing</a>
            <a className='graytext font-bold' href='/'>Resources</a>
            </div>
            <div className=' md:flex hidden  gap-x-5 items-center'>
                 <a className='graytext font-bold' href='/'>Login</a>
                 <button className='BgCyanColor text-white font-bold rounded-full py-2 px-5 cursor-pointer hover:opacity-50'>Sign Up</button>
            </div>

            <div className='md:hidden block'>
          <button onClick={()=>setMenu(!menu)} className='px-2 text-2xl  '><Menu/> </button>
        </div>
        </nav>
</div>
         { menu&& <div className='  shadow w-full py-5 rounded'>
            <div className='md:hidden flex flex-col  gap-y-4 items-center'>
            <a className='graytext font-bold' href='/'>Features</a>
            <a className='graytext font-bold' href='/'>Pricing</a>
            <a className='graytext font-bold' href='/'>Resources</a>
            </div>
            <div className=' md:hidden flex flex-col  gap-y-2 items-center mt-4'>
                 <a className='graytext font-bold' href='/'>Login</a>
                 <button className='BgCyanColor text-white font-bold rounded-full py-2 px-5 cursor-pointer hover:opacity-50'>Sign Up</button>
            </div>
          </div>}

    </header>
    </>
  )
}
