import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage() {

  const scrollRight = () => {
    document.getElementById('temp').scrollLeft += 500;
  } 
  const scrollLeft = () => {
    document.getElementById('temp').scrollLeft -= 500;
  } 
 
  return (
  
    <>
     {AOS.init()}
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
    <div data-aos="fade-right" className='second-component  py-[2%] px-[3%]' style={{marginTop: '25vh'}}>
        <h1 className='text-5xl text-slate-600 text-center font-bold font-mons'>Templates For Resume</h1>

        <div className='flex '>
          <div className='my-auto'>
            <button className='rounded-[50%] text-center p-4 hover:shadow-lg bg-white bg-opacity-0 hover:bg-opacity-40 text-2xl' onClick={scrollLeft}>&nbsp;<FontAwesomeIcon icon={faChevronLeft} />&nbsp;</button>
          </div>
          <div className='w-[80%] scroll-smooth template overflow-auto  h-[50%] mx-auto flex space-x-[5%] mt-[5%] flex-nowrap  overflow-x-hidden' id='temp'>
            <div className='w-[30%] ' style={{flex: "0 0 auto"}}> <img src="./resume-1.png" className='h-[100%]' alt="" /> </div>
            <div className='w-[30%] ' style={{flex: "0 0 auto"}}> <img src="./resume-2.png" className='h-[100%]' alt="" /> </div>
            <div className='w-[30%] ' style={{flex: "0 0 auto"}}> <img src="./resume-3.png" className='h-[100%]' alt="" /> </div>
            <div className='w-[30%] ' style={{flex: "0 0 auto"}}> <img src="./resume-4.png" className='h-[100%]' alt="" /> </div>
          </div>
          <div className='my-auto'>
            <button className='rounded-[50%] text-center p-4  hover:shadow-lg bg-white bg-opacity-0 hover:bg-opacity-40 text-2xl' onClick={scrollRight}>&nbsp;<FontAwesomeIcon icon={faChevronRight} />&nbsp;</button>
          </div>
        </div>

    </div>
    </>
    
  )
}

export default LandingPage
