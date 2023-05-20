import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div>
      <div className="shadow-2xl fixed top-0 backdrop-blur-3xl backdrop-filter bg-opacity-10 z-10 w-[100%] flex justify-between h-[7%] bg-white text-lg  text-white" >
        <div className="my-auto"> 
          <img
            className="w-[70%]"
            src="./resume_builder.png"
            alt="Resume Builder"
          />
        </div>
        <ul className="flex space-x-11 mr-16 my-auto ">
        <div className="">
         
          <button className=" px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 " >
            <li className="flex">
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
  );
}

export default Navbar;
