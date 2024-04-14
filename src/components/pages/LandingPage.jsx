import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollContainer from "react-indiana-drag-scroll";
import Lottie from "lottie-web";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import res1 from "../images/resume-1.jpg";
import res2 from "../images/resume-2.jpg";
import res3 from "../images/resume-3.jpg";
import res4 from "../images/resume-4.jpg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../cookies";
import Navbar from "../Navbar";

function LandingPage() {
  const container = useRef(null);
  const firstpic = useRef(null);
  const easytouse = useRef(null);
  const integrate = useRef(null);
  const multipletemplate = useRef(null);
  const faq = useRef(null);
  const navigate = useNavigate();
  const templates = [res1, res2, res3, res4];
  const [user, setUser] = useState();

  const faqData = [
    {
      id: "q1",
      question: "What is Resume Builder?",
      answer:
        "Resume Builder is an online platform that assists individuals in creating professional resumes tailored to their skills, achievements, and career aspirations.",
      icon: faChevronUp,
    },
    {
      id: "q2",
      question: "Do I need any prior experience in resume writing to use Resume Builder?",
      answer:
        "No, Resume Builder is designed to be user-friendly and intuitive, making it accessible to users with any level of experience in resume writing. Our platform provides templates, suggestions, and guidance throughout the process.",
      icon: faChevronDown,
    },
    {
      id: "q3",
      question: "Are the templates provided by Resume Builder customizable?",
      answer:
        "Yes, Resume Builder offers a range of customizable templates to suit different industries and job positions. You can personalize the templates by changing fonts, colors, sections, and layouts to match your preferences.",
      icon: faChevronDown,
    },
    {
      id: "q4",
      question: "Is there a free trial or a subscription fee for Resume Builder?",
      answer:
        "No, Resume Builder is completely free to use. You can create, customize, and download your professional resume without any cost.",
      icon: faChevronDown,
    },
  ];

  useEffect(() => {
    if (getCookie("auth")) {
      setUser(JSON.parse(getCookie("auth")));
    }
  }, []);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: firstpic.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/first-pic.json"),
    });
    return () => instance.destroy();
  }, []);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/64947-working-man.json"),
    });
    return () => instance.destroy();
  }, []);
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: faq.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/64947-working-man.json"),
    });
    return () => instance.destroy();
  }, []);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: integrate.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/cover-letter-builder.json"),
    });
    return () => instance.destroy();
  }, []);
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: easytouse.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/easy-to-use.json"),
    });
    return () => instance.destroy();
  }, []);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: multipletemplate.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../animations/multiple-templates.json"),
    });
    return () => instance.destroy();
  }, []);

  const [expandedAnswerIndex, setExpandedAnswerIndex] = useState(0);

  const toggleAnswer = (index) => {
    setExpandedAnswerIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  AOS.init();
  return (
    <>

      <Navbar user={user} />
      <div className=" first-component flex text-white h-[90vh]">
        <div className=" mx-12 slideleft">
          <div className=" relative top-[25%] text-3xl lg:text-5xl font-bold font-sans">
            Craft Your Career Path with Precision..
          </div>
          <div className=" relative top-[32%] text-2xl lg:text-4xl mt-4 font-bold font-sans">
            Your Perfect Resume Starts Here!
          </div>
          <div className="mx-2 flex mt-12 space-x-8 relative top-[27vh] slideleft">
            <a
              href="/#Templates"
              className="px-3 text-md rounded-md  font-semibold shadow-lg lg:px-5 lg:text-lg py-4 "
              style={{
                backgroundImage: "linear-gradient(90deg,#e8b93f,#d68423)",
              }}
            >
              Create My Resume
            </a>
            {/* <button
              className="px-2 text-md rounded-md  font-semibold shadow-lg lg:px-5 lg:text-lg py-3 ]"
              style={{
                backgroundImage: "linear-gradient(90deg,#e8b93f,#d68423)",
              }}
            >
              Click Here
            </button> */}
          </div>
        </div>
        <div className="md:flex hidden justify-end w-1/2 ">
          {/* <img className='mr-[10%] slideright h-[110%]' src="./resume-img.png" alt="" /> */}
          <div className="container mr-[10%] slideright" ref={firstpic}></div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="second-component m-2 h-[110vh] lg:h-auto  py-[2%] px-[3%]"
        style={{ marginTop: "25vh" }}
      >
        <div id="Templates"></div>
        <h1 className="text-2xl md:text-5xl relative top-[7vh] text-slate-600 text-center font-bold font-mons">
          Templates For Resume
        </h1>

        <div className="flex relative top-[10vh] h-[90vh] w-auto overflow-x-hidden md:h-[90vh] md:w-auto mx-auto space-x-10">
          <ScrollContainer
            vertical={false}
            horizontal={true}
            className="scroll-container h-fit overflow-x-hidden"
          >
            <div
              className=" scroll-smooth template h-full mx-auto flex space-x-[3vw] mt-[5vh] flex-nowrap overflow-y-visible"
              id="temp" onClick={() => { }}
            >
              {templates.map((template, index) => {
                return (
                  <div key={index}
                    onClick={() => {
                      const time = (new Date()).toString();

                      navigate(`/buildresume/${user.email}${time}/${index}`)
                    }}
                    className="h-[100%] w-[72%] px-1 md:px-2 py-4 md:w-[27%]"
                    style={{ flex: "0 0 auto" }}
                  >
                    {" "}
                    <img src="" alt="" />
                    <img
                      src={template}
                      className="h-[100%] cursor-pointer hover:scale-[110%] transition-all duration-300  w-[100%] shadow-2xl"
                      alt=""
                    />{" "}
                  </div>
                )
              })}
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className="third-component">
        <div className="bg-black h-fit font-mons mt-10  text-[#ffffff]">
          <h1 className="text-center justify-center  pt-20 text-4xl lg:text-6xl font-mons font-bold">
            {" "}
            Key Features{" "}
          </h1>
          <div className="flex flex-col lg:flex-row mx-auto mt-8 w-[80vw] content-center">
            <div
              data-aos="fade-right"
              className="flex  flex-col lg:w-1/2 p-1 lg:p-4"
            >
              <div className="font-bold h-[10vh] pt-[4vh] lg:pt-[2vh] md:p-12 px-0 text-2xl lg:text-4xl">
                {" "}
                Easy to Use{" "}
              </div>
              <div className=" lg:leading-10 lg:h-[50vh] px-0 py-10 md:p-12 text-lg lg:text-2xl text-justify">
                {" "}
                Our user-friendly interface makes creating a professional resume
                effortless. With intuitive controls and a seamless workflow, you
                can navigate through the resume-building process with ease,
                whether you are a seasoned professional or a first-time job
                seeker.{" "}
              </div>
            </div>
            <div
              className="easy-to-use mx-auto h-[50vh] lg:h-[60vh]"
              ref={easytouse}
            ></div>
          </div>
          <div className="flex-col-reverse lg:flex-row flex mx-auto mt-8 w-[80vw] content-center">
            <div
              className="easy-to-use mx-auto h-[50vh] lg:h-[60vh]"
              ref={multipletemplate}
            ></div>
            <div
              data-aos="fade-left"
              className="flex  flex-col lg:w-1/2 p-1 lg:p-4"
            >
              <div className="font-bold h-[10vh] pt-[4vh] lg:pt-[2vh] lg:p-12 px-0 text-2xl lg:text-4xl">
                {" "}
                Multiple Template Library
              </div>
              <div className="lg:leading-10 lg:h-[50vh] px-0 py-10 lg:p-12 text-lg lg:text-2xl text-justify">
                {" "}
                Choose from a wide range of beautifully designed templates that
                cater to various industries and career levels. Each template is
                carefully crafted to ensure a visually appealing layout while
                maintaining readability and highlighting your key
                qualifications.{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mx-auto mt-8 w-[80vw] content-center">
            <div
              data-aos="fade-right"
              className="flex  flex-col lg:w-1/2 p-1 lg:p-4"
            >
              <div className="font-bold h-[10vh] pt-[4vh] lg:pt-[2vh] lg:p-12 px-0 text-2xl lg:text-4xl">
                {" "}
                Seamless Integration{" "}
              </div>
              <div className="lg:leading-10 lg:h-[50vh] px-0 py-10 lg:p-12 text-lg lg:text-2xl text-justify">
                {" "}
                Easily export your resume in PDF and share it directly on
                professional networking platforms like LinkedIn. Our platform
                ensures your resume looks flawless across all devices and
                platforms.{" "}
              </div>
            </div>
            <div
              className="easy-to-use mx-auto h-[50vh] lg:h-[60vh]"
              ref={integrate}
            ></div>
          </div>
        </div>
      </div>
      <div id="FAQ"></div>
      <div className="fourth-component py-20 px-10 lg:px-20 bg-white justify-between flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="text-5xl mx-auto lg:text-6xl font-mons font-bold p-4 leading-[4rem]">
            <span className="font-bold text-red-600">F</span>requently{" "}
            <span className="font-bold text-red-600">A</span>sked{" "}
            <span className="font-bold text-red-600">Q</span>uestions
          </div>
          <div className="font-mons mt-8 text-xl lg:text-2xl">
            {faqData.map((item, index) => (
              <div key={item.id}>
                <button
                  className={`w-full p-4 border border-1  ${index===0?'rounded-t-lg':''} ${index===faqData.length-1&&expandedAnswerIndex!==index?'rounded-b-lg':''} border-slate-400 focus:border-blue-400 focus:shadow-sm focus:shadow-blue-200`}
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="flex justify-between font-bold">
                    <div className="text-left">Q. {item.question}</div>
                    <div>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`h-5 transition-transform w-5 ${expandedAnswerIndex === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedAnswerIndex === index ? `border border-1 ${index===faqData.length-1?'rounded-b-lg':''} border-slate-400 p-4` : "h-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 h-auto lg:block hidden">
          <div className="container" ref={container}></div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
