import React from 'react'
import "../App.css"

export default function Hero() {
  return (
    <section className='max-w-6xl mx-auto py-8 md:px-4 overflow-clip not-md:mb-20'>
        <div className='flex md:flex-row flex-col-reverse md:justify-between items-center gap-10 md:text-left text-center'>
        <div className='flex-1/2 not-md:flex flex-col items-center'>
            <h2 className='lg:text-7xl md:text-5xl text-5xl font-bold mb-2 darkblueTextColr '>More than just <br/>shorter links</h2>
            <p className='grayish-violet  '>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit adipisicing elit elit amet consectetur adipisicing. </p>
            <button className='BgCyanColor mt-5 rounded-full py-2 px-5 font-bold text-white hover:opacity-50 cursor-pointer'>Get Started</button>
        </div>
        <div className='flex-1/2 not-md:flex'>
        <img src="/images/illustration-working.svg" alt="illustration working" />
        </div>
        </div>
    </section>
  )
}
