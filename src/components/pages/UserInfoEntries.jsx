import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Resume1 from "../Resume1";
import Resume2 from "../Resume2";
import Resume3 from "../Resume3";
import Resume4 from "../Resume4";
import Lottie from "lottie-web";
import { useState, useEffect, useRef } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import SaveIcon from "@mui/icons-material/Save";
import ButtonJoy from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import ButtonGroup from "@mui/joy/ButtonGroup";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import axios from "axios";
import { FormHelperText } from "@mui/joy";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DialogActions from '@mui/joy/DialogActions';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Divider from '@mui/joy/Divider';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from "../Navbar";

const steps = [
  "Personal Info",
  "Education",
  "Job History",
  "Projects",
  "Skills",
  "Achievements",
  "Finish",
];


export default function UserInfoEntries({ user }) {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component is rendered
  }, []);

  const options = ['Save', 'Save As..', 'Download'];

  const [openSave, setOpenSave] = useState(false);
  const actionRef = useRef(null);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [openReset, setOpenReset] = useState();

  const handleClick = () => {
    // console.info(`You clicked ${options[selectedIndex]}`);
    switch (selectedIndex) {
      case 0:
        saveAndOverwrite();
        break;
      case 1:
        setOpen(true);
        break;
      case 2:
        downloadPdf();
        break;
      default:
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenSave(false);
  };



  const getCurrentDate = () => {
    return dayjs();
  };

  const completed = useRef(null);

  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [pdfData, setPdfData] = useState(null);
  const [saved, setSaved] = useState(false);
  const [savedOverwrite, setSavedOverwrite] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { detailid, templateid } = useParams();
  const [userInfo, setUserInfo] = React.useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street",
    state: "California",
    city: "Los Angeles",
    country: "USA",
    pincode: "90001",
    workExperiences: [
      {
        company: "Tech Innovations Ltd.",
        designation: "Senior Software Engineer",
        workCity: "San Francisco",
        workCountry: "USA",
        startDate: "2018-06-01",
        endDate: "2022-12-31",
        description: [
          "Led the development of a groundbreaking AI-powered chatbot for customer support, reducing response time by 50%.",
          "Implemented advanced machine learning algorithms for predictive analytics, resulting in a 30% increase in sales.",
          "Mentored junior developers and conducted code reviews to maintain high code quality standards."
        ],
        working: false
      }
    ],
    projects: [
      {
        name: "EcoGuard",
        startDate: "2021-03-15",
        endDate: "2021-06-30",
        link: "https://ecoguard.example.com",
        description: [
          "Developed a mobile application to track environmental pollution levels in real-time and provide recommendations for eco-friendly actions.",
          "Integrated geolocation services to pinpoint pollution hotspots and visualize data on a map interface.",
          "Collaborated with environmental experts to refine algorithms for pollution prediction and prevention."
        ]
      },
      {
        name: "AdventureBuddy",
        startDate: "2020-09-01",
        endDate: "2021-01-31",
        link: "https://adventurebuddy.example.com",
        description: [
          "Designed and implemented a social networking platform for outdoor enthusiasts to connect and plan adventures.",
          "Utilized React Native for cross-platform development, ensuring a seamless user experience on both iOS and Android devices.",
          "Implemented advanced search and filtering functionalities based on user preferences and location."
        ]
      }
    ],
    achievements: [
      "Received the Innovation Award for outstanding contributions to product development at Tech Innovations Ltd.",
      "Published a research paper on artificial intelligence in a top-tier conference, gaining recognition from industry experts.",
      "Achieved a perfect score in a competitive programming contest organized by a leading tech company.",
      "Volunteered as a mentor for underprivileged youth in a coding bootcamp"
    ],
    education: [
      {
        school: "Institute of Technology",
        degree: "Master of Science in Computer Science",
        schoolCity: "Los Angeles",
        schoolCountry: "USA",
        schoolStartDate: "2016-09-01",
        schoolEndDate: "2018-06-30"
      },
      {
        school: "Sunshine High School",
        degree: "High School Diploma",
        schoolCity: "Los Angeles",
        schoolCountry: "USA",
        schoolStartDate: "2012-09-01",
        schoolEndDate: "2016-06-30"
      }
    ],
    skills: [
      "C++, HTML, CSS, JavaScript, Python, JAVA, Kotlin, SQL",
      "ReactJS, ExpressJS, NodeJS, Android, TailwindCSS, Jetpack Compose",
      "Git, VSCode, GitHub, Firebase, MongoDB"
    ]
  });
  const [userInfoPreview, setUserInfoPreview] = useState(userInfo);
  const [resumeName, setResumeName] = useState(detailid);
  const template = [<Resume1 user={userInfoPreview} setPdfData={setPdfData} />, <Resume2 user={userInfoPreview} setPdfData={setPdfData} />, <Resume3 user={userInfoPreview} setPdfData={setPdfData} />, <Resume4 user={userInfoPreview} setPdfData={setPdfData} />];

  const downloadPdf = () => {
    if (pdfData) {
      const blob = new Blob([pdfData], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };



  useEffect(() => {
    console.log(detailid)
    if (user && detailid) {
      console.log("details: ", detailid)
      setLoading(true)
      axios.get("http://localhost:4000/api/data/getDetailsByDetailId", { headers: { email: user.email, detailid: detailid } }).then((result) => {
        setLoading(false)
        console.log(result.data[0])
        setUserInfo(JSON.parse(result.data[0].details));
        setUserInfoPreview(JSON.parse(result.data[0].details));

      }).catch((error) => {
        setLoading(false)

      })
    }
  }, [user, detailid]);

  const saveResume = async () => {
    const details = JSON.stringify(userInfo);
    console.log(userInfo);
    // console.log(typeof details);
    const u = JSON.parse(details);
    console.log(u);
    setSaved(false);
    setLoading(true);
    axios
      .get("http://localhost:4000/api/data/getAllDetailsByEmail", {
        headers: {
          email: user.email,
        },
      })
      .then((res) => {
        const data = res.data;
        const result = data.filter((item) => item.detailid === resumeName);
        console.log("result: ", result);
        if (result.length > 0) {
          setError("Name already exists");
          setSaved(false);
        } else {
          const date = new Date();

          setLoading(false);
          const body = {
            email: user.email,
            detailId: resumeName,
            details: details,
            modified: date.toString(),
          };
          axios
            .post("http://localhost:4000/api/data/addDetails", body)
            .then((res) => {
              setSaved(true);
              console.log("Saved successfully!");
              setTimeout(() => {
                setLoading(false);
                setOpen(false);
                setSaved(false);
              }, 1000);
            })
            .catch((error) => {
              setLoading(false);
              setError("Internal Server Error");
              setSaved(false);
            });
        }
      })
      .catch((error) => {
        setError("Internal Server Error");
        console.log(error);
      });
  };
  const saveAndOverwrite = async () => {
    setSavedOverwrite(false);
    const details = JSON.stringify(userInfo);
    setLoading(true)
    axios
      .get("http://localhost:4000/api/data/getAllDetailsByEmail", {
        headers: {
          email: user.email,
        },
      })
      .then((res) => {
        const data = res.data;
        const result = data.filter((item) => item.detailid === resumeName);
        console.log("result: ", result);
        const date = new Date();
        if (result.length > 0) {
          const body = {
            detailId: resumeName,
            email: user.email,
            details: details,
            modified: date.toString(),
          };
          axios
            .post(
              "http://localhost:4000/api/data/updateDetailsByDetailId",
              body
            )
            .then((res) => {
              setLoading(false)
              setSavedOverwrite(true);
              setTimeout(() => {
                setSavedOverwrite(false);
                setOpen(false);
              }, 1000);
            })
            .catch((error) => {
              setLoading(false)
              setError("Internal Server Error");
            });
        } else {
          saveResume();
        }
      })
      .catch((error) => {
        setLoading(false)
        setError("Internal Server Error");
      });
  };





  useEffect(() => {
    if (activeStep === 6) {
      const instance = Lottie.loadAnimation({
        container: completed.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: require("../animations/completed.json"),
      });
      return () => instance.destroy();
    }
  }, [activeStep]);


  //for work experience
  const isAnyWorkExperienceActive = userInfo.workExperiences.some(
    (workExperience) => workExperience.working
  );

  const handleDelete = () => {
    setUserInfo((prevUserInfo) => {
      if (prevUserInfo.workExperiences.length > 1) {
        let newWorkExperiences = [...prevUserInfo.workExperiences];
        newWorkExperiences.pop(); // Remove the last work experience
        return { ...prevUserInfo, workExperiences: newWorkExperiences };
      } else {
        return prevUserInfo; // Return the current state if there are no work experiences to delete
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
        startDate: getCurrentDate().format('YYYY-MM-DD'),
        endDate: getCurrentDate().format('YYYY-MM-DD'),
        description: [""],
        working: false,
      }); // Add a new work experience with default values
      setUserInfo({ ...userInfo, workExperiences: newWorkExperiences });
    }
  };

  //for education
  const handleDeleteEdu = () => {
    setUserInfo((prevUserInfo) => {
      if (prevUserInfo.education.length > 1) {
        let newEducation = [...prevUserInfo.education];
        newEducation.pop(); // Remove the last work experience
        return { ...prevUserInfo, education: newEducation };
      } else {
        return prevUserInfo; // Return the current state if there are no work experiences to delete
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
        schoolStartDate: getCurrentDate().format('YYYY-MM-DD'),
        schoolEndDate: getCurrentDate().format('YYYY-MM-DD'),
      }); // Add a new work experience with default values
      setUserInfo({ ...userInfo, education: newEducation });
    }
  };

  //for projects
  const handleProjectDelete = () => {
    setUserInfo((prevUserInfo) => {
      if (prevUserInfo.projects.length > 1) {
        let newProjects = [...prevUserInfo.projects];
        newProjects.pop(); // Remove the last project
        return { ...prevUserInfo, projects: newProjects };
      } else {
        return prevUserInfo; // Return the current state if there are no projects to delete
      }
    });
  };

  const handleProjectAdd = () => {
    if (userInfo.projects.length < 3) {
      let newProjects = [...userInfo.projects];
      newProjects.push({
        name: "",
        startDate: getCurrentDate().format('YYYY-MM-DD'),
        endDate: getCurrentDate().format('YYYY-MM-DD'),
        link: "",
        description: [""],
      }); // Add a new project with default values
      setUserInfo({ ...userInfo, projects: newProjects });
    }
  };

  //for skills
  const handleAddSkill = () => {
    let newSkills = [...userInfo.skills];
    newSkills.push("");
    console.log(newSkills);
    setUserInfo({ ...userInfo, skills: newSkills });
  };

  const handleDeleteSkill = () => {
    setUserInfo((prevUserInfo) => {
      if (prevUserInfo.skills.length > 1) {
        let newSkills = [...prevUserInfo.skills];
        newSkills.pop(); // Remove the last skills
        return { ...prevUserInfo, skills: newSkills };
      } else {
        return { ...prevUserInfo, skills: [""] };
      }
    });
  };

  //achievements
  const handleAddAchievements = () => {
    let newAchievements = [...userInfo.achievements];
    newAchievements.push("");
    setUserInfo({ ...userInfo, achievements: newAchievements });
  };

  const handleDeleteAchievements = () => {
    setUserInfo((prevUserInfo) => {
      if (prevUserInfo.achievements.length > 1) {
        let newAchievements = [...prevUserInfo.achievements];
        newAchievements.pop(); // Remove the last achievement
        return { ...prevUserInfo, achievements: newAchievements };
      } else {
        return { ...prevUserInfo, achievements: [""] }; // Return the current state if there are no skill to delete
      }
    });
  };

  // for next button
  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep >= steps.length - 1) {
        console.log(userInfo);
      }
      if (userInfo !== userInfoPreview) {
        console.log("different: ", userInfo, "\n", userInfoPreview);
        setUserInfoPreview({ ...userInfo });
      }
      return prevActiveStep + 1;
    });
  };

  //for previuos button
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (userInfo !== userInfoPreview) {
      console.log("different");
      setUserInfoPreview({ ...userInfo });
    }
  };

  // for reset button
  const handleReset = () => {
    setActiveStep(0);
    const temp = {
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
        {
          company: "",
          designation: "",
          workCity: "",
          workCountry: "",
          startDate: getCurrentDate().format('YYYY-MM-DD'),
          endDate: getCurrentDate().format('YYYY-MM-DD'),
          description: [""],
          working: false,
        },
      ],
      projects: [
        {
          name: "",
          startDate: getCurrentDate().format('YYYY-MM-DD'),
          endDate: getCurrentDate().format('YYYY-MM-DD'),
          link: "",
          description: [""],
        },
      ],
      achievements: [""],
      education: [
        {
          school: "",
          degree: "",
          schoolCity: "",
          schoolCountry: "",
          schoolStartDate: getCurrentDate().format('YYYY-MM-DD'),
          schoolEndDate: getCurrentDate().format('YYYY-MM-DD'),
        },
      ],
      skills: [""],
    };
    setUserInfo(temp);
    setUserInfoPreview(temp);
  };

  return (
    <>

      <div className="flex max-lg:flex-col my-5 bg-white pt-[10vh] w-full p-8 h-fit">
        <div className="w-[50vw] max-lg:w-[100vw]">
          <Box sx={{ width: "100%" }}>
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
                  <div className={`${activeStep === 0 ? "" : "hidden"}`}>
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
                          required
                          fullWidth
                          value={userInfo.firstName}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              firstName: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Last Name"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.lastName}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex space-x-[2vw] mt-4 ">
                        <TextField
                          label="E-Mail"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.email}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              email: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Phone"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.phone}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex my-4 ">
                        <TextField
                          label="Address"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.address}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              address: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex space-x-[2vw] my-2 ">
                        <TextField
                          label="State"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.state}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              state: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="City"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.city}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              city: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex space-x-[2vw] my-2 ">
                        <TextField
                          label="Country"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.country}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              country: e.target.value,
                            })
                          }
                        />
                        <TextField
                          label="Pincode"
                          variant="outlined"
                          required
                          fullWidth
                          value={userInfo.pincode}
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              pincode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
                <React.Fragment>
                  <div
                    direction="right"
                    className={`${activeStep === 1 ? "" : "hidden"}`}
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className="flex flex-col p-4 ">
                      {userInfo.education.map((education, index) => (
                        <div className="flex flex-col">
                          <Typography
                            sx={{
                              mt: 2,
                              mb: 2,
                            }}
                            variant="h6"
                            color={"primary"}
                          >
                            {" "}
                            {education.school === ""
                              ? `Education ${index + 1}`
                              : education.school}
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
                                  setUserInfo({
                                    ...userInfo,
                                    education: newEducation,
                                  });
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
                                  setUserInfo({
                                    ...userInfo,
                                    education: newEducation,
                                  });
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
                                  newEducation[index].schoolCity =
                                    e.target.value;
                                  setUserInfo({
                                    ...userInfo,
                                    education: newEducation,
                                  });
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
                                  newEducation[index].schoolCountry =
                                    e.target.value;
                                  setUserInfo({
                                    ...userInfo,
                                    education: newEducation,
                                  });
                                }}
                              />
                            </div>
                            <div className="flex space-x-4 my-4">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  label="Start Date"
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                    },
                                  }}
                                  // value={userInfo.endDate3}
                                  // onChange={(e) => setUserInfo({ ...userInfo, endDate3: e })}
                                  value={dayjs(education.schoolStartDate)}
                                  onChange={(e) => {
                                    let newEducation = [...userInfo.education];
                                    newEducation[index].schoolStartDate = e.format('YYYY-MM-DD');
                                    setUserInfo({
                                      ...userInfo,
                                      education: newEducation,
                                    });
                                  }}
                                />
                              </LocalizationProvider>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  label="End Date"
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                    },
                                  }}
                                  // value={userInfo.endDate3}
                                  // onChange={(e) => setUserInfo({ ...userInfo, endDate3: e })}
                                  value={dayjs(education.schoolEndDate)}
                                  onChange={(e) => {
                                    let newEducation = [...userInfo.education];
                                    newEducation[index].schoolEndDate = e.format('YYYY-MM-DD');
                                    setUserInfo({
                                      ...userInfo,
                                      education: newEducation,
                                    });
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
                            color: "#e53935",
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
                    className={`${activeStep === 2 ? "" : "hidden"}`}
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className="flex flex-col p-4">
                      {userInfo.workExperiences.map((workExperience, index) => (
                        <div className="flex flex-col">
                          <Typography
                            sx={{
                              mt: 2,
                              mb: 2,
                            }}
                            variant="h6"
                            color={"primary"}
                          >
                            {" "}
                            {workExperience.designation === ""
                              ? `Work Experience ${index + 1}`
                              : workExperience.designation}
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
                                  let newWorkExperiences = [
                                    ...userInfo.workExperiences,
                                  ];
                                  newWorkExperiences[index].company =
                                    e.target.value;
                                  setUserInfo({
                                    ...userInfo,
                                    workExperiences: newWorkExperiences,
                                  });
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
                                  let newWorkExperiences = [
                                    ...userInfo.workExperiences,
                                  ];
                                  newWorkExperiences[index].designation =
                                    e.target.value;
                                  setUserInfo({
                                    ...userInfo,
                                    workExperiences: newWorkExperiences,
                                  });
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
                                  let newWorkExperiences = [
                                    ...userInfo.workExperiences,
                                  ];
                                  newWorkExperiences[index].workCity =
                                    e.target.value;
                                  setUserInfo({
                                    ...userInfo,
                                    workExperiences: newWorkExperiences,
                                  });
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
                                  let newWorkExperiences = [
                                    ...userInfo.workExperiences,
                                  ];
                                  newWorkExperiences[index].workCountry =
                                    e.target.value;
                                  setUserInfo({
                                    ...userInfo,
                                    workExperiences: newWorkExperiences,
                                  });
                                }}
                              />
                            </div>
                            <div className="flex space-x-4">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  label="Start Date"
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                    },
                                  }}
                                  // value={userInfo.startDate3}
                                  // onChange={(e) => setUserInfo({ ...userInfo, startDate3: e })}
                                  value={dayjs(workExperience.startDate)}
                                  onChange={(e) => {
                                    let newWorkExperiences = [
                                      ...userInfo.workExperiences,
                                    ];
                                    newWorkExperiences[index].startDate = e.format('YYYY-MM-DD');
                                    setUserInfo({
                                      ...userInfo,
                                      workExperiences: newWorkExperiences,
                                    });
                                  }}
                                />
                              </LocalizationProvider>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  label="End Date"
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                    },
                                  }}
                                  disabled={workExperience.working}
                                  // value={userInfo.endDate3}
                                  // onChange={(e) => setUserInfo({ ...userInfo, endDate3: e })}
                                  value={dayjs(workExperience.endDate)}
                                  onChange={(e) => {
                                    let newWorkExperiences = [
                                      ...userInfo.workExperiences,
                                    ];
                                    newWorkExperiences[index].endDate = e.format('YYYY-MM-DD');
                                    setUserInfo({
                                      ...userInfo,
                                      workExperiences: newWorkExperiences,
                                    });
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
                                multiline
                                rows={4}
                                value={workExperience.description.join("\n")}
                                onChange={(e) => {
                                  let newWorkExperiences = [
                                    ...userInfo.workExperiences,
                                  ];
                                  newWorkExperiences[index].description =
                                    e.target.value.split("\n");
                                  setUserInfo({
                                    ...userInfo,
                                    workExperiences: newWorkExperiences,
                                  });
                                }}
                              />
                            </div>
                            <div className="flex justify-end mt-2">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={workExperience.working}
                                    onChange={() => {
                                      let newWorkExperiences = [
                                        ...userInfo.workExperiences,
                                      ];
                                      newWorkExperiences[index].working =
                                        !newWorkExperiences[index].working;
                                      setUserInfo({
                                        ...userInfo,
                                        workExperiences: newWorkExperiences,
                                      });
                                    }}
                                    disabled={
                                      isAnyWorkExperienceActive &&
                                      !workExperience.working
                                    }
                                    sx={{
                                      color: "#757575",
                                    }}
                                  />
                                }
                                label="Currently Working"
                                sx={{
                                  color: "#757575",
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
                            color: "#e53935",
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
                    className={`${activeStep === 3 ? "" : "hidden"}`}
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className="flex flex-col p-4">
                      {userInfo.projects.map((project, index) => (
                        <div className="flex flex-col">
                          <Typography
                            sx={{
                              mt: 2,
                              mb: 2,
                            }}
                            variant="h6"
                            color={"primary"}
                          >
                            {" "}
                            {project.name === ""
                              ? `Project ${index + 1}`
                              : project.name}
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
                                  setUserInfo({
                                    ...userInfo,
                                    projects: newProject,
                                  });
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
                                  setUserInfo({
                                    ...userInfo,
                                    projects: newProject,
                                  });
                                }}
                              />
                            </div>
                            <div className="flex space-x-4 my-4">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  id={`startDate${index}`}
                                  label="Start Date"
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                    },
                                  }}
                                  // value={userInfo.startDate3}
                                  // onChange={(e) => setUserInfo({ ...userInfo, startDate3: e })}
                                  value={dayjs(project.startDate)}
                                  onChange={(e) => {
                                    let newProject = [...userInfo.projects];
                                    newProject[index].startDate = e.format('YYYY-MM-DD');
                                    setUserInfo({
                                      ...userInfo,
                                      projects: newProject,
                                    });
                                  }}
                                />
                              </LocalizationProvider>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  id={`endDate${index}`}
                                  label="End Date"
                                  slotProps={{
                                    textField: {
                                      fullWidth: true,
                                    },
                                  }}
                                  value={dayjs(project.endDate)}
                                  onChange={(e) => {
                                    let newProjects = [...userInfo.projects];
                                    newProjects[index].endDate = e.format('YYYY-MM-DD');
                                    setUserInfo({
                                      ...userInfo,
                                      projects: newProjects,
                                    });
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
                                multiline
                                rows={4}
                                value={project.description.join("\n")}
                                onChange={(e) => {
                                  let newProject = [...userInfo.projects];
                                  newProject[index].description =
                                    e.target.value.split("\n");
                                  setUserInfo({
                                    ...userInfo,
                                    projects: newProject,
                                  });
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
                            color: "#e53935",
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
                    className={`${activeStep === 4 ? "" : "hidden"}`}
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
                      {userInfo.skills.map((skill, index) => (
                        <TextField
                          key={index}
                          label={`Skill ${index + 1}`}
                          value={skill}
                          onChange={(e) => {
                            console.log(e.target.value);
                            let newSkills = [...userInfo.skills];
                            newSkills[index] = e.target.value;
                            setUserInfo({
                              ...userInfo,
                              skills: newSkills,
                            });
                          }}
                          variant="outlined"
                          margin="normal"
                        />
                      ))}
                      <div className="flex space-x-5 px-4 py-2 justify-end">
                        <Fab
                          sx={{ color: "#e53935" }}
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
                    className={`${activeStep === 5 ? "" : "hidden"}`}
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
                      {userInfo.achievements.map((achievement, index) => (
                        <TextField
                          key={index}
                          label={`Achievement ${index + 1}`}
                          value={achievement}
                          onChange={(e) => {
                            let newAchievement = [...userInfo.achievements];
                            newAchievement[index] = e.target.value;
                            setUserInfo({
                              ...userInfo,
                              achievements: newAchievement,
                            });
                          }}
                          variant="outlined"
                          margin="normal"
                        />
                      ))}
                      <div className="flex space-x-5 px-4 py-2 justify-end">
                        <Fab
                          sx={{ color: "#e53935" }}
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
              {activeStep === steps.length - 1 ? (
                <div className="">
                  <div className="">
                    <div className="w-full relative">
                      <div className="w-full  h-[60vh]" ref={completed}></div>
                      <div className="font-manrope absolute bottom-7 w-full  text-center text-2xl cursor-pointer">
                        All steps done. Save/download resume or go to{" "}
                        <Link
                          to="/dashboard"
                          className="underline cursor-pointer  text-blue-500"
                        >
                          dashboard
                        </Link>{" "}
                        to view.
                      </div>
                    </div>

                    <ButtonGroup className="flex pt-4 px-10 justify-end">
                      <ButtonJoy variant="outlined" color="primary" onClick={() => { setOpenReset(true) }}>
                        <RestartAltIcon /> &nbsp; Reset
                      </ButtonJoy>
                      <ButtonJoy
                        color="primary"
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                      >
                        <SkipPreviousIcon /> &nbsp; Back
                      </ButtonJoy>

                      <ButtonJoy color="primary" variant="outlined"
                        ref={anchorRef} onClick={handleClick}>{selectedIndex === 0 ? (<SaveIcon />) : (selectedIndex === 1) ? <SaveAsIcon /> : <DownloadIcon />}&nbsp;{savedOverwrite ? "Saved Successfully!" : options[selectedIndex]} </ButtonJoy>
                      <IconButton color="primary" variant="outlined"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onMouseDown={() => {
                          actionRef.current = () => setOpenSave(!open);
                        }}
                        onKeyDown={() => {
                          actionRef.current = () => setOpenSave(!open);
                        }}
                        onClick={() => {
                          actionRef.current?.();
                        }}
                      >
                        <ArrowDropDownIcon />
                      </IconButton>
                    </ButtonGroup>
                    <Menu color="primary" open={openSave} onClose={() => openSave(false)} anchorEl={anchorRef.current}>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {index === 0 ? (<SaveIcon />) : (index === 1) ? <SaveAsIcon /> : <DownloadIcon />} &nbsp;{option}
                        </MenuItem>
                      ))}
                    </Menu>
                    {/* <ButtonJoy color="primary" onClick={downloadPdf}>
                        <DownloadIcon />
                        &nbsp;
                        <span>Download</span>
                      </ButtonJoy> */}
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  <ButtonGroup className="flex px-10 pt-4 justify-end">
                    <ButtonJoy color="primary" onClick={() => { setOpenReset(true) }}>
                      <RestartAltIcon /> &nbsp; Reset
                    </ButtonJoy>
                    <ButtonJoy
                      color="primary"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      <SkipPreviousIcon /> &nbsp; Back
                    </ButtonJoy>
                    <ButtonJoy color="primary" onClick={handleNext}>
                      <SkipNextIcon /> &nbsp;
                      {activeStep >= steps.length - 1 ? "Finish" : "Next"}
                    </ButtonJoy>
                  </ButtonGroup>
                </React.Fragment>
              )}
            </div>
          </Box>
        </div>
        <Modal
          open={open}
          onClose={() => {
            setSaved(false);
            setOpen(false);
          }}
        >
          {/* {setSaved(false)} */}
          <ModalDialog>
            <DialogTitle>Save Resume</DialogTitle>
            <DialogContent>
              Please provide a name for your resume.
            </DialogContent>

            <Stack spacing={2}>
              <FormControl error={error !== ""}>
                <FormLabel>Name</FormLabel>
                <Input
                  value={resumeName}
                  onChange={(e) => {
                    setError("");
                    setResumeName(e.target.value);
                  }}
                  autoFocus
                  required
                />
                <FormHelperText> {error}</FormHelperText>
              </FormControl>
              <ButtonGroup className="" orientation="vertical">
                <ButtonJoy
                  className="w-full"
                  variant={saved ? "solid" : "outlined"}
                  color={saved ? "success" : "primary"}
                  type="submit"
                  onClick={saveResume}
                >
                  {saved ? "Saved Successfully!" : "Save"}
                </ButtonJoy>
                {/* <ButtonJoy
                  variant="outlined"
                  color={savedOverwrite ? "success" : "primary"}
                  className="w-full"
                  onClick={saveAndOverwrite}
                >
                  {savedOverwrite
                    ? "Saved Successfully!"
                    : "Save"}
                </ButtonJoy> */}
              </ButtonGroup>
            </Stack>
          </ModalDialog>
        </Modal>
        <Modal open={openReset} onClose={() => setOpenReset(false)}>
          <ModalDialog variant="outlined" role="alertdialog">
            <DialogTitle>
              <WarningRoundedIcon />
              Confirmation
            </DialogTitle>
            <Divider />
            <DialogContent>
              Are you sure you want to reset all the details?
            </DialogContent>
            <DialogActions>
              <ButtonJoy variant="solid" color="danger" onClick={() => { handleReset(); setOpenReset(false); }}>
                Yes
              </ButtonJoy>
              <ButtonJoy variant="plain" color="neutral" onClick={() => setOpenReset(false)}>
                No
              </ButtonJoy>
            </DialogActions>
          </ModalDialog>
        </Modal>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className="w-[50vw] max-lg:w-[100vw] h-[85vh] px-2 lg:px-10">
          {template[templateid]}
        </div>
      </div>
    </>
  );
}
