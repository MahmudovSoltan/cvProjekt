import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import "./MainCvLeft.css";

const MainCvRight = ({ cvShow }) => {
  return (
    <>
      {cvShow ? (
        <div className="main_right_container">
          <div style={{ padding: "20px" }}>
            <div className="main_right_right">
              <div>
                <h2 className="main_right_right_title">{cvShow?.fullName}</h2>
                <p>Email: {cvShow?.email}</p>
                <p>Phone: {cvShow?.phone}</p>
              </div>
              <div>
                <img src={cvShow?.imgUrl} alt="Profile" />
              </div>
            </div>
            <div>
              <h3>Experience:</h3>
              <p>{cvShow?.experience}</p>
            </div>
          </div>

          {/* PDF yükləmə linki */}
          <PDFDownloadLink
            document={<MyDocument cvShow={cvShow} />}
            fileName={`${cvShow?.fullName || "CV"}.pdf`}
          >
            {({ loading }) => (
              <button className="downolad_btn">
                {loading ? "PDF hazırlanır..." : "Download"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      ) : (
        <div className="main_right_container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          Submit the form to preview your CV here.
        </div>
      )}
    </>
  );
};

export default MainCvRight;