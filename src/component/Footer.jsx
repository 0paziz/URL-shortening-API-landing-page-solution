import React from 'react'
import "../App.css"

export default function Footer() {
  return (
    <>
    {/*CTA*/}
    <section className='darkVoiletBg py-4 bg-boost-desktop'>
        <div className='flex flex-col items-center justify-center gap-4 p-4'> 
            <h2 className='text-white font-bold text-2xl'>Boost your links today</h2>
            <button className='BgCyanColor  rounded-full py-2 px-5 font-bold text-white hover:opacity-50 cursor-pointer'>Get Started</button>
        </div>
    </section>

    <footer className='bgvery-dark-violet p-10 '>
  
    <div className='max-w-6xl  mx-auto'>
        <div className='flex md:flex-row flex-col gap-2 justify-around'>
              <div >
        <h1 className='text-4xl text-white font-bold pb-2'>Shortly</h1>
    </div>
            <ul className='gap-y-1 flex flex-col'>
                <li className='text-white pb-2 font-bold'>Features</li>
                <li className='graytextFooter'> <a href="">Link Shortening</a> </li>
                <li className='graytextFooter'><a href="">Branded Links</a></li>
                <li className='graytextFooter'><a href="">Analytic</a></li>
            </ul>

            <ul className='gap-y-1 flex flex-col'>
                <li className='text-white pb-2 font-bold'>Company</li>
                <li className='graytextFooter'> <a href="">Link Shortening</a> </li>
                <li className='graytextFooter'><a href="">Branded Links</a></li>
                <li className='graytextFooter'><a href="">Analytic</a></li>
            </ul>

            <ul className='gap-y-1 flex flex-col'>
                <li className='text-white pb-2 font-bold'>Resource</li>
                <li className='graytextFooter'> <a href="">Link Shortening</a> </li>
                <li className='graytextFooter'><a href="">Branded Links</a></li>
                <li className='graytextFooter'><a href="">Analytic</a></li>
            </ul>

            <ul className='flex gap-4 justify-center'>
                <li className=''><a href=""><img src='/images/icon-facebook.svg' alt=''/></a></li>
                <li ><a  href=""><img  src='/images/icon-twitter.svg' alt=''/></a></li>
                <li><a href=""><img src='/images/icon-pinterest.svg' alt=''/></a></li>
                 <li> <a href=""><img src='/images/icon-instagram.svg' alt=''/></a> </li>
            </ul>
        </div>
    </div>
    </footer>
    </>
  )
}
