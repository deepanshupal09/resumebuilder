import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
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
import Navbar from './Navbar';
import Footer from "./Footer";

const v=1;
const steps = ['Personal Info', 'Education', 'Job History', 'Projects', 'Skills', 'Achievements', 'Finish'];

export default function UserInfoEntries() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const date = new Date();

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
            { company: "", designation: "", workCity: "", workCountry: "", startDate: "", endDate: "", description: "",  working: false },
        ],
        projects: [
            { name: "", startDate: "", endDate: "",  link: "", description: ""},
        ],
        achievements: [{
            description: ""
        }],
        education: [
            { school: "", degree: "", schoolCity: "", schoolCountry: "", schoolStartDate: "", schoolEndDate: "" },
        ],
        skills: [{
            skillName: ""
        }],
    })

    //for work experience
    const isAnyWorkExperienceActive = userInfo.workExperiences.some(workExperience => workExperience.working);

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
                description: "",
                working: false
            });  // Add a new work experience with default values
            setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
        }
    };

    //for education
    const handleDeleteEdu = () => {
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

    const handleAddEdu = () => {
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

    //for projects
    const handleProjectDelete = () => {
        setUserInfo(prevUserInfo => {
            if (prevUserInfo.projects.length > 1) {
                let newProjects = [...prevUserInfo.projects];
                newProjects.pop();  // Remove the last project
                return { ...prevUserInfo, projects: newProjects };
            } else {
                return prevUserInfo;  // Return the current state if there are no projects to delete
            }
        });
    };

    const handleProjectAdd = () => {
        if (userInfo.projects.length < 3) {
            let newProjects = [...userInfo.projects];
            newProjects.push({
                name: "", startDate: "", endDate: "",  link: "", description: ""
            });  // Add a new project with default values
            setUserInfo({ ...userInfo, projects: newProjects });
        }
    };

    //for skills
    const handleAddSkill = () => {
        let newSkills = [...userInfo.skills];
        newSkills.push({ skillName: "" });
        setUserInfo({ ...userInfo, skills: newSkills });
    };

    const handleDeleteSkill = () => {
        setUserInfo(prevUserInfo => {
            if (prevUserInfo.skills.length > 1) {
                let newSkills = [...prevUserInfo.skills];
                newSkills.pop();  // Remove the last skills
                return { ...prevUserInfo, skills: newSkills };
            } else {
                return prevUserInfo;  // Return the current state if there are no skill to delete
            }
        });
    };

    //achievements
    const handleAddAchievements = () => {
        let newAchievements = [...userInfo.achievements];
        newAchievements.push({ description: "" });
        setUserInfo({ ...userInfo, achievements: newAchievements });
    };

    const handleDeleteAchievements = () => {
        setUserInfo(prevUserInfo => {
            if (prevUserInfo.achievements.length > 1) {
                let newAchievements = [...prevUserInfo.achievements];
                newAchievements.pop();  // Remove the last achievement
                return { ...prevUserInfo, achievements: newAchievements };
            } else {
                return prevUserInfo;  // Return the current state if there are no skill to delete
            }
        });
    };

    // for next button
    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            if (prevActiveStep >= steps.length - 1) {
                console.log(userInfo);
            }
            return prevActiveStep + 1;
        });
    };

    //for previuos button
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    // for reset button
    const handleReset = () => {
        setActiveStep(0);
        setUserInfo({
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
                { company: "", designation: "", workCity: "", workCountry: "", startDate: "", endDate: "",description: "", working: false },
            ],
            projects: [
                { name: "", startDate: "", endDate: "",  link: "", description: "" },
            ],
            achievements: [{
                description: ""
            }],
            education: [
                { school: "", degree: "", schoolCity: "", schoolCountry: "", schoolStartDate: "", schoolEndDate: "" },
            ],
            skills: [{
                skillName: ""
            }],
        });
    };


    return (
        <>
            <Navbar />
            <div className="flex my-5 bg-white pt-[10vh] w-full p-8 h-[100vh]">
                <div className="w-[50vw]">
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};

                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>
                                            {/* {label} */}
                                            {activeStep === index ? label : ""}
                                        </StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        <div className="flex flex-col space-y-5 pb-20 justify-between my-5 h-[80vh]">
                            <div className="overflow-y-auto overflow-x-hidden">
                                <React.Fragment>
                                    <div
                                        className={`${activeStep === 0 ? '' : 'hidden'}`}
                                    >
                                        <div className="flex flex-col ">
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
                                    </div>
                                </React.Fragment>
                                <React.Fragment>
                                    <div
                                        direction="right"
                                        className={`${activeStep === 1 ? '' : 'hidden'}`}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <div className="flex flex-col p-4 ">

                                            {userInfo.education.map((education, index) => (
                                            <div className="flex flex-col">
                                                <Typography
                                                    sx={{ mt: 2, mb: 2 }}
                                                    variant="h6"
                                                    color={"primary"}
                                                >
                                                    {" "}
                                                    Education {index+1}
                                                </Typography>
                                                    <div key={index} className="flex flex-col">
                                                        <div className="flex space-x-4">
                                                            <TextField
                                                                id={`schoolname${index}`}
                                                                fullWidth
                                                                label="Institution Name"
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
                                                        <div className="flex space-x-4 my-2">
                                                            <TextField
                                                                id={`schoolCity${index}`}
                                                                fullWidth
                                                                label="Institution City"
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
                                                                label="Institution Country"
                                                                variant="outlined"
                                                                value={education.schoolCountry}
                                                                onChange={(e) => {
                                                                    let newEducation = [...userInfo.education];
                                                                    newEducation[index].schoolCountry = e.target.value;
                                                                    setUserInfo({ ...userInfo, education: newEducation });
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex space-x-4 my-4">
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DatePicker
                                                                    label="Start Date"
                                                                    slotProps={{ textField: { fullWidth: true } }}
                                                                    // value={userInfo.endDate3}
                                                                    // onChange={(e) => setUserInfo({ ...userInfo, endDate3: e })}
                                                                    value={education.schoolStartDate}
                                                                    onChange={(e) => {
                                                                        let newEducation = [...userInfo.education];
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
                                                                        let newEducation = [...userInfo.education];
                                                                        newEducation[index].schoolEndDate = e;
                                                                        setUserInfo({ ...userInfo, education: newEducation });
                                                                    }}
                                                                />
                                                            </LocalizationProvider>
                                                        </div>
                                                        {/* Add more fields for each education experience as needed */}
                                                    </div>

                                                </div>
                                            ))}

                                            <div className="flex space-x-5 px-4 py-2 justify-end">
                                                <Fab
                                                    sx={{
                                                        color: '#e53935',
                                                    }}
                                                    // disabled={userInfo.count == 0}
                                                    aria-label="minus"
                                                    onClick={handleDeleteEdu}
                                                >
                                                    <DeleteForeverIcon />
                                                </Fab>
                                                <Fab
                                                    color="primary"
                                                    // disabled={userInfo.count == 2}
                                                    aria-label="add"
                                                    onClick={handleAddEdu}
                                                >
                                                    <AddIcon />
                                                </Fab>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                                <React.Fragment>
                                    <div
                                        direction="right"
                                        className={`${activeStep === 2 ? '' : 'hidden'}`}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <div className="flex flex-col p-4">

                                            {userInfo.workExperiences.map((workExperience, index) => (
                                            <div className="flex flex-col">
                                                <Typography
                                                    sx={{ mt: 2, mb: 2 }}
                                                    variant="h6"
                                                    color={"primary"}
                                                >
                                                    {" "}
                                                    Work Experience {index+1}
                                                </Typography>
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
                                                        <div className="flex my-4 ">
                                                            <TextField
                                                                id={`description${index}`}
                                                                label="Job Description"
                                                                variant="outlined"
                                                                fullWidth
                                                                value={workExperience.description}
                                                                onChange={(e) => {
                                                                    let newWorkExperiences = [...userInfo.workExperiences];
                                                                    newWorkExperiences[index].description = e.target.value;
                                                                    setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
                                                                }}
                                                            />
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
                                                                        disabled={isAnyWorkExperienceActive && !workExperience.working}
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

                                                </div>
                                            ))}

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
                                    </div>
                                </React.Fragment>
                                <React.Fragment>
                                    <div
                                        direction="right"
                                        className={`${activeStep === 3 ? '' : 'hidden'}`}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <div className="flex flex-col p-4">

                                            {userInfo.projects.map((project, index) => (
                                            <div className="flex flex-col">
                                                <Typography
                                                    sx={{ mt: 2, mb: 2 }}
                                                    variant="h6"
                                                    color={"primary"}
                                                >
                                                    {" "}
                                                    Project {index+1}
                                                </Typography>
                                                    <div key={index}>
                                        
                                                        <div className="flex space-x-4">
                                                            <TextField
                                                                id={`name${index}`}
                                                                fullWidth
                                                                label="Project Name"
                                                                variant="outlined"
                                                                value={project.name}
                                                                onChange={(e) => {
                                                                    let newProject = [...userInfo.projects];
                                                                    newProject[index].name = e.target.value;
                                                                    setUserInfo({ ...userInfo, projects: newProject });
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex my-4 ">
                                                            <TextField
                                                                id={`link${index}`}
                                                                label="Project Link"
                                                                variant="outlined"
                                                                fullWidth
                                                                value={project.link}
                                                                onChange={(e) => {
                                                                    let newProject = [...userInfo.projects];
                                                                    newProject[index].link = e.target.value;
                                                                    setUserInfo({ ...userInfo, projects: newProject });
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex space-x-4 my-4">
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DatePicker
                                                                    id={`startDate${index}`}
                                                                    label="Start Date"
                                                                    slotProps={{ textField: { fullWidth: true } }}
                                                                    // value={userInfo.startDate3}
                                                                    // onChange={(e) => setUserInfo({ ...userInfo, startDate3: e })}
                                                                    value={project.startDate}
                                                                    onChange={(e) => {
                                                                        let newProject = [...userInfo.projects];
                                                                        newProject[index].startDate = e;
                                                                        setUserInfo({ ...userInfo, projects: newProject });
                                                                    }}
                                                                />
                                                            </LocalizationProvider>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DatePicker
                                                                    id={`endDate${index}`}
                                                                    label="End Date"
                                                                    slotProps={{ textField: { fullWidth: true } }}
                                                                    value={project.endDate}
                                                                    onChange={(e) => {
                                                                        let newProject = [...userInfo.projects];
                                                                        newProject[index].endDate = e;
                                                                        setUserInfo({ ...userInfo, projects: newProject });
                                                                    }}
                                                                />
                                                            </LocalizationProvider>
                                                        </div>
                                                        <div className="flex my-4 ">
                                                            <TextField
                                                                id={`description${index}`}
                                                                label="Project Description"
                                                                variant="outlined"
                                                                fullWidth
                                                                value={project.description}
                                                                onChange={(e) => {
                                                                    let newProject = [...userInfo.projects];
                                                                    newProject[index].description = e.target.value;
                                                                    setUserInfo({ ...userInfo, projects: newProject });
                                                                }}
                                                            />
                                                        </div>
                                                        {/* Add more fields for each work experience as needed */}
                                                    </div>

                                                </div>
                                            ))}

                                            <div className="flex space-x-5 px-4 py-2 justify-end">
                                                <Fab
                                                    sx={{
                                                        color: '#e53935',
                                                    }}
                                                    // disabled={userInfo.count == 0}
                                                    aria-label="minus"
                                                    onClick={handleProjectDelete}
                                                >
                                                    <DeleteForeverIcon />
                                                </Fab>
                                                <Fab
                                                    color="primary"
                                                    // disabled={userInfo.count == 2}
                                                    aria-label="add"
                                                    onClick={handleProjectAdd}
                                                >
                                                    <AddIcon />
                                                </Fab>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                                <React.Fragment>
                                    <div
                                        direction="right"
                                        className={`${activeStep === 4 ? '' : 'hidden'}`}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <div className="flex flex-col p-4">
                                            <Typography
                                                sx={{ mt: 2, mb: 2 }}
                                                variant="h6"
                                                color={"primary"}
                                            >
                                                Skills
                                            </Typography>
                                            {userInfo.skills.map((skills, index) => (
                                                <TextField
                                                    key={index}
                                                    label={`Skill ${index + 1}`}
                                                    value={skills.skillName}
                                                    onChange={(e) => {
                                                        let newSkills = [...userInfo.skills];
                                                        newSkills[index].skillName = e.target.value;
                                                        setUserInfo({ ...userInfo, skills: newSkills });
                                                    }}
                                                    variant="outlined"
                                                    margin="normal"
                                                />
                                            ))}
                                            <div className="flex space-x-5 px-4 py-2 justify-end">
                                                <Fab
                                                    sx={{ color: '#e53935' }}
                                                    // disabled={userInfo.skills.length == 0}
                                                    aria-label="minus"
                                                    onClick={handleDeleteSkill}
                                                >
                                                    <DeleteForeverIcon />
                                                </Fab>
                                                <Fab
                                                    color="primary"
                                                    // disabled={userInfo.skills.length == 3}
                                                    aria-label="add"
                                                    onClick={handleAddSkill}
                                                >
                                                    <AddIcon />
                                                </Fab>
                                            </div>
                                        </div>

                                    </div>
                                </React.Fragment>
                                <React.Fragment>
                                    <div
                                        direction="right"
                                        className={`${activeStep === 5 ? '' : 'hidden'}`}
                                        mountOnEnter
                                        unmountOnExit
                                    >
                                        <div className="flex flex-col p-4">
                                            <Typography
                                                sx={{ mt: 2, mb: 2 }}
                                                variant="h6"
                                                color={"primary"}
                                            >
                                                Achievements
                                            </Typography>
                                            {userInfo.achievements.map((achievements, index) => (
                                                <TextField
                                                    key={index}
                                                    label={`Achievement ${index + 1}`}
                                                    value={achievements.description}
                                                    onChange={(e) => {
                                                        let newAchievement = [...userInfo.achievements];
                                                        newAchievement[index].description = e.target.value;
                                                        setUserInfo({ ...userInfo, achievements: newAchievement });
                                                    }}
                                                    variant="outlined"
                                                    margin="normal"
                                                />
                                            ))}
                                            <div className="flex space-x-5 px-4 py-2 justify-end">
                                                <Fab
                                                    sx={{ color: '#e53935' }}
                                                    // disabled={userInfo.skills.length == 0}
                                                    aria-label="minus"
                                                    onClick={handleDeleteAchievements}
                                                >
                                                    <DeleteForeverIcon />
                                                </Fab>
                                                <Fab
                                                    color="primary"
                                                    // disabled={userInfo.skills.length == 3}
                                                    aria-label="add"
                                                    onClick={handleAddAchievements}
                                                >
                                                    <AddIcon />
                                                </Fab>
                                            </div>
                                        </div>

                                    </div>
                                </React.Fragment>
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
                                    <div className="flex space-x-3 px-10 justify-end">
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
                                </React.Fragment>
                            )}
                        </div>

                    </Box>
                </div>
            </div>
            <Footer />
        </>
    );
}

