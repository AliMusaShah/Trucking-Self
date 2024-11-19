import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

export const signUpSchema = Yup.object({
  full_name: Yup.string()
    .min(2, "alteast 2 character")
    .required("First name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
export const resetPasswordSchema = Yup.object({
  new_password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export const ProfileSchema = Yup.object().shape({
  full_name: Yup.string().required(" Name is required"),
  title: Yup.string().required("title is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone_number: Yup.string()
    .matches(/^[0-9+ ]*$/, "Phone number is not valid")
    .required("Phone is required"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid gender")
    .required("Gender is required"),
  date_of_birth: Yup.date()
    .max(new Date(), "Date of Birth cannot be in the future")
    .required("Date of Birth is required"),
  country: Yup.string().required("Country is required"),
  company: Yup.string().required("company is required"),
  city: Yup.string().required("City is required"),
});
export const PasswordUpdateSchema = Yup.object().shape({
  old_password: Yup.string().required("Old Password is required"),
  new_password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export const AddNewSalesSchema = Yup.object().shape({
  areaName: Yup.string().required("Area Name is required"),
  notes: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(200, "Note Cant be More than 200 characters")
    .required("Notes is required"),
});
export const AddNewContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  title: Yup.string().required("Title is required"),
  email_1: Yup.string().required("Email is required"),
  email_2: Yup.string().required("Email is required"),
  phone_1: Yup.number().required("Phone_Number is required"),
  phone_2: Yup.number().required("Phone_Number is required"),
  linkedin: Yup.string().required("Phone_Number is required"),
});
export const MeetingDetailsSchema = Yup.object().shape({
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
  linkedin: Yup.string()
    // .url("Must be a valid URL")
    .required("LinkedIn profile is required"),
  file: Yup.mixed()
    .required("File is required")
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        value &&
        ["application/pdf", "image/jpeg", "image/png"].includes(value.type)
    ),
});
export const AddNewEventSchema = Yup.object().shape({
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
  company: Yup.string().required("Company selection is required"),
  contact: Yup.string().required("Company selection is required"),
  notes: Yup.string()
    .min(6, "Note must be at least 6 characters")
    .max(200, "Note Cant be More than 200 characters")
    .required("Notes is required"),
});
