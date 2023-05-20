import React from 'react'

function LandingPage() {
  return (
    <div className='flex text-white h-[35vw]' style={{backgroundImage: 'linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% )'}}>
     <div className=' mx-10'>
      <div className='relative top-[5vw] text-5xl font-bold font-sans'>Craft Your Career Path with Precision..</div>
      <div className='relative top-[6vw] text-4xl mt-4 font-bold font-sans'>Your Perfect Resume Starts Here!</div>
      <div className='mx-2 flex mt-12 space-x-8 relative top-[8vw] '>
        <button className=' rounded-md  font-semibold shadow-lg px-5 text-lg py-3' style={{backgroundImage: 'linear-gradient(90deg,#e8b93f,#d68423)'}}>Start Now</button>
        <button className=' rounded-md  font-semibold shadow-lg px-5 text-lg py-3' style={{backgroundImage: 'linear-gradient(90deg,#e8b93f,#d68423)'}}>Click Here</button>
      </div>
     </div>
     <div className='flex w-1/2'><img className='m-auto' src="./resume-img.png" alt="" /></div>
    </div>
  )
}

export default LandingPage
