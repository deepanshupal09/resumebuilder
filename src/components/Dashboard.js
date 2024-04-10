import React, { useEffect, useState } from "react";
import { getCookie } from "../cookies";
import Navbar from "./Navbar";
import temp from "../images/template.png";
import { Button } from "@mui/joy";
import Footer from "./Footer";

export default function Dashboard() {
  const [user, setUser] = useState();
  useEffect(() => {
    if (getCookie("auth")) {
      setUser(JSON.parse(getCookie("auth")));
    }
  }, []);

  const resumes = [
    { name: "Software Engineer", created: "2 days ago" },
    { name: "Product Designer", created: "5 days ago" },
    { name: "Marketing Manager", created: "2 weeks ago" },
  ];

  return (
    <>
      <Navbar />
      <div className="mt-[7vh] h-fit ">
        <div className="my-[13vh] mx-[12vw] text-[#121417] font-manrope ">
          <div className="text-[40px] font-bold  ">
            Welcome back, {user?.name}!
          </div>
          <div className="text-[20px] font-semibold my-10">
            Your recent activity
          </div>

          {resumes.map((e) => {
            return (
              <div className="my-10 flex flex-row justify-between">
                <div className="flex flex-row">
                  <img className="w-20 h-20 rounded-lg" src={temp} />
                  <div className="mx-5">
                    <div className="mt-1 font-semibold">{e.name}</div>
                    <div className="mt-1">Last edited {e.created}</div>
                  </div>
                </div>
                <div>
                  <button className="bg-[#F0F2F5] rounded-[12px] py-0 px-[16px] h-[32px] w-[84px] text-[#121417] text-[16px] flex justify-center items-center">
                    Edit
                  </button>
                </div>
              </div>
            );
          })}

          <div className="text-[22px] font-extrabold my-10">
            Account Settings
          </div>

          <div>
            <div className="text-[18px] font-semibold  ">
              Personal Information
            </div>
            <div className="text-[16px] font-light cursor-pointer hover:underline">
              Update
            </div>
          </div>

          <div className="my-10">
            <div className="text-[18px] font-semibold  ">Change Password</div>
            <div className="text-[16px] font-light cursor-pointer hover:underline">
              Update
            </div>
          </div>

          <div className="my-10">
            <div className="text-[18px] font-semibold  ">Delete account</div>
            <div className="text-[16px] font-light cursor-pointer hover:underline">
              Update
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
