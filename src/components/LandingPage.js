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
     
    <div className='first-component flex text-white h-[35%]' style={{backgroundImage: 'linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% )'}}>
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
    <div data-aos="fade-right" className='second-component  py-[2%] px-[3%]' style={{marginTop: '20%'}}>
        <h1 className='text-5xl text-center font-bold font-mons'>Templates For Resume</h1>

        <div className='flex h-[20%] w-[80%] mx-auto space-x-10'>
          <div className='my-auto'>
            <button className='rounded-[50%] text-center px-4  hover:shadow-lg bg-white bg-opacity-0 hover:bg-opacity-40 text-2xl' onClick={scrollLeft}>&nbsp;<FontAwesomeIcon icon={faChevronLeft} />&nbsp;</button>
          </div>
          <div className='scroll-smooth template overflow-auto  h-[25%] mx-auto flex space-x-[5%] mt-[5%] flex-nowrap  overflow-x-hidden' id='temp'>
            <div className='w-[30%] h-[8%]' style={{flex: "0 0 auto"}}> <img src="./resume-1.png"  alt="" /> </div>
            <div className='w-[30%] h-[8%]' style={{flex: "0 0 auto"}}> <img src="./resume-2.png"  alt="" /> </div>
            <div className='w-[30%] h-[8%]' style={{flex: "0 0 auto"}}> <img src="./resume-3.png"  alt="" /> </div>
            <div className='w-[30%] h-[8%]' style={{flex: "0 0 auto"}}> <img src="./resume-4.png"  alt="" /> </div>
          </div>
          <div className='my-auto'>
            <button className='rounded-[50%] text-center px-4   hover:shadow-lg bg-white bg-opacity-0 hover:bg-opacity-40 text-2xl' onClick={scrollRight}>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} />&nbsp;&nbsp;&nbsp;</button>
          </div>
        </div>

    </div>
    </>
    
  )
}

export default LandingPage
