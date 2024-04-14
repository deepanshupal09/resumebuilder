import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import "react-pdf/dist/esm/Page/TextLayer.css";
import dayjs from "dayjs";

const Resume = React.memo((props) => {
  const user = props.user;
  const setPdfData = props.setPdfData;

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
      fontSize: 11,
      fontWeight: 300,
    },
    heading: {
      textAlign: "center",
      fontWeight: 500,
      textTransform: "uppercase",
      fontSize: 20,
    },
    contact: {
      textAlign: "center",
      fontSize: 11,
    },
    subHeading: {
      fontWeight: 500,
      fontSize: 12,
      marginTop: 6,
    },
    divider: {
      height: 0.5,
      backgroundColor: "black",
      width: "100%",
      marginVertical: 8,
    },
    bold: {
      fontWeight: 400,
    },
    flex: {
      display: "flex",
      flexDirection: "row",
    },
    education: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 6,
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
      fontSize: 9,
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 10,
      marginVertical: 1,
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
                      {dayjs(element.schoolStartDate).format('MMMM YYYY')} - {dayjs(element.schoolEndDate).format('MMMM YYYY')}{" "}
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
              return <Text style={styles.listItem}>{element}</Text>;
            })}
          </View>
        )}
        {user.workExperiences[0].company.length > 0 && (
          <View>
            <Text style={styles.subHeading}>EXPERIENCE</Text>
            <View style={styles.divider}></View>
            {user.workExperiences.map((element, index) => {
              return (
                <View style={{ marginBottom: 6 }}>
                  <View style={styles.exp}>
                    <Text style={styles.bold}> {element.designation} </Text>
                    <Text>
                    {dayjs(element.startDate).format('MMMM YYYY')} - {element.working ? 'Present' : dayjs(element.endDate).format('MMMM YYYY')}
                    </Text>
                  </View>
                  <View style={styles.expSub}>
                    <Text style={styles.bold}> {element.company} </Text>
                    <Text>
                      {element.workCity}, {element.workCountry}
                    </Text>
                  </View>
                  {element.description.map((element, index) => {
                    return <Text style={styles.listItem}>{element}</Text>;
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
                <View style={{ marginBottom: 6 }}>
                  <View style={styles.exp}>
                    <Text style={styles.bold}>{project.name}</Text>
                    <Text>
                      {" "}
                      {dayjs(project.startDate).format('MMMM YYYY')} - {dayjs(project.endDate).format('MMMM YYYY')}
                    </Text>
                  </View>
                  <Link src={project.link} style={{ fontSize: 9 }}>{project.link}</Link>
                  {project.description.map((element, index) => {
                    return <Text style={styles.listItem}>{element}</Text>;
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
              return <Text style={styles.listItem}>{achievement} </Text>;
            })}
          </View>
        )}
      </Page>
    </Document>
  );

  return (
    <>
      <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
        {({ blob, url, loading, error }) => {
          if (loading) return 'Loading...';
          if (error) return 'Error occurred';
          setPdfData(blob); // Set PDF data when available
        }}
      </PDFDownloadLink>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <MyDocument />
      </PDFViewer>
    </>
  );
});

export default Resume;