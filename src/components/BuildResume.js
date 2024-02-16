import React from "react";
import footer from "./Footer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import dayjs from "dayjs";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { grey, red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

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

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  const [open, setOpen] = React.useState(false);
  const [resolveFunction, setResolveFunction] = useState(false);
  const [ed, setEd] = useState(false);
  const [res, setres] = useState(false);

  function handleYes() {
    setOpen(false);
    // del = true;
    if (res === true) handleReset();
    if (ed === true) handleSubE();
    else handleSub();
    // resolveFunction(true);
    // console.log(del);
  }

  const handleDelete = () => {
    setEd(false);
    setres(false);
    setOpen(true);
  };
  const handleDeleteE = () => {
    setEd(true);
    setres(false);
    setOpen(true);
  };
  const handleDeleteR = () => {
    setEd(false);
    setres(true);
    setOpen(true);
  };
  function handleNo() {
    setOpen(false);
    // del = false;
    // resolveFunction(false);
    // console.log(del);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleReset = () => {
    setActiveStep(0);
    setAdd(0);
    setWorking(0);
    setAddE(0);
    setfname("");
    setlname("");
    setcity("");
    setcountry("");
    setemail("");
    setaddress("");
    setphone("");
    setpincode("");
    setstate("");
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
    setenddateE2(dayjs(date));
    setstartdateE2(dayjs(date));
    setschoolname2("");
    setdegree2("");
    setcitye2("");
    setcountrye2("");
    setenddateE3(dayjs(date));
    setstartdateE3(dayjs(date));
    setschoolname3("");
    setdegree3("");
    setcitye3("");
    setcountrye3("");
    setschoolname1("");
    setdegree1("");
    setcitye2("");
    setcountrye2("");
    setstartdateE1(dayjs(date));
    setenddateE3(dayjs(date));
    setcitye1("");
    setcountrye1("");
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
    setcity(e.target.value);
  };
  const [country, setcountry] = useState("");
  const handlecountry = (e) => {
    setcountry(e.target.value);
  };
  const [citye1, setcitye1] = useState("");
  const handlecitye1 = (e) => {
    setcitye1(e.target.value);
  };
  const [countrye1, setcountrye1] = useState("");
  const handlecountrye1 = (e) => {
    setcountrye1(e.target.value);
  };
  const [citye2, setcitye2] = useState("");
  const handlecitye2 = (e) => {
    setcitye2(e.target.value);
  };
  const [countrye2, setcountrye2] = useState("");
  const handlecountrye2 = (e) => {
    setcountrye2(e.target.value);
  };
  const [citye3, setcitye3] = useState("");
  const handlecitye3 = (e) => {
    setcitye3(e.target.value);
  };
  const [countrye3, setcountrye3] = useState("");
  const handlecountrye3 = (e) => {
    setcountrye3(e.target.value);
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
  const [degree1, setdegree1] = useState("");
  const handledegree1 = (e) => {
    setdegree1(e.target.value);
  };
  const [degree2, setdegree2] = useState("");
  const handledegree2 = (e) => {
    setdegree2(e.target.value);
  };
  const [degree3, setdegree3] = useState("");
  const handledegree3 = (e) => {
    setdegree3(e.target.value);
  };
  const [schoolname1, setschoolname1] = useState("");
  const handleschoolname1 = (e) => {
    setschoolname1(e.target.value);
  };
  const [schoolname2, setschoolname2] = useState("");
  const handleschoolname2 = (e) => {
    setschoolname2(e.target.value);
  };
  const [schoolname3, setschoolname3] = useState("");
  const handleschoolname3 = (e) => {
    setschoolname3(e.target.value);
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
  const [startdateE1, setstartdateE1] = React.useState(dayjs(date));
  const handlestartdateE1 = (e) => {
    setstartdateE1(e);
  };
  const [startdateE2, setstartdateE2] = React.useState(dayjs(date));
  const handlestartdateE2 = (e) => {
    setstartdateE2(e);
  };
  const [startdateE3, setstartdateE3] = React.useState(dayjs(date));
  const handlestartdateE3 = (e) => {
    setstartdateE3(e);
  };
  const [enddateE1, setenddateE1] = React.useState(dayjs(date));
  const handleenddateE1 = (e) => {
    setenddateE1(e);
  };
  const [enddateE2, setenddateE2] = React.useState(dayjs(date));
  const handleenddateE2 = (e) => {
    setenddateE2(e);
  };
  const [enddateE3, setenddateE3] = React.useState(dayjs(date));
  const handleenddateE3 = (e) => {
    setenddateE3(e);
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
  function handleSub() {
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

    // del = false;
  }
  const [addE, setAddE] = useState(0);
  const handleAddE = () => {
    if (addE < 2) {
      setAddE(addE + 1);
    }
  };
  const handleSubE = () => {
    console.log("HANDLE SUBE called");
    if (addE == 2) {
      setenddateE3(dayjs(date));
      setstartdateE3(dayjs(date));
      setschoolname3("");
      setdegree3("");
      setcitye3("");
      setcountrye3("");
    }
    if (addE == 1) {
      setenddateE2(dayjs(date));
      setstartdateE2(dayjs(date));
      setschoolname2("");
      setdegree2("");
      setcitye2("");
      setcountrye2("");
    }
    if (addE > 0) {
      setAddE(addE - 1);
    }
  };

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [openskill, setopenskill] = useState(false);

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const addskill = () => {
    setopenskill(true);
  };

  const handleCloseskill = () => {
    setopenskill(false);
  };

  const handleAddItem = () => {
    setopenskill(false);
    // if (newItem.trim() !== "") {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setNewItem("");
    // }
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
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
          <div className="overflow-y-auto overflow-x-hidden">
            <React.Fragment>
              <Slide
                direction="right"
                in={activeStep === 0}
                mountOnEnter
                unmountOnExit
              >
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
              </Slide>
            </React.Fragment>
            <React.Fragment>
              <Slide
                direction="left"
                in={activeStep === 1}
                mountOnEnter
                unmountOnExit
              >
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
                      label="School Name"
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
                      label="Currently Working"
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
                      sx={{
                        color: red[600],
                      }}
                      disabled={add == 0}
                      aria-label="minus"
                      onClick={handleDelete}
                    >
                      <DeleteForeverIcon />
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
              </Slide>
            </React.Fragment>
            <React.Fragment>
              <Slide
                direction="left"
                in={activeStep === 2}
                mountOnEnter
                unmountOnExit
              >
                <div className="flex flex-col p-10">
                  <Typography
                    sx={{ mt: 2, mb: 2 }}
                    variant="h6"
                    color={"primary"}
                  >
                    {schoolname1 === "" ? "School Name" : schoolname1}
                  </Typography>
                  <div className="flex space-x-4">
                    <TextField
                      id="schoolname1"
                      fullWidth
                      label="School Name"
                      variant="outlined"
                      value={schoolname1}
                      onChange={handleschoolname1}
                    />
                    <TextField
                      id="degree1"
                      fullWidth
                      label="Degree"
                      variant="outlined"
                      value={degree1}
                      onChange={handledegree1}
                    />
                  </div>
                  <div className="flex space-x-4 my-4">
                    <TextField
                      id="citye11"
                      fullWidth
                      label="City"
                      variant="outlined"
                      value={citye1}
                      onChange={handlecitye1}
                    />
                    <TextField
                      id="countrye11"
                      fullWidth
                      label="Country"
                      variant="outlined"
                      value={countrye1}
                      onChange={handlecountrye1}
                    />
                  </div>
                  {/* <div className="w-[100%]"> */}
                  <div className="flex space-x-4">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Start Date"
                        slotProps={{ textField: { fullWidth: true } }}
                        value={startdateE1}
                        onChange={handlestartdateE1}
                      />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="End Date"
                        slotProps={{ textField: { fullWidth: true } }}
                        value={enddateE1}
                        onChange={handleenddateE1}
                      />
                    </LocalizationProvider>
                  </div>
                  {/* <div className="flex justify-end mt-2">
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
                      label="Currently Working"
                      sx={{
                        color: grey[600],
                      }}
                    />
                  </div> */}
                  {addE > 0 ? (
                    <React.Fragment>
                      <div className="flex flex-col ">
                        <Typography
                          sx={{ mt: 2, mb: 2 }}
                          variant="h6"
                          color={"primary"}
                        >
                          {schoolname2 === "" ? "School Name" : schoolname2}
                        </Typography>
                        <div className="flex space-x-4">
                          <TextField
                            id="schoolname2"
                            fullWidth
                            label="School Name"
                            variant="outlined"
                            value={schoolname2}
                            onChange={handleschoolname2}
                          />
                          <TextField
                            id="degree2"
                            fullWidth
                            label="Degree"
                            variant="outlined"
                            value={degree2}
                            onChange={handledegree2}
                          />
                        </div>
                        <div className="flex space-x-4 my-4">
                          <TextField
                            id="citye12"
                            fullWidth
                            label="City"
                            variant="outlined"
                            value={citye2}
                            onChange={handlecitye2}
                          />
                          <TextField
                            id="countrye12"
                            fullWidth
                            label="Country"
                            variant="outlined"
                            value={countrye2}
                            onChange={handlecountrye2}
                          />
                        </div>
                        <div className="flex space-x-4">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Start Date"
                              slotProps={{ textField: { fullWidth: true } }}
                              value={startdateE2}
                              onChange={handlestartdateE2}
                            />
                          </LocalizationProvider>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="End Date"
                              slotProps={{ textField: { fullWidth: true } }}
                              value={enddateE2}
                              onChange={handleenddateE2}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  {addE > 1 ? (
                    <React.Fragment>
                      <div className="flex mt-4 flex-col ">
                        <Typography
                          sx={{ mt: 2, mb: 2 }}
                          variant="h6"
                          color={"primary"}
                        >
                          {schoolname3 === "" ? "School Name" : schoolname3}
                        </Typography>
                        <div className="flex space-x-4">
                          <TextField
                            id="schoolname3"
                            fullWidth
                            label="School Name"
                            variant="outlined"
                            value={schoolname3}
                            onChange={handleschoolname3}
                          />
                          <TextField
                            id="degree3"
                            fullWidth
                            label="Degree"
                            variant="outlined"
                            value={degree3}
                            onChange={handledegree3}
                          />
                        </div>
                        <div className="flex space-x-4 my-4">
                          <TextField
                            id="citye13"
                            fullWidth
                            label="City"
                            variant="outlined"
                            value={citye3}
                            onChange={handlecitye3}
                          />
                          <TextField
                            id="countrye13"
                            fullWidth
                            label="Country"
                            variant="outlined"
                            value={countrye3}
                            onChange={handlecountrye3}
                          />
                        </div>
                        <div className="flex space-x-4">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Start Date"
                              slotProps={{ textField: { fullWidth: true } }}
                              value={startdateE3}
                              onChange={handlestartdateE3}
                            />
                          </LocalizationProvider>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="End Date"
                              slotProps={{ textField: { fullWidth: true } }}
                              value={enddateE3}
                              onChange={handleenddateE3}
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
                      sx={{
                        color: red[600],
                      }}
                      disabled={addE === 0}
                      aria-label="minus"
                      onClick={handleDeleteE}
                    >
                      <DeleteForeverIcon />
                    </Fab>
                    <Fab
                      color="primary"
                      disabled={addE === 2}
                      aria-label="add"
                      onClick={handleAddE}
                    >
                      <AddIcon />
                    </Fab>
                  </div>
                </div>
              </Slide>
            </React.Fragment>

            <Slide
              direction="right"
              in={activeStep === 3}
              mountOnEnter
              unmountOnExit
            >
              <div className="flex flex-col p-10">
                <Typography
                  sx={{ mt: 2, mb: 2 }}
                  variant="h6"
                  color={"primary"}
                >
                  Click on the button to add one or more skills
                </Typography>
                <div
                  className={`flex flex-col my-4 ${
                    items.length === 0 ? "h-0" : "h-auto"
                  }`}
                >
                  <List sx={{ width: "100%", bgcolor: "#e9e9e9" }}>
                    {items.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={item} />
                        <IconButton
                          edge="end"
                          onClick={() => handleDeleteItem(index)}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                        <Divider />
                      </ListItem>
                    ))}
                  </List>
                </div>
                {/* <TextField
                    label="Add Item"
                    value={newItem}
                    onChange={handleInputChange}
                    variant="outlined"
                    margin="normal"
                  /> */}
                <div className="flex justify-end">
                  <Fab variant="contained" color="primary" onClick={addskill}>
                    <AddIcon></AddIcon>
                  </Fab>
                </div>
              </div>
            </Slide>

            {activeStep === steps.length ? (
              ""
            ) : activeStep === 0 ? (
              ""
            ) : activeStep === 1 ? (
              ""
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
            <Button variant="contained" size="large" onClick={handleDeleteR}>
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
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {res === true ? "Reset Confirmation" : "Delete Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {res === true
              ? "Are you sure you want to reset?"
              : "Are you sure you want to delete?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant={"contained"} onClick={handleYes}>
            Yes
          </Button>
          <Button color="primary" variant={"outlined"} onClick={handleNo}>
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openskill} onClose={handleCloseskill}>
        <DialogTitle>ADD SKILL</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Skill"
            value={newItem}
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseskill}>cancel</Button>
          <Button onClick={handleAddItem}>add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BuildResume;
