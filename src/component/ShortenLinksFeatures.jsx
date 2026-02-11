import React, { useState } from 'react'
import "../App.css"
export default function ShortenLinksFeatures() {
  const[error , setError]=useState(false)
  const[UserLink, setUserLink]=useState("")
  const handleClick=(e)=>{
    e.preventDefault()
    if(UserLink===""){ setError(true)}
    else{
      setError(false)
    }
  }
  return (
    <>
  <main className='bg-gray-200 h-full mt-15 pb-40'>
    <section className=' relative  '>
    <div className='darkVoiletBg max-w-6xl md:svg-background-div   svg-background-mobile  absolute top-0 left-0 right-0  mx-auto  px-8 mb-10 py-8 rounded translate-y-[-50%] '>
      <form onSubmit={handleClick} className='w-full flex md:gap-x-8 gap-y-4 items-center md:flex-row flex-col '>
        <input 
         value={UserLink}
         onChange={(e)=>setUserLink(e.target.value)}
        className={`bg-white p-2 px-3 rounded w-full  outline-0 ${error&&"border border-red-400 text-red-400"}`}  placeholder='Shorten a link here!' />
        <button
         onClick={handleClick} 
         className='BgCyanColor md:w-1/5 w-full hover:opacity-70 cursor-pointer rounded text-white py-2 font-bold h'>Shorten It!</button>
      </form>
  
      {error&& <p className='text-red-500 mt-1 italic '>Please add a link</p>}
    </div>
    </section>


  
   {/*features*/}
    <div className='relative top-35'>
      <div className=' text-center flex flex-col items-center justify-center gap-2 text-black p-2'>
        <h2 className='text-5xl font-bold darkblueTextColr'>Advanced Statistics</h2>
        <p className='grayish-violet text-center md:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia dolor Mollitia dolor</p>
      </div>
      <div>
      </div>
    </div>

  <div className='mt-50 md:w-6xl mx-auto relative not-md:flex  '>
    <div className='relative top-35 not-md:hidden w-full'><div className='BgCyanColor h-2 w-full '></div></div>
    <div className='flex md:flex-row flex-col items-center not-md:px-10   justify-center md:gap-x-10  gap-y-8 relative'>
      <div className='p-8 flex flex-col text-center  rounded bg-white  relative '>
           <div className='darkVoiletBg h-16 w-16 rounded-full flex  absolute top-0 translate-y-[-50%] left-6 '>
        <img className='p-4' src='/images/icon-brand-recognition.svg' alt='icon brand recognition'/>
        </div>
        <h2 className='py-2  mt-8 font-bold text-xl'>Brand Recognition</h2>
        <p className='grayish-violet text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum exercitationem corrupti sunt et tenetur iure quidem 
          quisquam quasi beatae maiores. At aut repellendus saepe.</p>
      </div>

       <div className='p-8 not-md:text-center bg-white rounded relative top-8'>
        <div className='darkVoiletBg h-16 w-16 rounded-full flex  absolute top-0 translate-y-[-50%] left-6 '>
        <img className='p-4' src='/images/icon-detailed-records.svg' alt='icon brand recognition'/>
        </div>
        <h2 className='py-2 mt-8 font-bold text-xl'>Detailed Records</h2>
        <p className='grayish-violet'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum exercitationem corrupti sunt et tenetur iure quidem 
          quisquam quasi beatae maiores. At aut repellendus saepe.</p>
      </div>

       <div className='p-8 not-md:text-center rounded bg-white relative top-18'>
           <div className='darkVoiletBg h-16 w-16 rounded-full flex  absolute top-0 translate-y-[-50%] left-6 '>
        <img className='p-4' src='/images/icon-fully-customizable.svg' alt='icon brand recognition'/>
        </div>
        <h2 className='py-2  mt-8 font-bold text-xl'>Fully Customizable</h2>
        <p className='grayish-violet'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum exercitationem corrupti sunt et tenetur iure quidem 
          quisquam quasi beatae maiores. At aut repellendus saepe.</p>
      </div>
    </div>
    
    </div>

     </main>
    </>
  )
}
