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
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from '@mui/icons-material/Remove';
import ScrollContainer from "react-indiana-drag-scroll";

const steps = ["Personal Info", "Job History", "Education", "Skills", "Finish"];

function BuildResume() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((ACTIVESTEP) => ACTIVESTEP + 1);
      console.log(activeStep);
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
    setjobtitle("");
  };

  const [working, setWorking] = useState(false);

  const handleWorking = () => {
    setWorking(!working);
  };

  const [fname, setfname] = useState("");
  const handlefname = (e) => {
    setfname(e.target.value);
    console.log(fname);
  };
  const [jobtitle, setjobtitle] = useState("");
  const handlejobtitle = (e) => {
    setjobtitle(e.target.value);
    console.log(jobtitle);
  };

  const [add, setAdd] = useState(0);
  const handleAdd = () => {
    if (add<3) {
      setAdd(add+1);
      console.log(add);      
    }
  };
  const handleSub = () => {
    if (add>0) {
      setAdd(add-1);
      console.log(add);      
    }
  };

  return (
    <div className="flex bg-white pt-[10vh] w-full   p-8  h-[100vh]">
      <div className="w-[50vw]  p-10">
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
        <div className="flex flex-col space-y-5 shadow-lg pb-5 justify-between h-[60vh]">
          <ScrollContainer
            vertical={true}
            horizontal={false}
            className="scroll-container"
          >
            <div
              className="overflow-y-hidden   
             "
            >
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
                      />
                    </div>
                    <div className="flex space-x-[2vw] mt-4 ">
                      <TextField
                        id="email"
                        required
                        fullWidth
                        label="Email"
                        variant="outlined"
                      />
                      <TextField
                        id="phone"
                        fullWidth
                        required
                        label="Phone"
                        variant="outlined"
                      />
                    </div>
                    <div className="flex my-4 ">
                      <TextField
                        id="address"
                        fullWidth
                        required
                        label="Address"
                        variant="outlined"
                      />
                    </div>
                    <div className="flex space-x-[2vw] my-2 ">
                      <TextField
                        id="state"
                        fullWidth
                        required
                        label="State"
                        variant="outlined"
                      />
                      <TextField
                        id="city"
                        fullWidth
                        required
                        label="City"
                        variant="outlined"
                      />
                    </div>
                    <div className="flex space-x-[2vw] my-2 ">
                      <TextField
                        id="pincode"
                        fullWidth
                        required
                        label="Pincode"
                        variant="outlined"
                      />
                      <TextField
                        id="country"
                        fullWidth
                        required
                        label="Country"
                        variant="outlined"
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
                      {jobtitle===""?"Unspecified":jobtitle}
                    </Typography>
                    <div className="flex space-x-4">
                      <TextField
                        id="jobtitle"
                        fullWidth
                        label="Job Title"
                        variant="outlined"
                        value={jobtitle}
                        onChange={handlejobtitle}
                      />
                      <TextField
                        id="employer"
                        fullWidth
                        label="Employer"
                        variant="outlined"
                      />
                    </div>
                    <div className="flex space-x-4 my-4">
                      <TextField
                        id="city1"
                        fullWidth
                        label="City"
                        variant="outlined"
                      />
                      <TextField
                        id="country1"
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
                          label="End Date"
                          disabled={working}
                          slotProps={{ textField: { fullWidth: true } }}
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
                          <div className="flex space-x-4">
                            <TextField
                              id="jobtitle"
                              fullWidth
                              label="Job Title"
                              variant="outlined"
                              value={jobtitle}
                              onChange={handlejobtitle}
                            />
                            <TextField
                              id="employer"
                              fullWidth
                              label="Employer"
                              variant="outlined"
                            />
                          </div>
                          <div className="flex space-x-4 my-4">
                            <TextField
                              id="city1"
                              fullWidth
                              label="City"
                              variant="outlined"
                            />
                            <TextField
                              id="country1"
                              fullWidth
                              label="Country"
                              variant="outlined"
                            />
                          </div>
                          <div className="flex space-x-4">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Start Date"
                                slotProps={{ textField: { fullWidth: true } }}
                              />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="End Date"
                                disabled={working}
                                slotProps={{ textField: { fullWidth: true } }}
                              />
                            </LocalizationProvider>
                          </div>
                        </div>
                      </React.Fragment>
                    ) : (
                      ''
                    )}
                    {
                      (add>1)?(
                        <React.Fragment>
                        <div className="flex mt-4 flex-col ">
                          <div className="flex space-x-4">
                            <TextField
                              id="jobtitle"
                              fullWidth
                              label="Job Title"
                              variant="outlined"
                              value={jobtitle}
                              onChange={handlejobtitle}
                            />
                            <TextField
                              id="employer"
                              fullWidth
                              label="Employer"
                              variant="outlined"
                            />
                          </div>
                          <div className="flex space-x-4 my-4">
                            <TextField
                              id="city1"
                              fullWidth
                              label="City"
                              variant="outlined"
                            />
                            <TextField
                              id="country1"
                              fullWidth
                              label="Country"
                              variant="outlined"
                            />
                          </div>
                          <div className="flex space-x-4">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Start Date"
                                slotProps={{ textField: { fullWidth: true } }}
                              />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="End Date"
                                disabled={working}
                                slotProps={{ textField: { fullWidth: true } }}
                              />
                            </LocalizationProvider>
                          </div>
                        </div>
                      </React.Fragment>
                      ):""
                    }
                    <div className="flex space-x-5 px-4 py-2 justify-end">
                    <Fab
                        color="primary"
                        aria-label="minus"
                        onClick={handleSub}
                      >
                     <RemoveIcon />
                      </Fab>
                      <Fab
                        color="primary"
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
          </ScrollContainer>

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
