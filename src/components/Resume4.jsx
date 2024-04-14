import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";
import "react-pdf/dist/esm/Page/TextLayer.css";
import dayjs from 'dayjs';

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
    padding: 5,
    fontSize: "11px",
    backgroundColor: "#f0f0f0",
  },

  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  split: {
    flexDirection: 'row',
    width: '100%',
    height: "100%",
  },
  box: {
    padding: 20,
    // backgroundColor: '#f8f8f8',
    marginBottom: 20,
    borderRadius: 10,
    width: '100%', // Adjusted width to take full width
  },

  box3: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  box2: {
    justifyContent: 'flex-start',
    padding: 20,
    textAlign: "justify",
    // backgroundColor: '#f8f8f8',
    marginBottom: 20,
    borderRadius: 10,
    width: '100%', // Adjusted width to take full width
  },
  fl1: {
    flex: 1.2,
  },
  fl2: {
    flex: 2,
  },
  text1: {
    color: '#222',
  },
  text2: {
    color: '#555',
    textAlign: "justify",
    fontSize: 16,
  },
  fonthead: {
    fontSize: 35,
    fontWeight: "600"
  },
  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: '100%',
    marginVertical: 10,
  },
  fontheads: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "600",
    color: '#222',
  },
  fontheadss: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: '#555',
  },
  body: {
    fontSize: 12,
    fontWeight: "normal",
    color: '#555',
  },
  padt: {
    paddingTop: 20,
  },
  box4: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  }

});

const MyDocument = ({ user }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.box4}>
          <View style={styles.box3}>
            <Text style={[styles.text2, styles.fonthead]}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={[styles.text2, styles.body]}>
              {user.address}, {user.city}, {user.state},{" "}
              {user.country}
            </Text>
            <Text style={[styles.text2, styles.body]}>
              {user.phone}
            </Text>
            <Text style={[styles.text2, styles.body]}>
              {user.email}
            </Text>
          </View>
          <View style={styles.split}>
          <View style={[styles.box, styles.fl2]}>

            {user.workExperiences[0].designation.length > 0 && (
              <>
                <Text style={[styles.text2, styles.fontheads]}>
                  Experience
                </Text>
                <View style={styles.horizontalLine} />
                {user.workExperiences.map((experience, index) => (
                  <View key={index}>
                    <Text style={[styles.text2, styles.fontheadss]}>
                      {dayjs(experience.startDate).format('MMMM YYYY')} - {dayjs(experience.endDate).format('MMMM YYYY')}
                    </Text>
                    <Text style={[styles.text2, styles.body]}>
                      {experience.company}
                    </Text>
                    <Text style={[styles.text2, styles.fontheadss]}>
                      {experience.designation}
                    </Text>
                    {experience.description.map((desc, idx) => (
                      <Text key={idx} style={[styles.text2, styles.body]}>
                        {desc}
                      </Text>
                    ))}
                  </View>
                ))}
              </>
            )}

            {user.projects[0].name.length > 0 && (
              <>
                <Text style={[styles.text2, styles.fontheads]}>
                  Projects
                </Text>
                <View style={styles.horizontalLine} />
                {user.projects.map((project, index) => (
                  <View key={index}>
                    <Text style={[styles.text2, styles.fontheadss]}>
                      {dayjs(project.startDate).format('MMMM YYYY')} - {dayjs(project.endDate).format('MMMM YYYY')}
                    </Text>
                    <Text style={[styles.text2, styles.body]}>
                      {project.name}
                    </Text>
                    <Text style={[styles.text2, styles.body]}>
                      {project.link}
                    </Text>
                    {project.description.map((desc, idx) => (
                      <Text key={idx} style={[styles.text2, styles.body]}>
                        {desc}
                      </Text>
                    ))}
                  </View>
                ))}

              </>
            )}

          </View>
          <View style={[styles.box2, styles.fl1]}>
            {user.education[0].school.length > 0 && (
              <>
                <View style={styles.padt}>
                  <Text style={styles.text1}>
                    <Text style={[styles.fontheads]}>Education</Text>
                  </Text>
                </View>
                <View style={styles.horizontalLine} />
                {user.education.map((edu, index) => (
                  <View key={index}>
                    <Text style={[styles.fontheadss, styles.text1]}>
                      {edu.degree}
                    </Text>
                    <Text style={[styles.text2, styles.body]}>
                      {dayjs(edu.schoolStartDate).format('MMMM YYYY')} - {dayjs(edu.schoolEndDate).format('MMMM YYYY')}
                    </Text>
                    <Text style={[styles.text2, styles.body]}>{edu.school}</Text>
                  </View>
                ))}
              </>
            )}

            {user.skills[0].length > 0 && (
              <>
                <View style={styles.padt}>
                  <Text style={styles.text1}>
                    <Text style={styles.fontheads}>Skills</Text>
                  </Text>
                </View>
                <View style={styles.horizontalLine} />
                {user.skills.map((skill, index) => (
                  <Text key={index} style={[styles.text2, styles.body]}>
                    {skill}
                  </Text>
                ))}
              </>
            )}

            {user.achievements[0].length > 0 && (
              <>
                <View style={styles.padt}>
                  <Text style={styles.text1}>
                    <Text style={styles.fontheads}>Achievements</Text>
                  </Text>
                </View>
                <View style={styles.horizontalLine} />
                {user.achievements.map((ach, index) => (
                  <Text key={index} style={[styles.text2, styles.body]}>
                    {ach}
                  </Text>
                ))}
              </>
            )}

          </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const Resume = React.memo(({ user, setPdfData }) => (
  <>
    <PDFDownloadLink document={<MyDocument user={user} />} fileName="resume.pdf">
      {({ blob, url, loading, error }) => {
        if (loading) return 'Loading...';
        if (error) return 'Error occurred';
        setPdfData(blob); // Set PDF data when available
      }}
    </PDFDownloadLink>
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <MyDocument user={user} />
    </PDFViewer>
  </>
));

export default Resume;
