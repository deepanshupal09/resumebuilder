import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {

  const scrollRight = () => {
    document.getElementById('temp').scrollLeft += 1000;
  } 
  const scrollLeft = () => {
    document.getElementById('temp').scrollLeft -= 1000;
  } 
  AOS.init();
  return (
    
    <>
     
    <div className='first-component flex text-white h-[75vh]' style={{backgroundImage: 'linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% )'}}>
     <div className=' mx-12 slideleft'>
      <div className='relative top-[25%] text-5xl font-bold font-sans'>Craft Your Career Path with Precision..</div>
      <div className='relative top-[32%] text-4xl mt-4 font-bold font-sans'>Your Perfect Resume Starts Here!</div>
      <div className='mx-2 flex mt-12 space-x-8 relative top-[40%] slideleft'>
        <button className=' rounded-md  font-semibold shadow-lg px-5 text-lg py-3 ' style={{backgroundImage: 'linear-gradient(90deg,#e8b93f,#d68423)'}}>Start Now</button>
        <button className=' rounded-md  font-semibold shadow-lg px-5 text-lg py-3 ]' style={{backgroundImage: 'linear-gradient(90deg,#e8b93f,#d68423)'}}>Click Here</button>
      </div>
     </div>
     <div className='flex justify-end w-1/2 '><img className='mr-[10%] slideright h-[110%]' src="./resume-img.png" alt="" /></div>
    </div>
    <div data-aos="fade-right" className='second-component m-2 h-[100vh] py-[2%] px-[3%]' style={{marginTop: '25vh'}}>
        <h1 className='text-5xl relative top-[7vh] text-slate-600 text-center font-bold font-mons'>Templates For Resume</h1>

        <div className='flex relative top-[10vh] min-h-[70vh] w-[90vw] mx-auto space-x-10'>
          <div className='my-auto'>
            <button className='rounded-[50%] text-center p-4  hover:shadow-lg bg-white bg-opacity-0 hover:bg-opacity-40 text-2xl' onClick={scrollLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
          </div>
          <div className=' scroll-smooth template overflow-auto   mx-auto flex space-x-[5vw] mt-[5vh] flex-nowrap  overflow-x-hidden' id='temp'>
            <div className='h-[65vh] ' style={{flex: "0 0 auto"}}> <img src="./resume-1.png" className='w-[500px] h-[100%]'alt="" /> </div>
            <div className='h-[65vh] ' style={{flex: "0 0 auto"}}> <img src="./resume-2.png" className='w-[500px] h-[100%]' alt="" /> </div>
            <div className='h-[65vh] ' style={{flex: "0 0 auto"}}> <img src="./resume-3.png" className='w-[500px] h-[100%]' alt="" /> </div>
            <div className='h-[65vh] ' style={{flex: "0 0 auto"}}> <img src="./resume-4.png" className='w-[500px] h-[100%]' alt="" /> </div>
          </div>
          <div className='my-auto'>
            <button className='rounded-[50%] text-center p-4   hover:shadow-lg bg-white bg-opacity-0 hover:bg-opacity-40 text-2xl' onClick={scrollRight}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
        </div>

    </div>
    </>
    
  )
}

export default LandingPage
