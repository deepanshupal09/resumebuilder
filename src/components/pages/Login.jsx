import React from "react";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
// import { signIn, useAuth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getCookie, setCookieWithExpiry } from "../../cookies";
import axios from "axios";
import Navbar from "../Navbar";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Login({user,setUser}) {
  const [Email, setEmail] = useState("");
  const [Password, setPass] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component is rendered
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

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
    setLoading(true);
    console.log(jwtDecode(e.credential));
    let usr = jwtDecode(e.credential);
    setCookieWithExpiry("auth", usr, 2);
    usr = { ...usr, password: null };
    setUser(usr);

    axios
      .post("http://localhost:4000/api/data/", usr)
      .then((res) => {
        console.log("logged in! ", res);
        setLoading(false);
      })
      .catch((error) => {
        setHelperText("Internal Server Error")
        setError(true);
        console.log("error ", error);
        setLoading(false);
      });
    navigate("/dashboard");
  }

  async function handleLogin() {
    const url = `http://localhost:4000/api/data/getUserByEmail`;
    setLoading(true);
    axios
    .get(url,{headers: {email: Email}})
    .then((res) => {
      setLoading(false);
      if (res.data.length < 1) {
        console.log("Email Id not found");
        setError(true);
        setHelperText("Email Not found");
      } else {
        res.data = res.data[0];
        console.log(res.data.password);
        if (res.data.password !== Password) {
          console.log("Incorrect Password");
          setError(true);
          setHelperText("Incorrect Password");
        } else {
          console.log("Logged In");
          const usr = res.data;
          setCookieWithExpiry("auth", usr, 2);
          setUser(usr);
          navigate("/dashboard");
        }
      }
    })
    .catch((error) => {
        setLoading(false);
        setHelperText("Internal Server Error")
        setError(true);
        console.log("error: ", error);
      });
  }


  return (
    <>
    
      <div
        id="l"
        //   style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/3/33/Microsoft_login_screen.svg)"
        className=" "
      >
        <div className="flex justify-center h-[100vh]  items-center">
          <div className="flex flex-col  h  bg-white  rounded-3xl shadow-2xl max-[450px]:backdrop-blur-0 max-[450px]:rounded-none shadow-black p-6 items-center space-y-10 justify-start h-fit pt-16 pb-10 px-10 max-[450px]:w-[100%] max-[450px]:h-[100%] w-[450px] xl:w-[25vw] ">
            <span className="text-4xl font-semibold ">Login</span>
            <div className="mt-1 w-[100%]">
              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                  setHelperText("");
                  setError(false);
                }}
                value={Email}
                helperText={helperText}
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
            <div className="mt-1 w-[100%]">
              <TextField
                onChange={(e) => {
                  setPass(e.target.value);
                  setHelperText("");
                  setError(false);
                }}
                type="password"
                value={Password}
                helperText={helperText}
                error={error}
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
            <button className="btn-grad font-semibold" onClick={handleLogin}>
              Sign In
            </button>
            <div id="signInDiv"></div>
            {/* <Link to="/getemail" className="self-end ">
              Forgot Password?
            </Link> */}
          </div>
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
export default Login;
