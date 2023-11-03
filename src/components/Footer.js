import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaLink, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import AOS from "aos";
import resbuil from "../images/resumebuilder.png";
import "aos/dist/aos.css";

function footer() {
  AOS.init();
  return (
    <div
      data-aos="fade-up"
      className="h-auto py-20 w-[100%] footer lg:px-10 font-mons flex-col lg:flex-row justify-between text-lg text-slate-300 flex bg-black"
    >
      <div className="flex  flex-col logo lg:w-[20%]">
        <div>
          <img src={resbuil} className="mx-auto" alt="Resume Builder" />
        </div>
        <div>
          <h1 className="my-5 px-[3vw] lg:p-0 text-justify">
            Empowering professionals to create standout resumes that showcase
            their unique skills. With customizable templates and expert tips,
            our user-friendly platform simplifies the process.
          </h1>
        </div>
      </div>
      <div className="lg:mx-10 mx-auto flex flex-col">
        <div className="lg:text-left text-center text-[#3cf1b2] font-bold">
          Links
        </div>
        <div className=" my-10 wrapper space-y-[0.5rem]">
          <div className="lg:text-left text-center hover:text-white">
            <a href="">Build Your Resume</a>
          </div>
          <div className="lg:text-left text-center hover:text-white">
            <a href="">About Us</a>
          </div>
          <div className="lg:text-left text-center hover:text-white">
            <a href="">FAQ</a>
          </div>
        </div>
      </div>
      <div className="lg:mx-10 flex mx-auto flex-col">
        <div className="lg:text-left text-center text-[#3cf1b2] justify-center font-bold">
          Contact
        </div>
        <div className="my-10 wrapper space-y-[0.5rem]">
          <div className="lg:text-left text-center hover:text-white flex ">
            <ImLocation></ImLocation>&nbsp;&nbsp;{" "}
            <a href="">New Delhi, India</a>
          </div>
          <div className="lg:text-left text-center hover:text-white flex ">
            <BsTelephoneFill></BsTelephoneFill>&nbsp;&nbsp;{" "}
            <a href="">+1 555 555 555</a>
          </div>
          <div className="lg:text-left text-center hover:text-white flex ">
            <MdEmail></MdEmail>&nbsp;&nbsp; <a href="">ab6157@dseu.ac.in</a>
          </div>
        </div>
      </div>

      <div className="wrapper flex-wrap lg:w-[15%]">
        <div className="text-5xl text-center font-bold text-[#3df3b3]">
          Get in touch with Us
        </div>
        <div className="flex justify-center py-10 space-x-6 text-2xl">
          <FaFacebook className="hover:text-blue-600 cursor-pointer"></FaFacebook>
          <FaInstagram className="hover:text-[#b538cb] cursor-pointer"></FaInstagram>
          <FaTwitter className="hover:text-cyan-400 cursor-pointer"></FaTwitter>
          <FaLinkedin className="hover:text-blue-800 cursor-pointer"></FaLinkedin>
          <FaGithub className="hover:text-white cursor-pointer"></FaGithub>

          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
        </div>
      </div>
    </div>
  );
}

export default footer;
