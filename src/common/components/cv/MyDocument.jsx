import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// PDF üçün stil təyinləri
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

// PDF sənədini təyin edən komponent
const MyDocument = ({ cvShow }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
          {cvShow?.imgUrl && <Image src={cvShow.imgUrl} style={styles.image} />}
          <Text style={styles.title}>
            {cvShow?.fullName || "CV Məlumatları"}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.text}>
              Email: {cvShow?.email || "Email yoxdur"}
            </Text>
            <Text style={styles.text}>
              Telefon: {cvShow?.phone || "Telefon yoxdur"}
            </Text>
          </View>
        </View>
        <Text style={styles.tecrube}>Experience: {cvShow?.experience}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
