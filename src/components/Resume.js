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

const Resume = (props) => {
  const user = props.user;

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
          {user.education[0].school.length > 0 && (
            <>
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
                      {/* {console.log(element.schoolStartDate.$y)} {" "} */}
                      {element.schoolStartDate.$y}-{element.schoolEndDate.$y}{" "}
                    </Text>
                  </View>
                );
              })}
            </>
          )}
        </View>
        {user.skills[0].length > 0 && (
          <View>
            <Text style={styles.subHeading}>SKILLS</Text>
            <View style={styles.divider}></View>
            {user.skills.map((element, index) => {
              return <Text style={styles.listItem}> - {element}</Text>;
            })}
          </View>
        )}
        {user.workExperiences[0].company.length > 0 && (
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
                  {element.description.map((element, index) => {
                    return <Text style={styles.listItem}>- {element}</Text>;
                  })}
                </View>
              );
            })}
          </View>
        )}
        {user.projects[0].name.length > 0 && (
          <View>
            <Text style={styles.subHeading}>PROJECTS</Text>
            <View style={styles.divider}></View>
            {user.projects.map((project, index) => {
              return (
                <View style={{ marginBottom: "6px" }}>
                  <View style={styles.exp}>
                    <Text style={styles.bold}>{project.name}</Text>
                    <Text>
                      {" "}
                      {project.startDate} - {project.endDate}{" "}
                    </Text>
                  </View>
                  <Text style={{ fontSize: "9px" }}> {project.link} </Text>
                  {project.description.map((element, index) => {
                    return <Text style={styles.listItem}>- {element}</Text>;
                  })}
                </View>
              );
            })}
          </View>
        )}
        {user.achievements[0].length > 0 && (
          <View>
            <Text style={styles.subHeading}>ACHIEVEMENTS </Text>
            <View style={styles.divider}></View>
            {user.achievements.map((achievement, index) => {
              return <Text style={styles.listItem}>- {achievement} </Text>;
            })}
          </View>
        )}
      </Page>
    </Document>
  );

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <MyDocument />
      </PDFViewer>
    </>
  );
};

export default Resume;
