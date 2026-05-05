import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    borderBottom: 2,
    borderBottomColor: '#3d4d6f',
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d4d6f',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3d4d6f',
    marginBottom: 8,
    borderBottom: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 3,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    width: '60%',
    color: '#555',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 9,
    color: '#999',
    borderTop: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
});

interface ApplicationData {
  surname: string;
  givenName: string;
  otherNames: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  nationalId: string;
  placeOfBirth: string;
  email: string;
  phone: string;
  alternativePhone: string;
  postalAddress: string;
  district: string;
  village: string;
  programmeType: string;
  programmeChoice1: string;
  programmeChoice2: string;
  studyMode: string;
  intakeSession: string;
  olevelSchool: string;
  olevelYear: string;
  olevelGrade: string;
  alevelSchool: string;
  alevelYear: string;
  alevelGrade: string;
  otherQualifications: Array<{
    title: string;
    institution: string;
    year: string;
  }>;
  currentEmployment: string;
  employer: string;
  position: string;
  yearsOfExperience: string;
  kinName: string;
  kinRelationship: string;
  kinPhone: string;
  kinAddress: string;
  disabilities: string;
  medicalConditions: string;
  howDidYouHear: string;
}

export const ApplicationPDF = ({ data }: { data: ApplicationData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Luigi Giussani Institute of Higher Education</Text>
        <Text style={styles.subtitle}>Application Form</Text>
        <Text style={{ fontSize: 10, marginTop: 5 }}>
          Submitted on: {new Date().toLocaleDateString('en-GB')}
        </Text>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>
            {data.surname} {data.givenName} {data.otherNames}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{data.dateOfBirth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{data.gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nationality:</Text>
          <Text style={styles.value}>{data.nationality}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>National ID/Passport:</Text>
          <Text style={styles.value}>{data.nationalId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Place of Birth:</Text>
          <Text style={styles.value}>{data.placeOfBirth}</Text>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{data.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{data.phone}</Text>
        </View>
        {data.alternativePhone && (
          <View style={styles.row}>
            <Text style={styles.label}>Alternative Phone:</Text>
            <Text style={styles.value}>{data.alternativePhone}</Text>
          </View>
        )}
        <View style={styles.row}>
          <Text style={styles.label}>Postal Address:</Text>
          <Text style={styles.value}>{data.postalAddress}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>District:</Text>
          <Text style={styles.value}>{data.district}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Village/Town:</Text>
          <Text style={styles.value}>{data.village}</Text>
        </View>
      </View>

      {/* Programme Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Programme Selection</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Programme Type:</Text>
          <Text style={styles.value}>{data.programmeType}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>First Choice:</Text>
          <Text style={styles.value}>{data.programmeChoice1}</Text>
        </View>
        {data.programmeChoice2 && (
          <View style={styles.row}>
            <Text style={styles.label}>Second Choice:</Text>
            <Text style={styles.value}>{data.programmeChoice2}</Text>
          </View>
        )}
        <View style={styles.row}>
          <Text style={styles.label}>Study Mode:</Text>
          <Text style={styles.value}>{data.studyMode}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Intake Session:</Text>
          <Text style={styles.value}>{data.intakeSession}</Text>
        </View>
      </View>

      {/* Educational Background */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educational Background</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 4 }}>O-Level</Text>
        <View style={styles.row}>
          <Text style={styles.label}>School:</Text>
          <Text style={styles.value}>{data.olevelSchool}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.value}>{data.olevelYear}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Grade:</Text>
          <Text style={styles.value}>{data.olevelGrade}</Text>
        </View>

        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 8, marginBottom: 4 }}>A-Level</Text>
        <View style={styles.row}>
          <Text style={styles.label}>School:</Text>
          <Text style={styles.value}>{data.alevelSchool}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Year:</Text>
          <Text style={styles.value}>{data.alevelYear}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Grade:</Text>
          <Text style={styles.value}>{data.alevelGrade}</Text>
        </View>

        {data.otherQualifications.length > 0 && (
          <>
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 8, marginBottom: 4 }}>
              Other Qualifications
            </Text>
            {data.otherQualifications.map((qual, index) => (
              <View key={index} style={{ marginBottom: 4 }}>
                <Text style={{ fontSize: 10 }}>
                  • {qual.title} - {qual.institution} ({qual.year})
                </Text>
              </View>
            ))}
          </>
        )}
      </View>

      {/* Employment Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Employment Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Currently Employed:</Text>
          <Text style={styles.value}>{data.currentEmployment === 'yes' ? 'Yes' : 'No'}</Text>
        </View>
        {data.currentEmployment === 'yes' && (
          <>
            <View style={styles.row}>
              <Text style={styles.label}>Employer:</Text>
              <Text style={styles.value}>{data.employer}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Position:</Text>
              <Text style={styles.value}>{data.position}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Years of Experience:</Text>
              <Text style={styles.value}>{data.yearsOfExperience}</Text>
            </View>
          </>
        )}
      </View>

      {/* Next of Kin */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Next of Kin</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{data.kinName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Relationship:</Text>
          <Text style={styles.value}>{data.kinRelationship}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{data.kinPhone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{data.kinAddress}</Text>
        </View>
      </View>

      {/* Additional Information */}
      {(data.disabilities || data.medicalConditions || data.howDidYouHear) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          {data.disabilities && (
            <View style={styles.row}>
              <Text style={styles.label}>Disabilities:</Text>
              <Text style={styles.value}>{data.disabilities}</Text>
            </View>
          )}
          {data.medicalConditions && (
            <View style={styles.row}>
              <Text style={styles.label}>Medical Conditions:</Text>
              <Text style={styles.value}>{data.medicalConditions}</Text>
            </View>
          )}
          {data.howDidYouHear && (
            <View style={styles.row}>
              <Text style={styles.label}>How did you hear about us:</Text>
              <Text style={styles.value}>{data.howDidYouHear}</Text>
            </View>
          )}
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Luigi Giussani Institute of Higher Education</Text>
        <Text>Sentamu Road 822-829, Luzira | (+256) 764 078712 | info@lgihe.ac.ug</Text>
      </View>
    </Page>
  </Document>
);
