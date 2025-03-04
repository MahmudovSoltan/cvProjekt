import * as Yup from "yup";
const phoneRegex = /^(?:\+994|0)(50|51|55|70|77|99|10)\d{7}$/;
// const imageUrlRegex = /(https?:\/\/.*\.(?:jpg|jpeg|png|gif|webp))$/i;
export const initialValidation = Yup.object({
  fullName: Yup.string()
  .min(4,"Must be more 4 characters")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone:Yup.string().matches(phoneRegex, "Please enter a valid Azerbaijani number.")
    .required("Phone number is required"),
    imgUrl:Yup.string().required("Required")
    .required("Image URL is required."),
    experience:Yup.string().required("Required")

});
