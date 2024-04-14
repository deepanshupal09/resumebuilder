import React, { useEffect, useState } from "react";
import { getCookie } from "../cookies";
import Navbar from "./Navbar";
import temp from "../images/template.png";
import { Button } from "@mui/joy";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function formatTimeDifference(timeDifferenceInMinutes) {
  if (timeDifferenceInMinutes < 1) {
    return "just now";
  } else if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes} minutes ago`;
  } else if (timeDifferenceInMinutes < 24 * 60) {
    const hours = Math.floor(timeDifferenceInMinutes / 60);
    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else {
    const days = Math.floor(timeDifferenceInMinutes / (24 * 60));
    return `${days} ${days > 1 ? 'days' : 'day'} ago`;
  }
}

export default function Dashboard() {
  const [user, setUser] = useState();
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("auth")) {
      setUser(JSON.parse(getCookie("auth")));
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/data/getAllDetailsByEmail", {
        headers: { email: user?.email },
      })
      .then((response) => {
        const data = response.data;
        const tempResume = [];
        const currTime = new Date(); // Get current time only once
        data.forEach((dataItem) => {
          const time = new Date(dataItem.modified);
          const timeDifferenceInMillis = currTime - time;
          const timeDifferenceInMinutes = Math.floor(
            timeDifferenceInMillis / (1000 * 60) // Convert milliseconds to minutes
          );
          const formattedTimeDifference = formatTimeDifference(timeDifferenceInMinutes);
          tempResume.push({
            name: dataItem.detailid,
            lastModified: formattedTimeDifference,
            timeDifference: timeDifferenceInMinutes, // Add time difference to each item
          });
        });
        // Sort tempResume array based on timeDifference in descending order
        tempResume.sort((a, b) => a.timeDifference - b.timeDifference);
        setResumes(tempResume)
      })
      .catch((error) => {
        // Handle error
      });
  }, [user]); // Add user to dependency array if user may change

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
                    <div className="mt-1">Last edited {e.lastModified}</div>
                  </div>
                </div>
                <div>
                  <button onClick={()=>{navigate(`/buildresume/${e.name}`)}} className="bg-[#F0F2F5] rounded-[12px] py-0 px-[16px] h-[32px] w-[84px] text-[#121417] text-[16px] flex justify-center items-center">
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
