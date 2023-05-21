import React, {useEffect, useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollContainer from 'react-indiana-drag-scroll'
import Lottie from 'lottie-web';

function LandingPage() {

  const container = useRef(null)
  const easytouse = useRef(null)
  const integrate = useRef(null)
  const multipletemplate = useRef(null)


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
    <div data-aos="fade-right" className='second-component m-2 h-[100vh] py-[2%] px-[3%]' style={{marginTop: '25vh'}}>
        <h1 className='text-2xl lg:text-5xl relative top-[7vh] text-slate-600 text-center font-bold font-mons'>Templates For Resume</h1>

        <div className='flex relative top-[10vh] h-[100vw] w-[95vw] overflow-x-hidden lg:h-[45vw] lg:w-[95vw]  mx-auto space-x-10'>
      
          <ScrollContainer vertical={false} horizontal={true} className="scroll-container ">
        
        <div className=' scroll-smooth template   mx-auto flex space-x-[3vw] mt-[5vh] flex-nowrap overflow-y-visible ' id='temp'>
        <div className='h-[95vw] w-[69vw] lg:w-[25vw] overflow-visible px-1 lg:px-2 py-4 lg:h-[35vw]' style={{flex: "0 0 auto"}}> <img src="./resume-1.jpeg" className='h-[100%] cursor-pointer hover:scale-[110%] transition-all duration-300  w-[100%] shadow-2xl'alt="" /> </div>
        <div className='h-[95vw] w-[69vw] lg:w-[25vw] overflow-visible px-1 lg:px-2 py-4 lg:h-[35vw]' style={{flex: "0 0 auto"}}> <img src="./resume-2.jpeg" className='h-[100%] cursor-pointer hover:scale-[110%] transition-all duration-300  w-[100%] shadow-2xl' alt="" /> </div>
        <div className='h-[95vw] w-[69vw] lg:w-[25vw] overflow-visible px-1 lg:px-2 py-4 lg:h-[35vw]' style={{flex: "0 0 auto"}}> <img src="./resume-3.jpeg" className='h-[100%] cursor-pointer hover:scale-[110%] transition-all duration-300  w-[100%] shadow-2xl' alt="" /> </div>
        <div className='h-[95vw] w-[69vw] lg:w-[25vw] overflow-visible px-1 lg:px-2 py-4 lg:h-[35vw]' style={{flex: "0 0 auto"}}> <img src="./resume-4.jpeg" className='h-[100%]  cursor-pointer hover:scale-[110%] transition-all duration-300 w-[100%] shadow-2xl' alt="" /> </div>
      </div>
        
      </ScrollContainer>

        </div>

    </div>
    <div className='bg-black h-[210vh] font-mons  text-[#ffffff]'>
        <h1 className='text-center justify-center  pt-20 text-6xl font-mons font-bold'> Key Features </h1>
        <div className='flex mx-auto mt-8 w-[80vw] content-center'>
          <div data-aos="fade-right" className='flex  flex-col w-1/2 p-4'>
            <div  className='font-bold  pt-20 px-12 text-4xl'> Easy to Use </div>
            <div className='leading-10  p-12 text-2xl text-justify letter'> Our user-friendly interface makes creating a professional resume effortless. With intuitive controls and a seamless workflow, you can navigate through the resume-building process with ease, whether you are a seasoned professional or a first-time job seeker. </div>
            </div>
            <div className='easy-to-use mx-auto h-[60vh]' ref={easytouse}></div>
        </div>
        <div className='flex mx-auto mt-8 w-[80vw] content-center'>
        <div className='easy-to-use mx-auto h-[60vh]' ref={multipletemplate}></div>
          <div data-aos="fade-left"  className='flex  flex-col w-1/2 p-4'>
            <div className='font-bold  pt-20 px-12 text-4xl'> Multuple Template Library</div>
            <div className='leading-10  p-12 text-2xl text-justify letter'> Choose from a wide range of beautifully designed templates that cater to various industries and career levels. Each template is carefully crafted to ensure a visually appealing layout while maintaining readability and highlighting your key qualifications. </div>
            </div>
        </div>
        <div  className='flex mx-auto mt-8 w-[80vw] content-center'>
          <div data-aos="fade-right"  className='flex  flex-col w-1/2 p-4'>
            <div className='font-bold  pt-20 px-12 text-4xl'> Seamless Integration </div>
            <div className='leading-10  p-12 text-2xl text-justify letter'> Easily export your resume in PDF and share it directly on professional networking platforms like LinkedIn. Our platform ensures your resume looks flawless across all devices and platforms. </div>
            </div>
            <div className='easy-to-use mx-auto h-[60vh]' ref={integrate}></div>
        </div>
        
    </div>
    <div className="bg-[#ffffff] justify-between flex h-[100vh] ">
      <div></div>
      <div className='container w-[55vw]' ref={container}></div>
    </div>
    </>
    
  );
}

export default LandingPage
