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
  return (<>


    </>
  )
}

export default BuildResume;
