import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between h-[3vw]  bg-white text-lg font-semibold shadow-md text-slate-500">
        <div className="my-auto">
          <img
            className="w-[70%]"
            src="./resume_builder.png"
            alt="Resume Builder"
          />
        </div>
        <ul className="flex space-x-11 mr-16 my-auto ">
          <button className="hover:text-blue-500" >
            <li className="flex">
              Build Your Resume&nbsp;
              <div id="byr"><FontAwesomeIcon icon={faChevronDown} /></div>
            </li>
          </button>
          <button className="hover:text-blue-400">
            <li>FAQ</li>
          </button>
          <button className="hover:text-blue-400">
            <li>About Us</li>
          </button>
          <button className="hover:text-blue-400">
            <li>Login</li>
          </button>
          <button className="hover:text-blue-400">
            <li>Signup</li>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
