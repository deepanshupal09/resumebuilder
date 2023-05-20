import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState('false');

  const showMenu = () => {
    if (open === 'false') {
      console.log(open);
      document.getElementById('menu').style.height = '100vh';
      setOpen('true');
    } else {
      console.log(open);
      document.getElementById('menu').style.height = '0';
      setOpen('false');
    }
  }

  const test = () => {
    var a = window.getComputedStyle( document.body ,null).getPropertyValue('background-color'); 
    if (a === 'rdb(233,233,233)') {
      document.getElementById('nav').style.color = 'black';
    }
    console.log(a)
  }

  return (
<>
    <div>
      {window.onscroll = test}
      <div id='nav' className=" shadow-2xl fixed top-0 justify backdrop-blur-3xl backdrop-filter bg-opacity-30 z-10 w-[100%] flex justify-between h-[7vh] bg-black text-lg  text-white" >
        <div className="my-auto"> 
          <img
            className="w-[70%]"
            src="./resume_builder.png"
            alt="Resume Builder"
          />
        </div>
        <div className="lg:hidden text-2xl w-[10vw] flex items-center align-baseline justify-center cursor-pointer">
            <button onClick={showMenu}>
             <FontAwesomeIcon icon={faBars} /> </button>
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
    <div className="flex lg:hidden flex-col divide-y-0 text-xl overflow-hidden text-white w-[100%] h-[0] fixed top-[7vh] z-10 transition-all duration-500 bg-black backdrop-blur-3xl backdrop-filter bg-opacity-30 "  id='menu'>
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
