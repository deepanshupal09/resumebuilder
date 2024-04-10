import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import "./resume.css";
import ReactToPrint from "react-to-print";

export default function Resume() {
  const ref = useRef();

  return (
    <>
      <div className="" ref={ref}>
        <div className=" text-xl mt-[0.33in] mb-[0.19in] mx-[0.4in]  ">
          <div className="text-center font-semibold uppercase text-[28px]">
            anant bansal
          </div>
          <div className="text-center text-[18px] mt-1">
            +1(123) 456-7890 ⋄ Shahadra, New Delhi, India
          </div>
          <div className="education">
            <div className="font-bold my-2 text-[18px]">EDUCATION</div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="flex  justify-between my-2 text-[15px]">
              <div className="flex ">
                <div className="font-bold">
                  Masters In Computer Science&nbsp;
                </div>
                <div className="">
                  {" "}
                  Delhi Skill and Entrepreneurship University{" "}
                </div>
              </div>
              <div>2025-2035</div>
            </div>
            <div className="flex text-[15px] justify-between my-2">
              <div className="flex ">
                <div className="font-bold">
                  Bachelors In Computer Science&nbsp;
                </div>
                <div className=""> Stanford University, Noida </div>
              </div>
              <div>2025-2035</div>
            </div>
          </div>
          <div className="skills">
            <div className="font-bold my-2 text-[18px]">SKILLS</div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="ml-4 text-[15px]">
                <ul className="list-disc">
                  <li> C++, python , java  </li>
                  <li> sql, nextjs, typscript  </li>
                  <li> frontend, backend full stack, fern,mern,dern,cern </li>
                </ul>
              </div>
          </div>

          <div className="work-ex">
            <div className="font-bold my-2 text-[18px]">EXPERIENCE</div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="work-ex-1">
              <div className="flex font-semibold justify-between mt-2  text-[17px]">
                <div className="flex ">
                  <div className="">Jhaadu waala</div>
                </div>
                <div>Aug 2024 - November 2024</div>
              </div>
              <div className="flex -mt-2 font-light  justify-between text-[15px]">
                <div className="flex ">
                  <div className="font-light">Pinegap.ai</div>
                </div>
                <div>Shahadra, New Delhi</div>
              </div>
              <div className="ml-4 text-[15px]">
                <ul className="list-disc">
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                </ul>
              </div>
            </div>
            <div className="work-ex-1">
              <div className="flex font-semibold justify-between mt-2  text-[17px]">
                <div className="flex ">
                  <div className="">Jhaadu waala</div>
                </div>
                <div>Aug 2024 - November 2024</div>
              </div>
              <div className="flex -mt-2 font-light  justify-between text-[15px]">
                <div className="flex ">
                  <div className="font-light">Pinegap.ai</div>
                </div>
                <div>Shahadra, New Delhi</div>
              </div>
              <div className="ml-4 text-[15px]">
                <ul className="list-disc">
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="work-ex">
            <div className="font-bold my-2 text-[18px]">PROJECTS</div>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="work-ex-1">
              <div className="flex font-semibold justify-between mt-2  text-[17px]">
                <div className="flex ">
                  <div className="">Made GPT-6 with Meta 9</div>
                </div>
                <div>Aug 2024 - November 2024</div>
              </div>
              <div className="flex -mt-2 font-light  justify-between text-[15px]">
                <div className="flex ">
                  <div className="font-light">Github Link</div>
                </div>
                {/* <div>Shahadra, New Delhi</div> */}
              </div>
              <div className="ml-4 text-[15px]">
                <ul className="list-disc">
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                </ul>
              </div>
            </div>
            <div className="work-ex-1">
              <div className="flex font-semibold justify-between mt-2  text-[17px]">
                <div className="flex ">
                  <div className="">Apple Vision X pro</div>
                </div>
                <div>Aug 2029 - November 2032</div>
              </div>
              <div className="flex -mt-2 font-light  justify-between text-[15px]">
                <div className="flex ">
                  <div className="font-light">Github Link</div>
                </div>
                {/* <div>Shahadra, New Delhi</div> */}
              </div>
              <div className="ml-4 text-[15px]">
                <ul className="list-disc">
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                  <li>Achieved X% growth for XYZ using A, B, and C skills. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactToPrint
        bodyClass="print-agreement"
        content={() => ref.current}
        trigger={() => <button type="primary">Print</button>}
      />
    </>
  );
}