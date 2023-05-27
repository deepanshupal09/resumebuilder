import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaGithub, FaLink, FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import AOS from 'aos';
import 'aos/dist/aos.css';

function footer() {
  return (
    <div data-aos='fade-up' className='h-auto py-20 px-10 font-mons flex-row md:flex-col lg:flex-row justify-between text-lg text-slate-300 flex bg-black'>
      <div className='flex flex-col logo w-[20%]'>
        <div><img src="resumebuilder.png" alt="Resume Builder" /></div>
        <div>
          <h1 className='my-5 text-justify'>Empowering professionals to create standout resumes that showcase their unique skills. With customizable templates and expert tips, our user-friendly platform simplifies the process.</h1>
        </div>
      </div>
      <div className='mx-10 flex flex-col'>
        <div className='text-white'>Links</div>
        <div className="my-10 wrapper space-y-[0.5rem]">
          <div className='hover:text-white'><a href=''>Build Your Resume</a></div>
          <div className='hover:text-white'><a href=''>About Us</a></div>
          <div className='hover:text-white'><a href=''>FAQ</a></div>
        </div>
        </div>
      <div className='mx-10 flex flex-col'>
        <div className='text-white'>Contact</div>
        <div className="my-10 wrapper space-y-[0.5rem]">
          <div className='hover:text-white flex items-center'><ImLocation></ImLocation>&nbsp;&nbsp; <a href=''>New Delhi, India</a></div>
          <div className='hover:text-white flex items-center'><BsTelephoneFill></BsTelephoneFill>&nbsp;&nbsp; <a href=''>+1 555 555 555</a></div>
          <div className='hover:text-white flex items-center'><MdEmail></MdEmail>&nbsp;&nbsp; <a href=''>ab6157@dseu.ac.in</a></div>
        </div>
        </div>

        <div className="wrapper flex-wrap w-[15%]">
          <div className='text-5xl font-bold text-[#3df3b3]'>
            Get in touch with Us
          </div>
          <div className='flex py-10 space-x-6 text-2xl'>
          <FaFacebook className='hover:text-blue-600 cursor-pointer'></FaFacebook>
          <FaInstagram className='hover:text-[#b538cb] cursor-pointer'></FaInstagram>
          <FaTwitter className='hover:text-cyan-400 cursor-pointer'></FaTwitter>
          <FaLinkedin className='hover:text-blue-800 cursor-pointer'></FaLinkedin>
          <FaGithub className='hover:text-white cursor-pointer'></FaGithub>
          
          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
          </div>
        </div>      
    </div>
  )
}

export default footer
