import React, { useRef } from "react";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
// import { signIn, useAuth } from "../../firebase";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import googleOneTap from "google-one-tap";
import { jwtDecode } from "jwt-decode";
import { setCookieWithExpiry } from "../cookies";
import axios from "axios";

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPass] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [helperTextEmail, setHelperTextEmail] = useState("");
  const [helperTextPass, setHelperTextPass] = useState("");
  const [helperTextPassConf, setHelperTextPassConf] = useState("");
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const google = window["google"];
    google.accounts.id.initialize({
      client_id:
        "953816291178-otd0c24l6ffe5bd4tta0a2d8uikou8p4.apps.googleusercontent.com",
      callback: handleCallBackResponse,
      cancel_on_tap_outside: false,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      width: "400",
      shape: "pill",
      text: "continue_with",
      logo_alignment: "left",
    });
    document.getElementById(
      "signInDiv"
    ).firstChild.firstChild.firstChild.style.height = "40px";
    google.accounts.id.prompt();
  }, []);

  function handleCallBackResponse(e) {
    console.log(jwtDecode(e.credential));
    const user = jwtDecode(e.credential);
    setCookieWithExpiry("auth", user, 2);

    axios
      .post("http://localhost:3001/api/data/", user)
      .then((res) => {
        console.log("logged in! ", res);
      })
      .catch((error) => {
        console.log("error ", error);
      });
    navigate("/Dashboard");
  }
  //   const options = {
  //     client_id: "953816291178-931blpsdt9nm709ellqqpjo55bsoodj7.apps.googleusercontent.com", // required
  //     auto_select: false, // optional
  //     cancel_on_tap_outside: false, // optional
  //     context: 'signin' // optional
  // };

  // googleOneTap(options, (response) => {
  //     // Send response to server
  //     console.log(response);
  // })
  // const user = useAuth();

  //   function sleep(ms) {
  //     return new Promise((resolve) => setTimeout(resolve, ms));
  //   }
  async function handleSignUp() {
    // setLoading(true);
    // try {
    //   await signIn(Email, Password);
    //   console.log(user?.email);
    //   navigate("/home");
    // } catch {
    //   setPass("");
    //   setEmail("");
    //   setError(true);
    //   setHelperText("Invalid Email ID or Password");
    // }
    // setLoading(false);
    // const user = jwtDecode(e.credential);
    // setCookieWithExpiry("auth",user,2);

    if (Password.length < 8 || ConfirmPass.length < 8 || Password !== ConfirmPass) {
      return;
    }

    const url = `http://localhost:3001/api/data/${Email}`;
    console.log("URL: ", url);

    axios
      .get(url)
      .then((res) => {
        console.log("response: ", res);
        if (res.data.length > 0) {
          setEmail("");
          setError(true);
          setHelperTextEmail("Email already exists!");
        } else {
          const user = {"email": Email, "name": Name, "picture": "https://media.istockphoto.com/id/1397556857/vector/avatar-13.jpg?s=612x612&w=0&k=20&c=n4kOY_OEVVIMkiCNOnFbCxM0yQBiKVea-ylQG62JErI=","password":Password }
          axios
            .post("http://localhost:3001/api/data/", user)
            .then((res) => {
              setCookieWithExpiry("auth",user,2);
              console.log("logged in! ", res);
              navigate("/Dashboard");
            })
            .catch((error) => {
              console.log("error ", error);
            });
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  //   useEffect(() => {

  //     // setLoading(true);
  //       if (user) {
  //         setLoading(false);
  //         navigate("/home");
  //       }
  //       // setLoading(false);

  //   }, [user]);

  return (
    <div
      id="l"
      //   style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/3/33/Microsoft_login_screen.svg)"
      className=" "
    >
      <div className="flex justify-center h-[100vh]  items-center">
        <div className="flex flex-col  h  bg-white  rounded-3xl shadow-2xl max-[450px]:backdrop-blur-0 max-[450px]:rounded-none shadow-black p-6 items-center space-y-10 justify-start h-fit pt-16 pb-10 px-10 max-[450px]:w-[100%] max-[450px]:h-[100%] w-[450px] xl:w-[25vw] ">
          <span className="text-4xl font-semibold ">Sign Up</span>
          <div className=" w-[100%]">
            <TextField
              onChange={(e) => {
                setName(e.target.value);
                setError(false);
              }}
              value={Name}
              className=""
              sx={{
                "& .MuiInputBase-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  //   color: "#ece9e9",
                },
                ".MuiInputBase-input": {
                  //   background: "#130f22",
                  borderRadius: "10px",
                  "&:-webkit-autofill": {
                    // WebkitBoxShadow: "0 0 0px 1000px #130f22 inset",
                    // WebkitTextFillColor: "#ece9e9",
                  },
                },
                ".MuiTextField-root": {
                  //   background: "#130f22",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  // borderColor: "#fff",
                },
                "&:before, &:after": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              id="myfilled-name"
              label="Name"
              variant="outlined"
              color="grey"
              fullWidth
            />
          </div>
          <div className="w-[100%]">
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
                setHelperTextEmail("");
                setError(false);
              }}
              value={Email}
              helperText={helperTextEmail}
              error={error}
              className=""
              sx={{
                "& .MuiInputBase-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  //   color: "#ece9e9",
                },
                ".MuiInputBase-input": {
                  //   background: "#130f22",
                  borderRadius: "10px",
                  "&:-webkit-autofill": {
                    // WebkitBoxShadow: "0 0 0px 1000px #130f22 inset",
                    // WebkitTextFillColor: "#ece9e9",
                  },
                },
                ".MuiTextField-root": {
                  //   background: "#130f22",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  // borderColor: "#fff",
                },
                "&:before, &:after": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              id="myfilled-name"
              label="Email"
              variant="outlined"
              color="grey"
              fullWidth
            />
          </div>
          <div className=" w-[100%]">
            <TextField
              onChange={(e) => {
                setPass(e.target.value);
                if (e.target.length !== "") {
                  if (e.target.value.length < 8)
                    setHelperTextPass(
                      "Password must be of atleast 8 characters"
                    );
                  else if (
                    Password !== "" &&
                    ConfirmPass !== "" &&
                    e.target.value !== ConfirmPass
                  ) {
                    setHelperTextPass("Passwords do not match");
                    setHelperTextPassConf("Passwords do not match");
                  } else {
                    setHelperTextPass("");
                    setHelperTextPassConf("");
                  }
                } else {
                  setHelperTextPass("");
                }
              }}
              type="password"
              value={Password}
              helperText={helperTextPass}
              error={
                (ConfirmPass !== Password || ConfirmPass.length < 8) &&
                Password !== ""
              }
              sx={{
                "& .MuiInputBase-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  //   color: "#ece9e9",
                },
                ".MuiInputBase-input": {
                  //   background: "#130f22",
                  borderRadius: "10px",
                  "&:-webkit-autofill": {
                    // WebkitBoxShadow: "0 0 0px 1000px #130f22 inset",
                    // WebkitTextFillColor: "#ece9e9",
                  },
                },
                ".MuiTextField-root": {
                  //   background: "#130f22",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  // borderColor: "#fff",
                },
                "&:before, &:after": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              id="myfilled-name"
              label="Password"
              variant="outlined"
              color="grey"
              fullWidth
            />
          </div>
          <div className=" w-[100%]">
            <TextField
              onChange={(e) => {
                setConfirmPass(e.target.value);
                if (
                  e.target.value !== "" &&
                  Password !== "" &&
                  e.target.value !== Password
                ) {
                  setHelperTextPassConf("Passwords do not match!");
                } else {
                  setHelperTextPassConf("");
                  setHelperTextPass("");
                }
              }}
              type="password"
              value={ConfirmPass}
              helperText={helperTextPassConf}
              error={
                ConfirmPass !== Password &&
                Password !== "" &&
                ConfirmPass !== ""
              }
              sx={{
                "& .MuiInputBase-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root": {
                  //   color: "#ece9e9",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  //   color: "#ece9e9",
                },
                ".MuiInputBase-input": {
                  //   background: "#130f22",
                  borderRadius: "10px",
                  "&:-webkit-autofill": {
                    // WebkitBoxShadow: "0 0 0px 1000px #130f22 inset",
                    // WebkitTextFillColor: "#ece9e9",
                  },
                },
                ".MuiTextField-root": {
                  //   background: "#130f22",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  // borderColor: "#fff",
                },
                "&:before, &:after": {
                  borderRadius: "10px",
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              id="myfilled-name"
              label="Confirm Password"
              variant="outlined"
              color="grey"
              fullWidth
            />
          </div>
          <button className="btn-grad font-semibold" onClick={handleSignUp}>
            Sign Up
          </button>
          <div id="signInDiv"></div>
        </div>
      </div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(20px)",
        }}
        open={Loading}
        close={Loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
export default Signup;
