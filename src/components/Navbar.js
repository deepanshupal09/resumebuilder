import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './style.css'

function Navbar() {

  const [open, setOpen] = useState('false');

  const showMenu = () => {
    if (open === 'false') {

      document.getElementById('menu').style.height = '100vh';
      setOpen('true');
    } else {

      document.getElementById('menu').style.height = '0';
      setOpen('false');
    }
  }

  return (
<>
    <div>

      <div id='nav' className=" lg:shadow-2xl fixed top-0 justify backdrop-blur-lg backdrop-filter bg-opacity-30 z-10 w-screen flex justify-between h-[7vh] bg-black text-lg  text-white" >
        <div className="my-auto"> 
          <img
            className="w-[70%]"
            src="./resume_builder.png"
            alt="Resume Builder"
          />
        </div>
        <div className="lg:hidden text-2xl w-[10vw] flex items-center align-baseline justify-center cursor-pointer">
            <button onClick={showMenu}>
             <FontAwesomeIcon className={`${open}?"hidden":"visible"`} icon={faBars} /> 
    
             </button>
        </div>

        
        <ul className="hidden lg:flex  space-x-11 mr-16 my-auto ">
        <div className="">
         
          <button className=" px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 " >
            <li className="flex ">
              Build Your Resume&nbsp;
              <div id="byr"><FontAwesomeIcon icon={faChevronDown} /></div>
            </li>
          </button>

          </div>
          <button className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
            <li>FAQ</li>
          </button>
          <button className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
            <li>About Us</li>
          </button>
          <button className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
            <li>Login</li>
          </button>
          <button className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
            <li>Signup</li>
          </button>
        </ul>
      </div>
    </div>
    <div className="flex lg:hidden flex-col divide-y-0 text-xl overflow-hidden text-white w-[100%] h-[0] fixed top-[7vh] z-10 transition-all duration-500 bg-black backdrop-blur-lg backdrop-filter bg-opacity-30 "  id='menu'>
      <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10 mt-10 ">Build Your Resume</div>
      <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">FAQ</div>
      <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">About Us</div>
      <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">Login</div>
      <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">Sign up</div>
    </div>
    </>
  );
}

export default Navbar;