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
    <section className='bg-gray-200 h-screen mt-10 relative'>
    <div className='darkVoiletBg max-w-5xl svg-background-div absolute top-0 left-0 right-0 overflow-visible mx-auto  px-8 mb-10 py-8 rounded translate-y-[-50%] '>
      <form onSubmit={handleClick} className='w-full flex gap-x-8 items-center '>
        <input 
         value={UserLink}
         onChange={(e)=>setUserLink(e.target.value)}
        className={`bg-white p-2 px-3 rounded w-full  outline-0 ${error&&"border border-red-400 text-red-400"}`}  placeholder='Shorten a link here!' />
        <button
         onClick={handleClick} 
         className='BgCyanColor w-1/5 hover:opacity-70 cursor-pointer rounded text-white py-2 font-bold h'>Shorten It!</button>
      </form>
  
      {error&& <p className='text-red-500 mt-1 italic '>Please add a link</p>}
    </div>

    {/*features*/}
    

    </section>
    </>
  )
}
