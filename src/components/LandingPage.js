import React, { useEffect, useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollContainer from 'react-indiana-drag-scroll'
import Lottie from 'lottie-web';import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from 'react';

// const [a1, seta1] = useEffect('true');
// const [a2, seta2] = useEffect('false');
// const [a3, seta3] = useEffect('false');
// const [a4, seta4] = useEffect('false');

function LandingPage() {

  const container = useRef(null)
  const easytouse = useRef(null)
  const integrate = useRef(null)
  const multipletemplate = useRef(null)
  const faq = useRef(null)


  useEffect(()=>{
    const instance = Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./64947-working-man.json')
    })
    return () => instance.destroy();
  }, []);
  useEffect(()=>{
    const instance = Lottie.loadAnimation({
      container: faq.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./64947-working-man.json')
    })
    return () => instance.destroy();
  }, []);

  useEffect(()=>{
    const instance = Lottie.loadAnimation({
      container: integrate.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./cover-letter-builder.json')
    })
    return () => instance.destroy();
  }, []);
  useEffect(()=>{
    const instance = Lottie.loadAnimation({
      container: easytouse.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./easy-to-use.json')
    })
    return () => instance.destroy();
  }, []);

  useEffect(()=>{
    const instance = Lottie.loadAnimation({
      container: multipletemplate.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./multiple-templates.json')
    })
    return () => instance.destroy();
  }, []);

  const a1=()=> {
    var a = document.getElementById('a1');  
    var b = document.getElementById('a2');  
    var c = document.getElementById('a3');  
    var d = document.getElementById('a4');

    console.log(a.clientHeight);

    if (a.clientHeight == '0') {
      a.style.height = 'auto';
      a.style.padding = "1rem"; 
      a.style.border = "1px solid #94A3B8";
      b.style.height = c.style.height = d.style.height = '0';
      b.style.padding = c.style.padding = d.style.padding = '0';
      b.style.border = c.style.border = d.style.border = '0';
      
    } else {
      a.style.height = '0';
      a.style.padding = '0';
      a.style.border = '0';
    }   
  }
  const a2=()=> {
    var a = document.getElementById('a1');  
    var b = document.getElementById('a2');  
    var c = document.getElementById('a3');  
    var d = document.getElementById('a4');
    
    if (b.clientHeight == '0') {
      b.style.height = 'auto';
      b.style.padding = "1rem"; 
      b.style.border = "1px solid #94A3B8";      
      a.style.height = c.style.height = d.style.height = '0';
      a.style.padding = c.style.padding = d.style.padding = '0';
      a.style.border = c.style.border = d.style.border = '0';
    } else {
      b.style.height = '0';
      b.style.padding = '0';
      b.style.border = '0';
    }   
  }
  const a3=()=> {
    var a = document.getElementById('a1');  
    var b = document.getElementById('a2');  
    var c = document.getElementById('a3');  
    var d = document.getElementById('a4');
    
    if (c.clientHeight == '0') {
      c.style.height = 'auto';
      c.style.padding = "1rem"; 
      c.style.border = "1px solid #94A3B8";   
      b.style.height = a.style.height = d.style.height = '0';
      b.style.padding = a.style.padding = d.style.padding = '0';
      b.style.border = a.style.border = d.style.border = '0';
    } else {
      c.style.height = '0';
      c.style.padding = '0';
      c.style.border = '0';
    }   
  }
  
  const a4=()=> {
    var a = document.getElementById('a1');  
    var b = document.getElementById('a2');  
    var c = document.getElementById('a3');  
    var d = document.getElementById('a4');

    if (d.clientHeight == '0') {
      d.style.height = 'auto';
      d.style.padding = "1rem"; 
      d.style.border = "1px solid #94A3B8";   
      b.style.height = c.style.height = a.style.height = '0';
      b.style.padding = c.style.padding = a.style.padding = '0';
      b.style.border = c.style.border = a.style.border = '0';
    } else {
      d.style.height = '0';
      d.style.padding = '0';
      d.style.border = '0';
    }   
  }
  AOS.init();
  return (
    
    <>
     
    <div className='first-component flex text-white h-[75vh]' style={{backgroundImage: 'linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% )'}}>
     <div className=' mx-12 slideleft'>
      <div className=' relative top-[25%] text-3xl lg:text-5xl font-bold font-sans'>Craft Your Career Path with Precision..</div>
      <div className=' relative top-[32%] text-2xl lg:text-4xl mt-4 font-bold font-sans'>Your Perfect Resume Starts Here!</div>
      <div className='mx-2 flex mt-12 space-x-8 relative top-[27vh] slideleft'>
        <button className='px-2 text-md rounded-md  font-semibold shadow-lg lg:px-5 lg:text-lg py-3 ' style={{backgroundImage: 'linear-gradient(90deg,#e8b93f,#d68423)'}}>Start Now</button>
        <button className='px-2 text-md rounded-md  font-semibold shadow-lg lg:px-5 lg:text-lg py-3 ]' style={{backgroundImage: 'linear-gradient(90deg,#e8b93f,#d68423)'}}>Click Here</button>
      </div>
     </div>
     <div className='md:flex hidden justify-end w-1/2 '><img className='mr-[10%] slideright h-[110%]' src="./resume-img.png" alt="" /></div>
    </div>
    <div data-aos="fade-right" className='second-component m-2 h-[110vh] lg:h-auto  py-[2%] px-[3%]' style={{marginTop: '25vh'}}>
        <h1 className='text-2xl md:text-5xl relative top-[7vh] text-slate-600 text-center font-bold font-mons'>Templates For Resume</h1>

        <div className='flex relative top-[10vh] h-[90vh] w-auto overflow-x-hidden md:h-[90vh] md:w-auto mx-auto space-x-10'>
      
          <ScrollContainer vertical={false} horizontal={true} className="scroll-container h-fit overflow-x-hidden">
        
        <div className=' scroll-smooth template h-full mx-auto flex space-x-[3vw] mt-[5vh] flex-nowrap overflow-y-visible' id='temp'>
        <div className='h-[100%] w-[72%] px-1 md:px-2 py-4 md:w-[27%]' style={{flex: "0 0 auto"}}> <img src="./resume-1.jpeg" className='h-[100%] cursor-pointer hover:scale-[110%] transition-all duration-300  w-[100%] shadow-2xl'alt="" /> </div>
        <div className='h-[100%] w-[72%] px-1 md:px-2 py-4 md:w-[27%]' style={{flex: "0 0 auto"}}> <img src="./resume-2.jpeg" className='h-[100%] cursor-pointer hover:scale-[110%] transition-all duration-300  w-[100%] shadow-2xl' alt="" /> </div>
        <div className='h-[100%] w-[72%] px-1 md:px-2 py-4 md:w-[27%]' style={{flex: "0 0 auto"}}> <img src="./resume-3.jpeg" className='h-[100%] cursor-pointer hover:scale-[110%] transition-all duration-300  w-[100%] shadow-2xl' alt="" /> </div>
        <div className='h-[100%] w-[72%] px-1 md:px-2 py-4 md:w-[27%]' style={{flex: "0 0 auto"}}> <img src="./resume-4.jpeg" className='h-[100%]  cursor-pointer hover:scale-[110%] transition-all duration-300 w-[100%] shadow-2xl' alt="" /> </div>
      </div>
        
      </ScrollContainer>

        </div>

    </div>
    <div className='third-component'>
      <div className='bg-black h-fit font-mons mt-10  text-[#ffffff]'>
          <h1 className='text-center justify-center  pt-20 text-4xl lg:text-6xl font-mons font-bold'> Key Features </h1>
          <div className='flex flex-col lg:flex-row mx-auto mt-8 w-[80vw] content-center'>
            <div data-aos="fade-right" className='flex  flex-col lg:w-1/2 p-1 lg:p-4'>
              <div  className='font-bold h-[10vh] pt-[4vh] lg:pt-[2vh] lg:p-12 px-0 text-2xl lg:text-4xl'> Easy to Use </div>
              <div className=' lg:leading-10 lg:h-[50vh] px-0 py-10 lg:p-12 text-lg lg:text-2xl text-justify'> Our user-friendly interface makes creating a professional resume effortless. With intuitive controls and a seamless workflow, you can navigate through the resume-building process with ease, whether you are a seasoned professional or a first-time job seeker. </div>
              </div>
              <div className='easy-to-use mx-auto h-[50vh] lg:h-[60vh]' ref={easytouse}></div>
          </div>
          <div className='flex-col-reverse lg:flex-row flex mx-auto mt-8 w-[80vw] content-center'>
          <div className='easy-to-use mx-auto h-[50vh] lg:h-[60vh]' ref={multipletemplate}></div>
            <div data-aos="fade-left"  className='flex  flex-col lg:w-1/2 p-1 lg:p-4'>
              <div className='font-bold h-[10vh] pt-[4vh] lg:pt-[2vh] lg:p-12 px-0 text-2xl lg:text-4xl'> Multiple Template Library</div>
              <div className='lg:leading-10 lg:h-[50vh] px-0 py-10 lg:p-12 text-lg lg:text-2xl text-justify'> Choose from a wide range of beautifully designed templates that cater to various industries and career levels. Each template is carefully crafted to ensure a visually appealing layout while maintaining readability and highlighting your key qualifications. </div>
              </div>
          </div>
          <div  className='flex flex-col lg:flex-row mx-auto mt-8 w-[80vw] content-center'>
            <div data-aos="fade-right"  className='flex  flex-col lg:w-1/2 p-1 lg:p-4'>
              <div className='font-bold h-[10vh] pt-[4vh] lg:pt-[2vh] lg:p-12 px-0 text-2xl lg:text-4xl'> Seamless Integration </div>
              <div className='lg:leading-10 lg:h-[50vh] px-0 py-10 lg:p-12 text-lg lg:text-2xl text-justify'> Easily export your resume in PDF and share it directly on professional networking platforms like LinkedIn. Our platform ensures your resume looks flawless across all devices and platforms. </div>
              </div>
              <div className='easy-to-use mx-auto h-[50vh] lg:h-[60vh]' ref={integrate}></div>
          </div>
          
      </div>
    </div>
    <div data-aos='fade-up' className="fourth-component py-20 px-10 lg:px-20 bg-white justify-between flex flex-col md:flex-row h-auto ">
      <div className='flex flex-col w-full lg:w-1/2'> 
        <div className='text-5xl mx-auto lg:text-6xl font-mons font-bold p-4 leading-[4rem]'> <span className="font-bold text-red-600">F</span>requently <span className="font-bold text-red-600">A</ span>sked <span className="font-bold text-red-600">Q</span>uestions </div> 
        <div className='container h-[50vh] mx-auto lg:hidden ' ref={faq}></div>
        <div className='font-mons mt-8 text-xl lg:text-2xl'>
          <button className='text-left w-full p-4 border border-1 rounded-t-lg border-slate-400 focus:border-blue-400 focus:shadow-sm  focus:shadow-blue-200 'onClick={a1}>
              <div className='flex justify-between font-bold'> <div> Q. What is Resume Builder ?</div> <div id='cd1'><FontAwesomeIcon  icon={faChevronDown} /> </div></div>
          </button>
          <div id='a1' className='overflow-hidden h-auto text-left  transition-all duration-300 w-full p-4 border border-1  border-slate-400 '>
          Resume Builder is an online platform that assists individuals in creating professional resumes tailored to their skills, achievements, and career aspirations.
          </div>
          <button className='text-left w-full p-4 border border-1  border-slate-400 focus:border-blue-400 focus:shadow-sm  focus:shadow-blue-200 'onClick={a2}>
              <div className='flex justify-between font-bold'> <div> Q. Do I need any prior experience in resume writing to use Resume Builder ? </div> <div id='cd2'><FontAwesomeIcon icon={faChevronDown} /> </div></div>
          </button>
          <div id='a2' className='overflow-hidden h-0 text-left  transition-all duration-300 w-full p-0 border border-0  border-slate-400 '>
               No, Resume Builder is designed to be user-friendly and intuitive, making it accessible to users with any level of experience in resume writing. Our platform provides templates, suggestions, and guidance throughout the process.
          </div>
          <button className='text-left w-full p-4 border border-1  border-slate-400 focus:border-blue-400 focus:shadow-sm  focus:shadow-blue-200 'onClick={a3}>
              <div className='flex justify-between font-bold'> <div> Q. Are the templates provided by Resume Builder customizable? </div> <div id='cd3'><FontAwesomeIcon icon={faChevronDown} /> </div></div>
          </button>
          <div id='a3' className='overflow-hidden h-0 text-left  transition-all duration-300 w-full p-0 border border-0  border-slate-400 '>
          Yes, Resume Builder offers a range of customizable templates to suit different industries and job positions. You can personalize the templates by changing fonts, colors, sections, and layouts to match your preferences.
          </div>
          <button id='q4' className='text-left w-full p-4 border border-1 rounded-b-lg border-slate-400 focus:border-blue-400 focus:shadow-sm  focus:shadow-blue-200 'onClick={a4}>
              <div className='flex justify-between font-bold'> <div>Q. Is there a free trial or a subscription fee for Resume Builder ?</div> <div id='cd4'><FontAwesomeIcon icon={faChevronDown} /> </div></div>
          </button>
          <div id='a4' className='overflow-hidden h-0 text-left transition-all duration-300  w-full p-0 border border-0 rounded-b-lg border-slate-400 '>
          No, Resume Builder is completely free to use. You can create, customize, and download your professional resume without any cost.
          </div>
        </div>
        
      </div>

      <div className='container w-auto hidden lg:block' ref={container}></div>

    </div>
    <div className="footer h-[30vh] bg-[#f9f8f2]"></div>
    </>
    
  );
}

export default LandingPage
