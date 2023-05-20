import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div>
      <div className="shadow-2xl fixed top-0 z-10 w-[100%] flex justify-between h-[4%]  text-lg  text-white" style={{backgroundImage: 'linear-gradient( 90.1deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 99.9% )'}}>
        <div className="my-auto"> 
          <img
            className="w-[70%]"
            src="./resume_builder.png"
            alt="Resume Builder"
          />
        </div>
        <ul className="flex space-x-11 mr-16 my-auto ">
          <button className="hover:text-cyan-300" >
            <li className="flex">
              Build Your Resume&nbsp;
              <div id="byr"><FontAwesomeIcon icon={faChevronDown} /></div>
            </li>
          </button>
          <button className="hover:text-cyan-300">
            <li>FAQ</li>
          </button>
          <button className="hover:text-cyan-300">
            <li>About Us</li>
          </button>
          <button className="hover:text-cyan-300">
            <li>Login</li>
          </button>
          <button className="hover:text-cyan-300">
            <li>Signup</li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
