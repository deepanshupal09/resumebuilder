import React from "react";
import footer from "./Footer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { grey, pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import RemoveIcon from "@mui/icons-material/Remove";
// import ScrollContainer from "react-indiana-drag-scroll";

const steps = ["Personal Info", "Job History", "Education", "Skills", "Finish"];

function BuildResume() {
  const [activeStep, setActiveStep] = React.useState(0);
  const date = new Date();

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((ACTIVESTEP) => ACTIVESTEP + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((ACTIVESTEP) => ACTIVESTEP - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAdd(0);
    setWorking(0);
    setfname("");
    setlname("");
    setcity("");
    setcountry("");
    setemail("");
    setaddress("");
    setphone("");
    setpincode("");
    setstate("");
    // setjobtitle1("");
    // setjobtitle2("");
    // setjobtitle3("");
    setenddate2(dayjs(date));
    setstartdate2(dayjs(date));
    setjobtitle2("");
    setemployer2("");
    setcityj2("");
    setcountryj2("");
    setenddate2(dayjs(date));
    setstartdate2(dayjs(date));
    setjobtitle2("");
    setemployer2("");
    setcityj2("");
    setcountryj2("");
    setenddate1(dayjs(date));
    setstartdate1(dayjs(date));
    setjobtitle1("");
    setemployer1("");
    setcityj1("");
    setcountryj1("");
  };

  const [working, setWorking] = useState(false);

  const handleWorking = () => {
    setWorking(!working);
  };

  const [fname, setfname] = useState("");
  const handlefname = (e) => {
    setfname(e.target.value);
  };
  const [lname, setlname] = useState("");
  const handlelname = (e) => {
    setlname(e.target.value);
  };
  const [email, setemail] = useState("");
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const [pincode, setpincode] = useState("");
  const handlepincode = (e) => {
    setpincode(e.target.value);
  };
  const [address, setaddress] = useState("");
  const handleaddress = (e) => {
    setaddress(e.target.value);
  };
  const [phone, setphone] = useState("");
  const handlephone = (e) => {
    setphone(e.target.value);
  };
  const [state, setstate] = useState("");
  const handlestate = (e) => {
    setstate(e.target.value);
  };
  const [city, setcity] = useState("");
  const handlecity = (e) => {
    setcity(e.targetcountryue);
  };
  const [country, setcountry] = useState("");
  const handlecountry = (e) => {
    setcountry(e.target.value);
  };
  const [employer1, setemployer1] = useState("");
  const handleemployer1 = (e) => {
    setemployer1(e.target.value);
  };
  const [employer2, setemployer2] = useState("");
  const handleemployer2 = (e) => {
    setemployer2(e.target.value);
  };
  const [employer3, setemployer3] = useState("");
  const handleemployer3 = (e) => {
    setemployer3(e.target.value);
  };
  const [startdate1, setstartdate1] = React.useState(dayjs(date));
  const handlestartdate1 = (e) => {
    setstartdate1(e);
  };
  const [startdate2, setstartdate2] = React.useState(dayjs(date));
  const handlestartdate2 = (e) => {
    setstartdate2(e);
  };
  const [startdate3, setstartdate3] = React.useState(dayjs(date));
  const handlestartdate3 = (e) => {
    setstartdate3(e);
  };
  const [enddate1, setenddate1] = React.useState(dayjs(date));
  const handleenddate1 = (e) => {
    setenddate1(e);
  };
  const [enddate2, setenddate2] = React.useState(dayjs(date));
  const handleenddate2 = (e) => {
    setenddate2(e);
  };
  const [enddate3, setenddate3] = React.useState(dayjs(date));
  const handleenddate3 = (e) => {
    setenddate3(e);
  };
  const [cityj1, setcityj1] = useState("");
  const handlecityj1 = (e) => {
    setcityj1(e.target.value);
  };
  const [cityj2, setcityj2] = useState("");
  const handlecityj2 = (e) => {
    setcityj2(e.target.value);
  };
  const [cityj3, setcityj3] = useState("");
  const handlecityj3 = (e) => {
    setcityj3(e.target.value);
  };
  const [countryj1, setcountryj1] = useState("");
  const handlecountryj1 = (e) => {
    setcountryj1(e.target.value);
  };
  const [countryj2, setcountryj2] = useState("");
  const handlecountryj2 = (e) => {
    setcountryj2(e.target.value);
  };
  const [countryj3, setcountryj3] = useState("");
  const handlecountryj3 = (e) => {
    setcountryj3(e.target.value);
  };
  const [jobtitle1, setjobtitle1] = useState("");
  const handlejobtitle1 = (e) => {
    setjobtitle1(e.target.value);
  };
  const [jobtitle2, setjobtitle2] = useState("");
  const handlejobtitle2 = (e) => {
    setjobtitle2(e.target.value);
  };
  const [jobtitle3, setjobtitle3] = useState("");
  const handlejobtitle3 = (e) => {
    setjobtitle3(e.target.value);
  };

  const [add, setAdd] = useState(0);
  const handleAdd = () => {
    if (add < 2) {
      setAdd(add + 1);
    }
  };
  const handleSub = () => {
    if (add == 2) {
      setenddate3(dayjs(date));
      setstartdate3(dayjs(date));
      setjobtitle3("");
      setemployer3("");
      setcityj3("");
      setcountryj3("");
    }
    if (add == 1) {
      setenddate2(dayjs(date));
      setstartdate2(dayjs(date));
      setjobtitle2("");
      setemployer2("");
      setcityj2("");
      setcountryj2("");
    }
    if (add > 0) {
      setAdd(add - 1);
    }
  };

  return (
    <div className="flex my-5 bg-white pt-[10vh] w-full   p-8  h-[100vh]">
      <div className="w-[60vw]  p-10">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="flex flex-col space-y-5 pb-5 justify-between my-5 h-[80vh]">
          {/* <ScrollContainer
            vertical={true}
            horizontal={false}
            className="scroll-container"
          > */}
          <div className="overflow-y-scroll ">
            {activeStep === steps.length ? (
              ""
            ) : activeStep === 0 ? (
              <React.Fragment>
                <div className="flex flex-col p-10">
                  <Typography
                    sx={{ mt: 2, mb: 2 }}
                    variant="h6"
                    color={"primary"}
                  >
                    {" "}
                    Personal Information{" "}
                  </Typography>
                  <div className="flex space-x-[2vw] ">
                    <TextField
                      id="fname"
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                      value={fname}
                      onChange={handlefname}
                    />
                    <TextField
                      id="lname"
                      fullWidth
                      required
                      label="Last Name"
                      variant="outlined"
                      value={lname}
                      onChange={handlelname}
                    />
                  </div>
                  <div className="flex space-x-[2vw] mt-4 ">
                    <TextField
                      id="email"
                      required
                      fullWidth
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={handleemail}
                    />
                    <TextField
                      id="phone"
                      fullWidth
                      required
                      label="Phone"
                      variant="outlined"
                      value={phone}
                      onChange={handlephone}
                    />
                  </div>
                  <div className="flex my-4 ">
                    <TextField
                      id="address"
                      fullWidth
                      required
                      label="Address"
                      variant="outlined"
                      value={address}
                      onChange={handleaddress}
                    />
                  </div>
                  <div className="flex space-x-[2vw] my-2 ">
                    <TextField
                      id="state"
                      fullWidth
                      required
                      label="State"
                      variant="outlined"
                      value={state}
                      onChange={handlestate}
                    />
                    <TextField
                      id="city"
                      fullWidth
                      required
                      label="City"
                      variant="outlined"
                      value={city}
                      onChange={handlecity}
                    />
                  </div>
                  <div className="flex space-x-[2vw] my-2 ">
                    <TextField
                      id="pincode"
                      fullWidth
                      required
                      label="Pincode"
                      variant="outlined"
                      value={pincode}
                      onChange={handlepincode}
                    />
                    <TextField
                      id="country"
                      fullWidth
                      required
                      label="Country"
                      variant="outlined"
                      value={country}
                      onChange={handlecountry}
                    />
                  </div>
                </div>
              </React.Fragment>
            ) : activeStep === 1 ? (
              <React.Fragment>
                <div className="flex flex-col p-10">
                  <Typography
                    sx={{ mt: 2, mb: 2 }}
                    variant="h6"
                    color={"primary"}
                  >
                    {/* Work Experience */}
                    {jobtitle1 === "" ? "Job Title" : jobtitle1}
                  </Typography>
                  <div className="flex space-x-4">
                    <TextField
                      id="jobtitle11"
                      fullWidth
                      label="Job Title"
                      variant="outlined"
                      value={jobtitle1}
                      onChange={handlejobtitle1}
                    />
                    <TextField
                      id="employer11"
                      fullWidth
                      label="Employer"
                      variant="outlined"
                      value={employer1}
                      onChange={handleemployer1}
                    />
                  </div>
                  <div className="flex space-x-4 my-4">
                    <TextField
                      id="city11"
                      fullWidth
                      label="City"
                      variant="outlined"
                      value={cityj1}
                      onChange={handlecityj1}
                    />
                    <TextField
                      id="country11"
                      fullWidth
                      label="Country"
                      variant="outlined"
                      value={countryj1}
                      onChange={handlecountryj1}
                    />
                  </div>
                  {/* <div className="w-[100%]"> */}
                  <div className="flex space-x-4">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Start Date"
                        slotProps={{ textField: { fullWidth: true } }}
                        value={startdate1}
                        onChange={handlestartdate1}
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="End Date"
                        disabled={working}
                        slotProps={{ textField: { fullWidth: true } }}
                        value={enddate1}
                        onChange={handleenddate1}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="flex justify-end mt-2">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={working}
                          onChange={handleWorking}
                          sx={{
                            color: grey[600],
                          }}
                        />
                      }
                      label="Currenty Working"
                      sx={{
                        color: grey[600],
                      }}
                    />
                  </div>
                  {add > 0 ? (
                    <React.Fragment>
                      <div className="flex flex-col ">
                        <Typography
                          sx={{ mt: 2, mb: 2 }}
                          variant="h6"
                          color={"primary"}
                        >
                          {/* Work Experience */}
                          {jobtitle2 === "" ? "Job Title" : jobtitle2}
                        </Typography>
                        <div className="flex space-x-4">
                          <TextField
                            id="jobtitle12"
                            fullWidth
                            label="Job Title"
                            variant="outlined"
                            value={jobtitle2}
                            onChange={handlejobtitle2}
                          />
                          <TextField
                            id="employer12"
                            fullWidth
                            label="Employer"
                            variant="outlined"
                            value={employer2}
                            onChange={handleemployer2}
                          />
                        </div>
                        <div className="flex space-x-4 my-4">
                          <TextField
                            id="city12"
                            fullWidth
                            label="City"
                            variant="outlined"
                            value={cityj2}
                            onChange={handlecityj2}
                          />
                          <TextField
                            id="country12"
                            fullWidth
                            label="Country"
                            variant="outlined"
                            value={countryj2}
                            onChange={handlecountryj2}
                          />
                        </div>
                        <div className="flex space-x-4">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Start Date"
                              slotProps={{ textField: { fullWidth: true } }}
                              value={startdate2}
                              onChange={handlestartdate2}
                            />
                          </LocalizationProvider>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="End Date"
                              disabled={working}
                              slotProps={{ textField: { fullWidth: true } }}
                              value={enddate2}
                              onChange={handleenddate2}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  {add > 1 ? (
                    <React.Fragment>
                      <div className="flex mt-4 flex-col ">
                        <Typography
                          sx={{ mt: 2, mb: 2 }}
                          variant="h6"
                          color={"primary"}
                        >
                          {/* Work Experience */}
                          {jobtitle3 === "" ? "Job Title" : jobtitle3}
                        </Typography>
                        <div className="flex space-x-4">
                          <TextField
                            id="jobtitle13"
                            fullWidth
                            label="Job Title"
                            variant="outlined"
                            value={jobtitle3}
                            onChange={handlejobtitle3}
                          />
                          <TextField
                            id="employer13"
                            fullWidth
                            label="Employer"
                            variant="outlined"
                            value={employer3}
                            onChange={handleemployer3}
                          />
                        </div>
                        <div className="flex space-x-4 my-4">
                          <TextField
                            id="city13"
                            fullWidth
                            label="City"
                            variant="outlined"
                            value={cityj3}
                            onChange={handlecityj3}
                          />
                          <TextField
                            id="country13"
                            fullWidth
                            label="Country"
                            variant="outlined"
                            value={countryj3}
                            onChange={handlecountryj3}
                          />
                        </div>
                        <div className="flex space-x-4">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Start Date"
                              slotProps={{ textField: { fullWidth: true } }}
                              value={startdate3}
                              onChange={handlestartdate3}
                            />
                          </LocalizationProvider>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="End Date"
                              disabled={working}
                              slotProps={{ textField: { fullWidth: true } }}
                              value={enddate3}
                              onChange={handleenddate3}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  <div className="flex space-x-5 px-4 py-2 justify-end">
                    <Fab
                      color="primary"
                      disabled={add == 0}
                      aria-label="minus"
                      onClick={handleSub}
                    >
                      <RemoveIcon />
                    </Fab>
                    <Fab
                      color="primary"
                      disabled={add == 2}
                      aria-label="add"
                      onClick={handleAdd}
                    >
                      <AddIcon />
                    </Fab>
                  </div>
                </div>
              </React.Fragment>
            ) : activeStep === 2 ? (
              <React.Fragment>
                <div></div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div></div>
              </React.Fragment>
            )}
          </div>
          {/* </ScrollContainer> */}

          <div className="flex  px-10 space-x-3 justify-end">
            <Button variant="contained" size="large" onClick={handleReset}>
              Reset
            </Button>
            <Button
              size="large"
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Button size="large" variant="contained" onClick={handleNext}>
              {activeStep >= steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuildResume;
