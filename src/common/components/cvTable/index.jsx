
import { useState } from "react";
import DeleteModal from "../modal/DeleteModal";
import "./table.css";
const CvTable = ({cvData,setCvShow,deleteCv}) => {
 const [showModal,setShowModal]=useState(false)
 const [id,setid]= useState(null)    
 function handleDelete(id) {
  setShowModal(true)
  setid(id)
 }
  function closeModal (){
    setShowModal(false)
  }
  console.log(cvData,id);
  
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            cvData?.map((item,i)=>(
              <tr key={i}>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"15px",  }}>
                   <img src={item.imgUrl} style={{width: "40px",height:"40px"}} alt="" />
                  </div>
              </td>
              <td>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"15px"}}>
                  <button id="id" className="show_btn" onClick={()=>setCvShow(item)}>Show CV</button>
                  <button className="delete_btn" onClick={()=>handleDelete(item.id)}>Delete CV</button>
                </div>
              </td>
            </tr>
            ))
          }
       
        </tbody>
      </table>{
        showModal && <DeleteModal deleteCv={deleteCv} id={id} closeModal={closeModal} setShowModal={setShowModal}/>
      }
     
    </div>
  );
};

export default CvTable;
