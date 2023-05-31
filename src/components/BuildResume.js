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

const steps = [
  "Personal Information",
  "Work Experience",
  "Education",
  "Skills",
  "Finish",
];

function BuildResume() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((ACTIVESTEP) => ACTIVESTEP + 1);
  };

  const handleBack = () => {
    setActiveStep((ACTIVESTEP) => ACTIVESTEP - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [working, setWorking] = useState(false);

  const handleWorking = () => {
    setWorking(!working);
  }
  

  return (
    <div className="flex bg-white pt-[10vh] w-full  p-8  h-[100vh]">
      <div className="w-[50vw] p-10">
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
        {activeStep === steps.length ? (
          <React.Fragment>
            <div className="flex p-10 space-x-3 justify-end">
              <Button variant="contained" size="large" onClick={handleReset}>
                {" "}
                Reset{" "}
              </Button>

              <Button variant="outlined" size="large" onClick={handleBack}>
                Back
              </Button>
            </div>
          </React.Fragment>
        ) : activeStep === 0 ? (
          <React.Fragment>
            <div className="flex flex-col p-10">
              {/* <div className="text-lg mb-4 text-blue-500 font-bold">
                {" "}
                Personal Information
              </div> */}
              <Typography sx={{ mt: 2, mb: 2 }} variant="h6" color={"primary"}>
                {" "}
                Personal Information{" "}
              </Typography>
              <div className="flex space-x-[2vw] ">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                />
              </div>
              <div className="flex space-x-[2vw] mt-4 ">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Phone"
                  variant="outlined"
                />
              </div>
              <div className="flex my-4 ">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Address"
                  variant="outlined"
                />
              </div>
              <div className="flex space-x-[2vw] my-2 ">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="State"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="City"
                  variant="outlined"
                />
              </div>
              <div className="flex space-x-[2vw] my-2 ">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Pincode"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Country"
                  variant="outlined"
                />
              </div>
            </div>
          </React.Fragment>
        ) : activeStep === 1 ? (
          <React.Fragment>
            <div className="flex flex-col p-10">
              <Typography sx={{ mt: 2, mb: 2 }} variant="h6" color={"primary"}>
                Work Experience
              </Typography>
              <div className="flex space-x-4">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Job Title"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Employer"
                  variant="outlined"
                />
              </div>
              <div className="flex space-x-4 my-4">
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="City"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Country"
                  variant="outlined"
                />
              </div>
              {/* <div className="w-[100%]"> */}
              <div className="flex space-x-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Start Date"
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="End Date" disabled={working}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex justify-end mt-2">
                <FormControlLabel
                  control={<Checkbox 
                    checked={working}
                    onChange={handleWorking}
                    sx={{
                    color: grey[600],
                  }} />}
                  label="Currenty Working"
                  sx={{
                    color: grey[600],
                  }}
                />
              </div>

              {/* </div> */}

              {/* <div className="flex">
                <div className="flex space-x-4">
                   <Typography sx={{ mt: 2, mb: 2 }} variant="subtitle1">
                    Start Date
                  </Typography> 
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker fullWidth />
                  </LocalizationProvider>
                  
                </div>
                <div className="flex space-x-4 w-1/2">
                  <Typography sx={{ mt: 2, mb: 2 }} variant="subtitle1">
                    End Date
                  </Typography>
                  <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DatePicker fullWidth />
                  </LocalizationProvider>
                  
                </div>
              </div> */}
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

        {activeStep === steps.length ? (
          ""
        ) : (
          <div className="flex px-10 space-x-3 justify-end">
            <Button
              size="large"
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button size="large" variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuildResume;
