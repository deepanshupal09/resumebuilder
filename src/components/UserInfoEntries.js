import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slide from "@mui/material/Slide";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


const steps = ['Personal Info', 'Job History', 'Education', 'Skills', 'Finish'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const date= new Date();

    const [userInfo, setUserInfo] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        workExperiences: [
            { company: "", designation: "", workCity: "", workCountry: "", startDate: "", endDate: "", working: false },
        ],
        education: [
            { school: "", degree: "", schoolCity: "", schoolCountry: "", schoolStartDate: "", schoolEndDate: "" }, 
        ],
        skills: [],
        count: 1,
    })

    //for work experience
    const handleDelete = () => {
        setUserInfo(prevUserInfo => {
            if (prevUserInfo.workExperiences.length > 1) {
                let newWorkExperiences = [...prevUserInfo.workExperiences];
                newWorkExperiences.pop();  // Remove the last work experience
                return { ...prevUserInfo, workExperiences: newWorkExperiences };
            } else {
                return prevUserInfo;  // Return the current state if there are no work experiences to delete
            }
        });
    };
    
    const handleAdd = () => {
        if (userInfo.workExperiences.length < 3) {
            let newWorkExperiences = [...userInfo.workExperiences];
            newWorkExperiences.push({
                company: "",
                designation: "",
                workCity: "",
                workCountry: "",
                startDate: "",
                endDate: "",
                working: false
            });  // Add a new work experience with default values
            setUserInfo({ ...userInfo, workExperiences: newWorkExperiences }); 
        }
    };

    //for education
    const handleEduDelete = () => {
        setUserInfo(prevUserInfo => {
            if (prevUserInfo.education.length > 1) {
                let newEducation = [...prevUserInfo.education];
                newEducation.pop();  // Remove the last work experience
                return { ...prevUserInfo, education: newEducation };
            } else {
                return prevUserInfo;  // Return the current state if there are no work experiences to delete
            }
        });
    };
    
    const handleEduAdd = () => {
        if (userInfo.education.length < 3) {
            let newEducation = [...userInfo.education];
            newEducation.push({
                school: "",
                degree: "", 
                schoolCity: "", 
                schoolCountry: "", 
                schoolStartDate: "", 
                schoolEndDate: ""
            });  // Add a new work experience with default values
            setUserInfo({ ...userInfo, education: newEducation }); 
        }
    };
    
    
    


    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        console.log(userInfo);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
        throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="flex my-5 bg-white pt-[10vh] w-full p-8 h-[100vh]">
        <div className="w-[60vw]">
            <Box sx={{ width: '100%' }}>
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
                                    label="First Name"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.firstName}
                                    onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                                />
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.lastName}
                                    onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                                />
                            </div>
                            <div className="flex space-x-[2vw] mt-4 ">
                                <TextField
                                    label="E-Mail"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.email}
                                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                />
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.phone}
                                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                                />
                            </div>
                            <div className="flex my-4 ">
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.address}
                                    onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                                />
                            </div>
                            <div className="flex space-x-[2vw] my-2 ">
                                <TextField
                                    label="State"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.state}
                                    onChange={(e) => setUserInfo({ ...userInfo, state: e.target.value })}
                                />
                                <TextField
                                    label="City"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.city}
                                    onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
                                />
                            </div>
                            <div className="flex space-x-[2vw] my-2 ">
                                <TextField
                                    label="Country"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.country}
                                    onChange={(e) => setUserInfo({ ...userInfo, country: e.target.value })}
                                />
                                <TextField
                                    label="Pincode"
                                    variant="outlined"
                                    required fullWidth
                                    value={userInfo.pincode}
                                    onChange={(e) => setUserInfo({ ...userInfo, pincode: e.target.value })}
                                />
                            </div>
                        </div>
                    </Slide>
                    </React.Fragment>
                    <React.Fragment>
                    <Slide
                        direction="right"
                        in={activeStep === 1}
                        mountOnEnter
                        unmountOnExit
                    >
                        <div className="flex flex-col p-10">
                            <React.Fragment>
                            <Slide
                                direction="right"
                                in={activeStep === 1}
                                mountOnEnter
                                unmountOnExit
                            >
                                <div className="flex flex-col">
                                    <Typography
                                        sx={{ mt: 2, mb: 2 }}
                                        variant="h6"
                                        color={"primary"}
                                    >
                                        {" "}
                                        Work Experience{" "}
                                    </Typography>
                                    {userInfo.workExperiences.map((workExperience, index) => (
                                        <div key={index}>
                                            <div className="flex space-x-4">
                                                <TextField
                                                    id={`job${index}`}
                                                    fullWidth
                                                    label="Company Name"
                                                    variant="outlined"
                                                    value={workExperience.company}
                                                    onChange={(e) => {
                                                        let newWorkExperiences = [...userInfo.workExperiences];
                                                        newWorkExperiences[index].company = e.target.value;
                                                        setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                    }}
                                                />
                                                <TextField
                                                    id={`designation${index}`}
                                                    fullWidth
                                                    label="Designation"
                                                    variant="outlined"
                                                    // value={userInfo.designation3}
                                                    // onChange={(e) => setUserInfo({ ...userInfo, designation3: e.target.value })}
                                                    value={workExperience.designation}
                                                    onChange={(e) => {
                                                        let newWorkExperiences = [...userInfo.workExperiences];
                                                        newWorkExperiences[index].designation = e.target.value;
                                                        setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                    }}
                                                />
                                            </div>
                                            <div className="flex space-x-4 my-4">
                                                <TextField
                                                    id={`workCity${index}`}
                                                    fullWidth
                                                    label="City"
                                                    variant="outlined"
                                                    // value={userInfo.workCity3}
                                                    // onChange={(e) => setUserInfo({ ...userInfo, workCity3: e.target.value })}
                                                    value={workExperience.workCity}
                                                    onChange={(e) => {
                                                        let newWorkExperiences = [...userInfo.workExperiences];
                                                        newWorkExperiences[index].workCity = e.target.value;
                                                        setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                
                                                    }}
                                                />
                                            
                                                <TextField
                                                    id={`workCountry${index}`}
                                                    fullWidth
                                                    label="Country"
                                                    variant="outlined"
                                                    // value={userInfo.workCountry3}
                                                    // onChange={(e) => setUserInfo({ ...userInfo, workCountry3: e.target.value })}
                                                    value={workExperience.workCountry}
                                                    onChange={(e) => {
                                                        let newWorkExperiences = [...userInfo.workExperiences];
                                                        newWorkExperiences[index].workCountry = e.target.value;
                                                        setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                    }}
                                                />                                            
                                            </div>
                                            <div className="flex space-x-4">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker 
                                                        label="Start Date"
                                                        slotProps={{ textField: { fullWidth: true } }}
                                                        // value={userInfo.startDate3}
                                                        // onChange={(e) => setUserInfo({ ...userInfo, startDate3: e })}
                                                        value={workExperience.startDate}
                                                        onChange={(e) => {
                                                            let newWorkExperiences = [...userInfo.workExperiences];
                                                            newWorkExperiences[index].startDate = e;
                                                            setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker 
                                                        label="End Date"
                                                        slotProps={{ textField: { fullWidth: true } }}
                                                        // value={userInfo.endDate3}
                                                        // onChange={(e) => setUserInfo({ ...userInfo, endDate3: e })}
                                                        value={workExperience.endDate}
                                                        onChange={(e) => {
                                                            let newWorkExperiences = [...userInfo.workExperiences];
                                                            newWorkExperiences[index].endDate = e;
                                                            setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                            <div className="flex justify-end mt-2">
                                                
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={workExperience.working}
                                                            onChange={() => {       
                                                                    let newWorkExperiences = [...userInfo.workExperiences];
                                                                    newWorkExperiences[index].working = !newWorkExperiences[index].working;
                                                                    setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                            }}
                                                            sx={{ color: '#757575' }}
                                                        />

                                                    }
                                                    label="Currently Working"
                                                    sx={{
                                                        color: '#757575',
                                                    }}
                                                    />
                                                
                                            </div>
                                            {/* Add more fields for each work experience as needed */}
                                        </div>
                                    ))}
                                    
                                </div>
                                </Slide>
                            </React.Fragment>
                            <div className="flex space-x-5 px-4 py-2 justify-end">
                                <Fab
                                sx={{
                                    color: '#e53935',
                                }}
                                    // disabled={userInfo.count == 0}
                                    aria-label="minus"
                                    onClick={handleDelete}
                                >
                                <DeleteForeverIcon />
                                </Fab>
                                <Fab
                                    color="primary"
                                    // disabled={userInfo.count == 2}
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
                        <div className="flex flex-col p-10 ">
                            <React.Fragment>
                            <Slide
                                direction="left"
                                in={activeStep === 2}
                                mountOnEnter
                                unmountOnExit
                            >
                                <div className="flex flex-col">
                                    <Typography
                                        sx={{ mt: 2, mb: 2 }}
                                        variant="h6"
                                        color={"primary"}
                                    >
                                        {" "}
                                        Education{" "}
                                    </Typography>
                                    {userInfo.education.map((education, index) => (
                                        <div key={index} className="flex flex-col p-5">
                                            <div className="flex space-x-4">
                                                <TextField
                                                    id={`schoolname${index}`}
                                                    fullWidth
                                                    label="School Name"
                                                    variant="outlined"
                                                    value={education.school}
                                                    onChange={(e) => {
                                                        let newEducation = [...userInfo.education];
                                                        newEducation[index].school = e.target.value;
                                                        setUserInfo({ ...userInfo, education: newEducation });
                                                    }}
                                                />
                                                <TextField
                                                    id={`degree${index}`}
                                                    fullWidth
                                                    label="Degree"
                                                    variant="outlined"
                                                    value={education.degree}
                                                    onChange={(e) => {
                                                        let newEducation = [...userInfo.education];
                                                        newEducation[index].degree = e.target.value;
                                                        setUserInfo({ ...userInfo, education: newEducation });
                                                    }}
                                                />
                                            </div>
                                            <div className="flex space-x-4 my-4">
                                                <TextField
                                                    id={`schoolCity${index}`}
                                                    fullWidth
                                                    label="schoolCity"
                                                    variant="outlined"
                                                    value={education.schoolCity}
                                                    onChange={(e) => {
                                                        let newEducation = [...userInfo.education];
                                                        newEducation[index].schoolCity = e.target.value;
                                                        setUserInfo({ ...userInfo, education: newEducation });
                                                    }}
                                                />
                                                <TextField
                                                    id={`schoolCountry${index}`}
                                                    fullWidth
                                                    label="schoolCountry"
                                                    variant="outlined"
                                                    value={education.schoolCountry}
                                                    onChange={(e) => {
                                                        let newEducation = [...userInfo.education];
                                                        newEducation[index].schoolCountry = e.target.value;
                                                        setUserInfo({ ...userInfo, education: newEducation });
                                                    }}
                                                />
                                            </div>
                                            <div className="flex space-x-4">
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="Start Date"
                                                        slotProps={{ textField: { fullWidth: true } }}
                                                        // value={userInfo.endDate3}
                                                        // onChange={(e) => setUserInfo({ ...userInfo, endDate3: e })}
                                                        value={education.schoolStartDate}
                                                        onChange={(e) => {
                                                            let newEducation = [...userInfo.workExperiences];
                                                            newEducation[index].schoolStartDate = e;
                                                            setUserInfo({ ...userInfo, education: newEducation });
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="End Date"
                                                        slotProps={{ textField: { fullWidth: true } }}
                                                        // value={userInfo.endDate3}
                                                        // onChange={(e) => setUserInfo({ ...userInfo, endDate3: e })}
                                                        value={education.schoolEndDate}
                                                        onChange={(e) => {
                                                            let newEducation = [...userInfo.workExperiences];
                                                            newEducation[index].schoolEndDate = e;
                                                            setUserInfo({ ...userInfo, education: newEducation });
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                            {/* Add more fields for each education experience as needed */}
                                        </div>
                                    ))}
                                    
                                </div>
                                </Slide>
                            </React.Fragment>
                            <div className="flex space-x-5 px-4 py-2 justify-end">
                                <Fab
                                sx={{
                                    color: '#e53935',
                                }}
                                    // disabled={userInfo.count == 0}
                                    aria-label="minus"
                                    onClick={handleEduDelete}
                                >
                                <DeleteForeverIcon />
                                </Fab>
                                <Fab
                                    color="primary"
                                    // disabled={userInfo.count == 2}
                                    aria-label="add"
                                    onClick={handleEduAdd}
                                >
                                <AddIcon />
                                </Fab>
                            </div>              
                        </div>
                    </Slide>
                    </React.Fragment> 
                </div>
            </div>
            
                    

            
            {activeStep === steps.length ? (
                <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you're finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
                </React.Fragment>
                 ) : (
                <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <div className="flex flex-col w-full">
                    
                    
                    
                    
                    
                    {/* Add more TextField components as needed... */}
                    </div>
                    <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    >
                    Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                        Skip
                    </Button>
                    )}
                    <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                    >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
                </React.Fragment>
            )}
            </Box>
        </div>
        </div>
    );
}

