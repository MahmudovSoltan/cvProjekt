import React, { useState } from "react";
import CvForm from "../../components/cvform";
import MainCvRight from "../../components/cv";
import "./maincv.css";
import CvTable from "../../components/cvTable";
const MainCvPage = () => {
  let user = localStorage.getItem("user");
  const [cvData, setCvData] = useState(user ? JSON.parse(user) : []);
  const [cvShow, setCvShow] = useState();
  console.log(cvData[0], "user");
  function deleteCv(id) {
     let filterCv =  cvData.filter((item)=>item.id != id)
     setCvData(filterCv)
     localStorage.setItem("user", JSON.stringify(filterCv));
 }
  return (
    <>
      <div className="cv_container">
        <CvForm setCvData={setCvData} cvData={cvData} setCvShow={setCvShow} />
        <MainCvRight cvShow={cvShow} />
      </div>
      {cvData.length>0 && <CvTable cvData={cvData} setCvShow={setCvShow} deleteCv={deleteCv}/>}
    </>
  );
};

export default MainCvPage;
