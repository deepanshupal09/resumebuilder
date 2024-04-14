import React, { useRef } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import resbuil from "./images/resumebuilder.png";
import "./styles/style.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { delete_cookie, getCookie } from "../cookies";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({ user, setUser }) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // const user = getCookie("auth");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    delete_cookie("auth");
    // console.log("location: ", location.pathname);
    setUser(null);
    if (location.pathname === "/dashboard") {
      navigate("/");
    } else {
      navigate(0);
    }
    console.log("logging out");
  };

  const showMenu = () => {
    if (open) {
      document.getElementById("menu").style.height = "100vh";
      setOpen(false);
    } else {
      document.getElementById("menu").style.height = "0";
      setOpen(true);
    }
  };

  const dropref = useRef(null);



  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (
        dropref.current &&
        !event.composedPath().includes(dropref.current)
      ) {
        setIsOpen(false);
      }
    });
  }, []);



  // useEffect(() => {
  //   if (getCookie("auth")) {
  //     setUser(JSON.parse(getCookie("auth")));
  //   }
  // }, []);


  return (
    <>
      <div>
        <div
          id="nav"
          className=" lg:shadow-2xl  absolute top-0  backdrop-blur-lg backdrop-filter bg-opacity-30 z-10 w-full   flex justify-between h-[7vh] bg-black text-lg  text-white"
        >
          <div className="my-auto pl-10">
            <Link to="/">
              <img className="w-[70%]" src={resbuil} alt="Resume Builder" />
            </Link>
          </div>
          <div className="lg:hidden text-2xl w-[10vw] flex items-center align-baseline justify-center cursor-pointer">
            {user ? <>
              <button
                onClick={showMenu}
                className={`px-2 overflow-hidden w-fit rounded-lg py-2 flex flex-row items-center space-x-5`}
              >
                <img
                  className="h-full scale-75 max-sm:scale-125 rounded-full aspect-square border-white border"
                  src={user?.picture}
                  alt={user?.name}
                ></img>
              </button></> :
              <button onClick={showMenu}>
                <FontAwesomeIcon
                  className={`${open}?"hidden":"visible"`}
                  icon={faBars}
                />
              </button>}
          </div>
          <div className="flex max-lg:hidden gap-y-2 p-2 mr-5 gap-x-4">
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
              {!user && (
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
              )}
            </ul>
            {user && (
              <div className="">
                <button
                  onClick={toggleDropdown}
                  ref={dropref}
                  className={`px-2 overflow-hidden w-fit bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg py-2 flex flex-row items-center space-x-5`}
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
                        src={user.picture}
                        alt={user.name}
                      />
                      <div className="flex flex-col gap-1 w-fit">
                        <div className="px-2 whitespace-nowrap overflow-hidden overflow-ellipsis ">
                          {user.name}
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
        className="flex lg:hidden flex-col  text-xl overflow-hidden text-white w-[100%] h-[0] fixed top-[7vh] z-10 transition-all duration-500 bg-black backdrop-blur-lg backdrop-filter bg-opacity-30 "
        id="menu"
      >
        <HashLink onClick={()=>{setOpen(false)}} smooth to={"/#Templates"} >
          <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10 mt-10 ">
            Build Your Resume
          </div>
        </HashLink>
        <HashLink onClick={()=>{setOpen(false)}} to={"/#FAQ"} >
          <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">
            FAQ
          </div>
        </HashLink>
        <div className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">
          About Us
        </div>
        <div onClick={() => {
          if (user) navigate("/dashboard")
          else navigate("/login")
        }} className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">
          {user ? 'Dashboard' : 'Login'}
        </div>
        <div onClick={() => {
          if (user)
            handleLogout();
          else navigate("/signup")
        }} className="py-4 bg-white bg-opacity-0 hover:bg-opacity-20 rounded-md px-10">

          {user ? 'Logout' : 'Sign Up'}
        </div>
      </div>
    </>
  );
};

export default Navbar;
