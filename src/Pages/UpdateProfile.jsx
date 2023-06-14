import {
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { toast } from "react-toastify";
import userService from "../service/user.service";
import { useDispatch,useSelector } from "react-redux";
import { setUser } from "../state/slice/authSlice";
import shared from "../utils/shared";


function UpdateProfile() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.user);

  const initialValueState = {
    email: authData.email,
    firstName: authData.firstName,
    lastName: authData.lastName,
    newPassword: "",
    confirmPassword: "",
  };
  
  const [updatePassword, setUpdatePassword] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    newPassword: Yup.string().min(5, "Minimum 5 character is required"),
    confirmPassword: updatePassword
      ? Yup.string()
          .required("Must required")
          .oneOf([Yup.ref("newPassword")], "Password does not match")
      : Yup.string().oneOf([Yup.ref("newPassword")], "Password does not match"),
  });

  const onSubmit = async (values) => {
    const password = values.newPassword ? values.newPassword : authData.password;
    delete values.confirmPassword;
    delete values.newPassword;
    const updatedData = {
      ...authData,
      ...values,
      password,
    };
    const res = await userService.updateProfile(updatedData);
    if (res) {
      dispatch(setUser(res));
      toast.success(shared.messages.UPDATED_SUCCESS);
      navigate("/");
    }
  };

  return (
    <div className="">
    <Typography
    variant="h4"
    sx={{
      marginTop: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      color: "#474747",
    }}
  >
    Update-Profile
  </Typography>
  <center>
          <hr
            style={{
              background: "red",
              color: "red",
              borderColor: "red",
              height: "4px",
              marginInline: "30px",
              width: "200px",
            }}
          />
        </center>
  
        <Formik
          initialValues={initialValueState}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validator={() => ({})}
        >
          {({
            values,
            errors,touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <>
              <form action="" onSubmit={handleSubmit} className="flex-1 ml-40 mr-40">
                <div className="grid grid-cols-2 gap-5 mt-5 ">
                <FormControl fullWidth>
                <label>First Name*</label>
                <TextField
                  size="small"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  sx={{ height: "40px" }}
                />
                <div className="text-red-600">
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
              </FormControl>
              <FormControl fullWidth>
                <label>Last Name*</label>
                <TextField
                  size="small"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  sx={{ height: "40px" }}
                />
                <div className="text-red-600">
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
              </FormControl>
              <FormControl fullWidth>
                <label>Email Address*</label>
                <TextField
                  size="small"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  sx={{ height: "40px" }}
                />
                <div className="text-red-600">
                  {errors.email && touched.email && errors.email}
                </div>
              </FormControl>
              <FormControl fullWidth>
                <label>New Password</label>
                <TextField
                  type="password"
                  name="newPassword"
                  size="small"
                  onChange={(e) => {
                    e.target.value !== ""
                      ? setUpdatePassword(true)
                      : setUpdatePassword(false);
                      handleChange(e);
                    }}
                  
                  value={values.newPassword}
                />
                <div className="text-red-600">
                  {errors.newPassword && touched.newPassword && errors.newPassword}
                </div>
              </FormControl>
              <FormControl fullWidth>
                <label>Confirm Password*</label>
                <TextField
                  type="confirmPassword"
                  name="confirmPassword"
                  size="small"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <div className="text-red-600">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </div>
              </FormControl>
                </div>
                <div className="mt-16">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    color: "white",
                    backgroundColor: "#80BF32",
                    "&:hover": {
                      backgroundColor: "#80BF32",
                    },
                    marginLeft: "8px",
                    width: "100px",
                  }}
                  disableElevation
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate("/");
                  }}
                  sx={{
                    color: "white",
                    backgroundColor: "#f14d54",
                    "&:hover": {
                      backgroundColor: "#f14d54",
                    },
                    marginLeft: "8px",
                    width: "100px",
                  }}
                >
                  Cancel
                </Button>
              </div>
                
              </form>
            </>
          )}
        </Formik>
</div>
  );
}

export default UpdateProfile;