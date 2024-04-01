import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import resbuil from "../images/resumebuilder.png";
import "./style.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { delete_cookie, getCookie } from "../cookies";
import LaunchIcon from "@mui/icons-material/Launch";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  const [open, setOpen] = useState("false");
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // const user = getCookie("auth");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    delete_cookie("auth");
    console.log("location: ", location.pathname);
    if (location.pathname === "/dashboard") {
      navigate("/");
    } else {
      navigate(0);
    }
    console.log("logging out");
    // navigate(0);
  };

  const showMenu = () => {
    if (open === "false") {
      document.getElementById("menu").style.height = "100vh";
      setOpen("true");
    } else {
      document.getElementById("menu").style.height = "0";
      setOpen("false");
    }
  };

  useEffect(() => {
    if (getCookie("auth")) {
      setUser(JSON.parse(getCookie("auth")));
    }
  }, []);

  return (
    <>
      <div>
        {console.log(1, user)}
        <div
          id="nav"
          className=" lg:shadow-2xl  absolute top-0 justify backdrop-blur-lg backdrop-filter bg-opacity-30 z-10 w-screen flex justify-between h-[7vh] bg-black text-lg  text-white"
        >
          <div className="my-auto pl-10">
            <Link to="/">
              <img className="w-[70%]" src={resbuil} alt="Resume Builder" />
            </Link>
          </div>
          <div className="lg:hidden text-2xl w-[10vw] flex items-center align-baseline justify-center cursor-pointer">
            <button onClick={showMenu}>
              <FontAwesomeIcon
                className={`${open}?"hidden":"visible"`}
                icon={faBars}
              />
            </button>
          </div>
          <div className="flex gap-y-2 p-2 mr-5 gap-x-4">
            <ul className=" hidden lg:flex  space-x-11  my-auto ">
              <HashLink smooth to={"/#Templates"}>
                <div className="">
                  <button className=" px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
                    <li className="flex ">
                      Build Your Resume&nbsp;
                      <div id="byr">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                    </li>
                  </button>
                </div>
              </HashLink>
              <HashLink smooth to={"/#FAQ"}>
                <button className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
                  <li>FAQ</li>
                </button>
              </HashLink>
              <button className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
                <li>About Us</li>
              </button>
              {!user ? (
                <>
                  <HashLink
                    to={"/login"}
                    className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 "
                  >
                    <li>Login</li>
                  </HashLink>

                  <button className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 ">
                    <Link to="/signup">
                      <li>Signup</li>
                    </Link>
                  </button>
                </>
              ) : (
                ""
                // <button onClick={handleLogout}
                // className="px-2 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md py-2 flex flex-row items-center space-x-5">
                //   <div>{user?.name}</div>
                //   <button

                //   >
                //     <img className="w-8 h-8 rounded-full" src={user?.picture}></img>
                //     {/* <li>Logout</li> */}
                //   </button>
                // </button>
              )}
            </ul>
            {user && (
              <div className="">
                <button
                  onClick={toggleDropdown}
                  className="px-2 overflow-hidden w-fit bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg py-2 flex flex-row items-center space-x-5"
                >
                  {/* <div>{user?.name}</div> */}
                  <img
                    className="w-8 h-8 rounded-full border-white border-2"
                    src={user?.picture}
                    alt={user?.name}
                  ></img>
                </button>

                {isOpen && (
                  <div
                    className={`backdrop-blur-lg absolute right-7 top-[7vh]  backdrop-filter text-black   mt-2  bg-white border rounded-lg `}
                  >
                    <Link
                      to="/dashboard"
                      className="flex space-x-2 rounded-t-lg items-center p-6  bg-white bg-opacity-0 hover:bg-opacity-30 w-fit"
                    >
                      <img
                        className="w-12 h-12 rounded-full border-white border-2"
                        src={user?.picture}
                        alt={user?.name}
                      />
                      <div className="flex flex-col gap-1 w-fit">
                        <div className="px-2 whitespace-nowrap overflow-hidden overflow-ellipsis ">
                          {user?.name}
                        </div>
                        <div className="px-2 text-sm  text-slate-600">
                          Account
                        </div>
                      </div>
                    </Link>
                    <div
                      className="flex cursor-pointer rounded-b-lg gap-2 items-center px-6 py-2 text-[1.05rem]  bg-white bg-opacity-0 hover:bg-opacity-30 w-full justify-between"
                      onClick={handleLogout}
                    >
                      <div className="p-2">
                        <LogoutIcon className="scale-90" />
                      </div>
                      <div className="w-full px-4"> Logout </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="flex lg:hidden flex-col divide-y-0 text-xl overflow-hidden text-white w-[100%] h-[0] fixed top-[7vh] z-10 transition-all duration-500 bg-black backdrop-blur-lg backdrop-filter bg-opacity-30 "
        id="menu"
      >
        <a href="#Templates">
          <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10 mt-10 ">
            Build Your Resume
          </div>
        </a>
        <a href="#FAQ">
          <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">
            FAQ
          </div>
        </a>
        <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">
          About Us
        </div>
        <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">
          Login
        </div>
        <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">
          Sign up
        </div>
      </div>
    </>
  );
}

export default Navbar;
