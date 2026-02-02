import React from 'react'
import "../App.css"

export default function Hero() {
  return (
    <section className='max-w-6xl mx-auto py-8'>
        <div className='flex justify-between items-center gap-10'>
        <div className='flex-1/2'>
            <h2 className='text-7xl font-bold mb-2 darkblueTextColr '>More than just <br/>shorter links</h2>
            <p className='grayish-violet'>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit adipisicing elit elit amet consectetur adipisicing. </p>
            <button className='BgCyanColor mt-5 rounded-full py-2 px-5 font-bold text-white hover:opacity-50 cursor-pointer'>Get Started</button>
        </div>
        <div className='flex-1/2'>
        <img src="/images/illustration-working.svg" alt="illustration working" />
        </div>
        </div>
    </section>
  )
}
