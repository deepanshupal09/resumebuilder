import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import "react-pdf/dist/esm/Page/TextLayer.css";

const user = {
  firstName: "Anant",
  lastName: "Bansal",
  email: "ab6157@dseu.ac.in",
  phone: "1234567890",
  address: "Shahadra",
  state: "Delhi",
  city: "New Delhi",
  country: "India",
  pincode: "110032",
  workExperiences: [
    {
      company: "Pingap.ai",
      designation: "SDE Intern",
      Description: [
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
      ],
      workCity: "New Delhi",
      workCountry: "India",
      startDate: "April 2024",
      endDate: "June 2024",
      working: true,
    },
    {
      company: "Candour Systems Pvt. Ltd.",
      designation: "SDE Intern",
      Description: [
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
      ],
      workCity: "New Delhi",
      workCountry: "India",
      startDate: "Aug 2023",
      endDate: "October 2023",
      working: false,
    },
  ],
  projects: [
    {
      Link: "Pingap.ai",
      projectName: "Made GPT-6 with Meta 9",
      startDate: "April 2024",
      endDate: "June 2024",
      Description: [
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
      ],
    },
    {
      Link: "Pingap.ai",
      projectName: "Apple Vision X Pro",
      startDate: "April 2024",
      endDate: "June 2024",
      Description: [
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
        "Led XYZ which led to X% of improvement in ABC",
      ],
    },
  ],
  education: [
    {
      school: "DSEU",
      degree: "B.Tech Computer Science",
      schoolCity: "New Delhi",
      schoolCountry: "India",
      schoolStartDate: "2021",
      schoolEndDate: "2025",
    },
    {
      school: "Little Flower Public School",
      degree: "Class XII",
      schoolCity: "New Delhi",
      schoolCountry: "India",
      schoolStartDate: "2019",
      schoolEndDate: "2020",
    },
    {
      school: "Little Flower Public School",
      degree: "Class X",
      schoolCity: "New Delhi",
      schoolCountry: "India",
      schoolStartDate: "2017",
      schoolEndDate: "2018",
    },
  ],
  achievments: [
    "Actively write blog posts and social media posts (TikTok, Instagram) viewed by over 20K+ job seekers per week to help people with best practices to land their dream jobs.",
    "Actively write blog posts and social media posts (TikTok, Instagram) viewed by over 20K+ job seekers per week to help people with best practices to land their dream jobs",
  ],
  skills: ["C++", "Python", "Java", "Javascript"],
};


Font.register({
  family: "Roboto",
  
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-thin-webfont.ttf",
      fontWeight: 100,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: 600,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf",
      fontWeight: 900,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    padding: 20,
    fontSize: "11px",
    fontWeight: "300",
  },
  heading: {
    textAlign: "center",
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: "20px",
  },
  contact: {
    textAlign: "center",
    fontSize: "11px",
  },
  subHeading: {
    fontWeight: "500",
    fontSize: "12px",
    marginTop: "6px",
  },
  divider: {
    height: "0.5px",
    backgroundColor: "black",
    width: "100%",
    marginVertical: "8px",
  },
  bold: {
    fontWeight: "400",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  education: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "6px",
  },
  exp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expSub: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // fontStyle: "italic",
    fontSize: "9px",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10px",
    marginVertical: "1px",
  },
});


const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.heading}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.contact}>
          {user.phone} • {user.address}, {user.city}, {user.state},{" "}
          {user.country} • {user.email}
        </Text>
      </View>
      <View>
        <Text style={styles.subHeading}>EDUCATION</Text>
        <View style={styles.divider}></View>
        {user.education.map((element, index) => {
          return (
            <View style={styles.education}>
              <View style={styles.flex}>
                <Text style={styles.bold}>{element.degree} </Text>{" "}
                <Text>
                  {" "}
                  {element.school}, {element.schoolCity},{" "}
                  {element.schoolCountry}{" "}
                </Text>
              </View>
              <Text>
                {" "}
                {element.schoolStartDate}-{element.schoolEndDate}{" "}
              </Text>
            </View>
          );
        })}
      </View>
      <View>
        <Text style={styles.subHeading}>SKILLS</Text>
        <View style={styles.divider}></View>
        {user.skills.map((element, index) => {
          return <Text style={styles.listItem}> - {element}</Text>;
        })}
      </View>
      <View>
        <Text style={styles.subHeading}>EXPERIENCE</Text>
        <View style={styles.divider}></View>
        {user.workExperiences.map((element, index) => {
          return (
            <View style={{ marginBottom: "6px" }}>
              <View style={styles.exp}>
                <Text style={styles.bold}> {element.designation} </Text>
                <Text>
                  {element.startDate} - {element.endDate}
                </Text>
              </View>
              <View style={styles.expSub}>
                <Text style={styles.bold}> {element.company} </Text>
                <Text>
                  {element.workCity}, {element.workCountry}
                </Text>
              </View>
              {element.Description.map((element, index) => {
                return <Text style={styles.listItem}>- {element}</Text>;
              })}
            </View>
          );
        })}
      </View>
      <View>
        <Text style={styles.subHeading}>PROJECTS</Text>
        <View style={styles.divider}></View>
        {user.projects.map((project, index) => {
          return (
            <View style={{ marginBottom: "6px" }}>
              <View style={styles.exp}>
                <Text style={styles.bold}>{project.projectName}</Text>
                <Text>
                  {" "}
                  {project.startDate} - {project.endDate}{" "}
                </Text>
              </View>
              <Text style={{ fontSize: "9px" }}> {project.Link} </Text>
              {project.Description.map((element, index) => {
                return <Text style={styles.listItem}>- {element}</Text>;
              })}
            </View>
          );
        })}
      </View>
      <View>
        <Text style={styles.subHeading}>ACHIEVEMENTS </Text>
        <View style={styles.divider}></View>
        {user.achievments.map((achievement, index) => {
          return <Text style={styles.listItem}>- {achievement} </Text>;
        })}
      </View>
    </Page>
  </Document>
);

const Resume = () => (
  <>
    <PDFViewer style={{ width: "50%", height: "100vh" }}>
      <MyDocument />
    </PDFViewer>
  </>
);

export default Resume;
