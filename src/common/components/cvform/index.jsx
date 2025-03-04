import React, { useState } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import "./cvform.css";
import { initialValidation } from "../../formValidate/validation";
import Swal from "sweetalert2";
let initialValue = {
  fullName: "",
  email: "",
  phone: "",
  imgUrl: "",
  experience: "",
};
const CvForm = ({ setCvData, cvData, setCvShow }) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initialValue,
    validationSchema: initialValidation,
    onSubmit: handleSave,
  });
  const [userData, setUserData] = useState(initialValue);

  function handleSave(values, options) {
    console.log(values);
    options.resetForm();
    const newUser = {
      ...values,
      id: uuidv4(),
    };
    const newData = [...cvData, newUser];
    setCvData(newData);
    setUserData(initialValue);
    setCvShow(values);
    localStorage.setItem("user", JSON.stringify(newData));
    Swal.fire("Success", "Add cv", "success");
  }

  return (
    <div className="cvform_container">
      <h1 className="cv_title">CV Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="error-message"> {errors.fullName}</div>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-message"> {errors.email}</div>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error-message"> {errors.phone}</div>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Image URL"
            name="imgUrl"
            value={values.imgUrl}
            onChange={handleChange}
          />
                  {errors.imgUrl && <div className="error-message"> {errors.imgUrl}</div>}
        </div>
        <div>
          <textarea
            placeholder="Experience"
            name="experience"
            value={values.experience}
            onChange={handleChange}
          />
                  {errors.experience && <div className="error-message"> {errors.experience}</div>}
        </div>
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CvForm;
