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
    padding: 2,
    fontSize: "11px",
    fontWeight: "300",
    backgroundColor: "white",
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  split: {
    flexDirection: 'row',
    width: '100%',
    height: "100%",
    
    backgroundColor: '#ccc',
  },
  box: {
    paddingTop: 15,
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },

  box2:{
    justifyContent: 'flex-start',
    paddingTop:128,
    paddingLeft: 30,
  },
  fl1: {
    flex: 1.2,
    backgroundColor: '#323B4C',

  },
  fl2: {
    flex: 2,
    backgroundColor: 'white',
  },
  text1: {
    
    color: 'white',
  },
  text2: {
    color: '#323B4C',
    fontSize: 20,

  },
  fonthead: {
    fontSize: 35,
    fontWeight: "600"
  },
  horizontalLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#323B4C',
    width: '98%',
    marginTop: 5,
    
  },
  horizontalLine2: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: '100%',
    marginTop: 1,
    marginLeft: 1,
    paddingBottom: 10,
  },

  
  fontheads: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "600",
  },

  fontheadss: {
    paddingTop: "10px",
    fontSize: 15,
    fontWeight: "600"
  },
  
  body: {
    fontSize : 11,
    fontWeight: "380",
  },

  padt:{
    paddingTop: "15px",
  }

});

const MyDocument = ({ user }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.split}>
          <View style={[styles.box2, styles.fl1]}>
            {/* Render Contact information */}
            {user.phone && user.email && user.address && user.city && user.state && user.country && (
              <>
                <Text style={styles.text1}>
                  <Text style={styles.fontheads}>
                    Contact
                  </Text>
                </Text>
                <View style={styles.horizontalLine2}/>
                <Text style={[styles.fontheadss,styles.text1]}>
                  Phone
                </Text>
                <Text style={[styles.body,styles.text1]}>
                  {user.phone}
                </Text>
                <Text style={[styles.fontheadss,styles.text1]}>
                  Email
                </Text>
                <Text style={[styles.body,styles.text1]}>
                  {user.email}
                </Text>
                <Text style={[styles.fontheadss,styles.text1]}>
                  Address
                </Text>
                <Text style={[styles.body,styles.text1]}>
                  {user.address}, {user.city}, {user.state}, {user.country}
                </Text>
              </>
            )}

            {/* Render Education */}
            {user.education[0].school.length > 0 && (
              <>
                <View style={styles.padt}>
                  <Text style={styles.text1}>
                    <Text style={[styles.fontheads]}>
                      Education
                    </Text>
                  </Text>
                </View>
                <View style={styles.horizontalLine2}/>
                {user.education.map((edu, index) => (
                  <View key={index}>
                    <Text style={[styles.fontheadss,styles.text1]}>
                      {edu.degree}
                    </Text>
                    <Text style={[styles.body,styles.text1]}>
                      {dayjs(edu.schoolStartDate).format('MMMM YYYY')} - {dayjs(edu.schoolEndDate).format('MMMM YYYY')}
                    </Text>
                    <Text style={[styles.body,styles.text1]}>
                      {edu.school}
                    </Text>
                  </View>
                ))}
              </>
            )}

            {/* Render Skills */}
            {user.skills[0].length > 0 && (
              <>
                <View style={styles.padt}>
                  <Text style={styles.text1}>
                    <Text style={[styles.fontheads]}>
                      Skills
                    </Text>
                  </Text>
                </View>
                <View style={styles.horizontalLine2}/>
                {user.skills.map((skill, index) => (
                  <Text key={index} style={[styles.fontheadss,styles.text1]}>
                    {skill}
                  </Text>
                ))}
              </>
            )}
          </View>
          <View style={[styles.box, styles.fl2]}>
            {/* Render Name */}
            <Text style={[styles.text2,styles.fonthead]}>
              {user.firstName} {user.lastName}
            </Text>
            
            {/* Render Work Experience */}
            {user.workExperiences[0].designation.length > 0 && (
              <>
                <Text style={[styles.text2,styles.fontheadss]}>
                  Experience
                </Text>
                <View style={styles.horizontalLine}/>
                {user.workExperiences.map((exp, index) => (
                  <View key={index}>
                    <Text style={[styles.text2,styles.fontheadss]}>
                      {dayjs(exp.startDate).format('MMMM YYYY')} - {dayjs(exp.endDate).format('MMMM YYYY')}
                    </Text>
                    <Text style={[styles.text2,styles.body]}>
                      {exp.company}
                    </Text>
                    <Text style={[styles.text2,styles.fontheadss]}>
                      {exp.designation}
                    </Text>
                    {exp.description.map((desc, i) => (
                      <Text key={i} style={[styles.text2,styles.body]}>
                        {desc}
                      </Text>
                    ))}
                  </View>
                ))}
              </>
            )}

            {/* Render Projects */}
            {user.projects[0].name.length > 0 && (
              <>
                <Text style={[styles.text2,styles.fontheadss]}>
                  Projects
                </Text>
                <View style={styles.horizontalLine}/>
                {user.projects.map((project, index) => (
                  <View key={index}>
                    <Text style={[styles.text2,styles.fontheadss]}>
                      {dayjs(project.startDate).format('MMMM YYYY')} - {dayjs(project.endDate).format('MMMM YYYY')}
                    </Text>
                    <Text style={[styles.text2,styles.body]}>
                      {project.name}
                    </Text>
                    <Text style={[styles.text2,styles.body]}>
                      {project.link}
                    </Text>
                    {project.description.map((desc, i) => (
                      <Text key={i} style={[styles.text2,styles.body]}>
                        {desc}
                      </Text>
                    ))}
                  </View>
                ))}
              </>
            )}

            {/* Render Achievements */}
            {user.achievements[0].length > 0 && (
              <>
                <Text style={[styles.text2, styles.fontheadss]}>
                  Achievements
                </Text>
                <View style={styles.horizontalLine} />
                {user.achievements.map((achievement, index) => (
                  <Text key={index} style={[styles.text2, styles.body]}>
                    {achievement}
                  </Text>
                ))}
              </>
            )}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
const Resume = ({setPdfData ,user}) => (
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
);

export default Resume;
