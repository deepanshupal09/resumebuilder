import React, { useEffect, useState } from "react";
import temp from "../images/template.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import EditIcon from '@mui/icons-material/Edit';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Transition } from 'react-transition-group';
import Navbar from "../Navbar";
import ScrollContainer from "react-indiana-drag-scroll";
import res1 from "../images/resume-1.jpg";
import res2 from "../images/resume-2.jpg";
import res3 from "../images/resume-3.jpg";
import res4 from "../images/resume-4.jpg";
import Add from "@mui/icons-material/Add";
import Input from '@mui/joy/Input';
import { delete_cookie, getCookie } from "../../cookies";


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

export default function Dashboard({ user, setUser }) {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();
  const [reRenderDetails, setReRenderDetails] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [openTemplate, setOpenTemplate] = useState(false)
  const [working, setWorking] = useState("");
  const templates = [res1, res2, res3, res4];
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  useEffect(() => {
    console.log("user info : ", user);
    if (!user) navigate("/login")
  }, [])


  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/api/data/getAllDetailsByEmail", {
        headers: { email: user?.email },
      })
      .then((response) => {
        setLoading(false);
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
  }, [user, reRenderDetails]); // Add user to dependency array if user may change

  const deleteDetail = async (e) => {
    console.log(e.name);
    setLoading(true);
    await axios.post("http://localhost:4000/api/data/deleteDetailsByDetailId", { email: user.email, detailId: e });
    setLoading(false);
    setReRenderDetails(!reRenderDetails);
  }

  const deleteAccount = async () => {
    setLoading(true);
    await axios.post("http://localhost:4000/api/data/deleteUserAndDetails", { email: user.email });
    setLoading(false);
    handleLogout();
  }

  const handleLogout = () => {
    delete_cookie("auth");
    // console.log("location: ", location.pathname);
    setUser(null);
    navigate("/");
    console.log("logging out");
  };

  


  return (
    <>
      <div className="mt-[7vh] h-fit ">
        <div className="my-[13vh] mx-[12vw] text-[#121417] font-manrope ">
          <div className="text-[40px] font-bold  ">
            Welcome back, {user?.name}!
          </div>
          <div className="flex justify-between py-10">
            <div className="text-[20px] font-semibold ">
              Your recent activity
            </div>
            <Button onClick={() => {
              const time = (new Date()).toString();
              setWorking(`${user.email}${time}`)
              setOpenTemplate(true)
            }} color="primary" variant="solid" >
              <Add className="scale-[95%]" />&nbsp;Create New Resume&nbsp;
            </Button>
          </div>

          {resumes.length === 0 && (
            <div className="">   You don't have any resumes yet. Click the button above to create a new one!</div>
          )}
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
                <div className="flex space-x-2 py-5 ">
                  {/* <button className="bg-[#F0F2F5] rounded-[12px] py-0 px-[16px] h-[32px] w-[84px] text-[#121417] text-[16px] flex justify-center items-center" onClick={() => { navigate(`/buildresume/${e.name}/2`) }} variant="soft" color="neutral">
                    Edit
                  </button> */}
                  <Button variant="outlined" onClick={() => { setWorking(e.name); setOpenTemplate(true) }}
                    color="neutral"><EditIcon className="scale-75" />&nbsp;Edit
                  </Button>
                  <Button variant="outlined" onClick={() => { setWorking(e.name); setOpen(true) }}
                    color="danger">
                    <DeleteForever /> Delete
                  </Button>
                </div>
              </div>
            );
          })}

          <div className="text-[22px] font-extrabold my-3 pb-5 border-b border-slate-800">
            Account Settings
          </div>
          {user && 'password' in user && user.password !== null && (
            <form onSubmit={async(e)=>{
              e.preventDefault();
              if (oldPassword !== user.password) {
                alert('Old password is not correct');
                return;
              }
              if (newPassword !== confirmPassword) {
                alert('New password and confirm password do not match');
                return;
              }
              setLoading(true);
              await axios.post("http://localhost:4000/api/data/updatePasswordFromUsers", { password:newPassword ,email: user.email });
              setLoading(false);

            }}>
              <div className="flex-col my-3">
                <div className="text-[19px] font-semibold py-4 ">Change Password</div>
                <div className="text-[15px] font-semibold px-1">Old password</div>
                <div className="pb-4 w-96">
                  <Input value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value);}} placeholder="Type in here…" required/>
                </div>
                <div className="text-[15px] font-semibold px-1">New password</div>
                <div className="pb-4 w-96">
                  <Input value={newPassword} onChange={(e)=>{setNewPassword(e.target.value);}} placeholder="Type in here…" required/>
                </div>
                <div className="text-[15px] font-semibold px-1">Confirm new password</div>
                <div className="pb-4 w-96">
                  <Input value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value);}} placeholder="Type in here…" required/>
                </div>
                <div className="py-2">
                  <Button 
                    type="submit"
                    variant="outlined" 
                    color="neutral">&nbsp;Update password
                  </Button>
                </div>
              </div>
            </form>
          )}
          
          <div className="my-10">
          <div className="text-[19px] font-semibold py-4 text-red-600">Delete Account</div>
          <div className="text-[15px]">Once you delete your account, there is no going back. Please be certain.</div>
            <div className="py-2">
              <Button 
                onClick={deleteAccount}
                variant="outlined" 
                color="danger">&nbsp;Delete your account
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to delete this resume?
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => { deleteDetail(working); setOpen(false); setWorking("") }}>
              Yes
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              No
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Transition in={openTemplate} timeout={400}>
        {(state) => (
          <Modal
            keepMounted
            open={!['exited', 'exiting'].includes(state)}
            onClose={() => setOpenTemplate(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: 'none',
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === 'exited' ? 'hidden' : 'visible',
            }}
          >
            <ModalDialog
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <DialogTitle ><div className="font-manrope text-6xl mx-auto py-5 text-slate-700">Select a Template</div></DialogTitle>
              <DialogContent>
                <div>
                  <ScrollContainer
                    vertical={false}
                    horizontal={true}
                    className="scroll-container h-fit overflow-x-hidden"
                  >
                    <div
                      className=" scroll-smooth template h-full mx-auto flex space-x-[3vw] mt-10 pb-10 flex-nowrap overflow-y-visible"
                      id="temp" onClick={() => { }}
                    >
                      {templates.map((template, index) => {
                        return (
                          <div key={index}
                            onClick={() => {
                              const time = (new Date()).toString();

                              navigate(`/buildresume/${working}/${index}`)
                            }}
                            className="h-[100%] w-[35%] px-1 md:px-2 py-4 "
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
              </DialogContent>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
