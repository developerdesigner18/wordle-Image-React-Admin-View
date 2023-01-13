import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { AdminProfileUpdateStyle } from "./AdminProfileUpdateStyle";
import CancelIcon from "@mui/icons-material/Cancel";
import updateAdminProfile from "../../../utils/updateAdminProfile";
function AdminProfileUpdate({
  handleCloseAdminProfile,
  setdataFetchingToggle,
  dataFetchingToggle,
  adminData,
}) {
  // STATE FOR IMAGE INPUT
  const [profileImage, setprofileImage] = useState("");
  // STATE FOR OTHER INFO
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // UPDATATION STATUS
  const [status, setstatus] = useState("");

  function handleUpdate() {
    let adminUpdateFormData = new FormData();
    email !== "" && adminUpdateFormData.append("email", email);
    username !== "" && adminUpdateFormData.append("username", username);
    password !== "" && adminUpdateFormData.append("password", password);
    profileImage !== "" &&
      adminUpdateFormData.append("profileImage", profileImage);
    updateAdminProfile(adminUpdateFormData)
      .then((message) => {
        setstatus(message);
        setdataFetchingToggle(!dataFetchingToggle);
        handleCloseAdminProfile();
      })
      .catch((err) => {
        setstatus(err?.response?.data?.msg);
      });
  }

  return (
    <>
      <Box
        sx={
          localStorage.getItem("admin-theme") === "dark"
            ? AdminProfileUpdateStyle.DarkAdminProfileModelStyle
            : AdminProfileUpdateStyle.LightAdminProfileModelStyle
        }
      >
        <Box sx={AdminProfileUpdateStyle.closeBtnBoxStyle}>
          <CancelIcon
            onClick={handleCloseAdminProfile}
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AdminProfileUpdateStyle.DarkcloseBtnBoxStyle
                : AdminProfileUpdateStyle.closeIcon
            }
          />
        </Box>
        <Box sx={AdminProfileUpdateStyle.headingBoxStyle}>
          <Typography
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AdminProfileUpdateStyle.DarkHeadingTextStyle
                : AdminProfileUpdateStyle.headingTextStyle
            }
            variant="h6"
          >
            UPDATE ADMIN PROFILE
          </Typography>
        </Box>
        <Box sx={AdminProfileUpdateStyle.updateContentStyle}>
          <Box sx={AdminProfileUpdateStyle.imageUpdateHolder}>
            {adminData?.profile_img ? (
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/static/${adminData?.profile_img}`}
                alt="profile"
                style={AdminProfileUpdateStyle.profileImgStyle}
              />
            ) : profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="profile"
                style={AdminProfileUpdateStyle.profileImgStyle}
              />
            ) : (
              <img
                src="images/UserDemo.svg"
                alt="profile"
                style={AdminProfileUpdateStyle.profileImgStyle}
              />
            )}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="admin-profile"
              onChange={(e) => {
                setprofileImage(e.target.files[0]);
              }}
            />
            <label htmlFor="admin-profile">
              <Button
                variant="contained"
                color="success"
                component="span"
                style={AdminProfileUpdateStyle.uploadBtnStyle}
              >
                Upload
              </Button>
            </label>
          </Box>
          <Box sx={AdminProfileUpdateStyle.detailHolderStyle}>
            <Typography sx={AdminProfileUpdateStyle.textFieldLabelStyle}>
              Enter Email
            </Typography>
            <TextField
              sx={AdminProfileUpdateStyle.textFieldStyle}
              size="small"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder={adminData ? `${adminData?.email}` : "Enter Email"}
            ></TextField>
            <Typography sx={AdminProfileUpdateStyle.textFieldLabelStyle}>
              Enter User Name
            </Typography>
            <TextField
              sx={AdminProfileUpdateStyle.textFieldStyle}
              size="small"
              onChange={(e) => {
                setusername(e.target.value);
              }}
              placeholder={
                adminData ? `${adminData?.username}` : "Enter Username"
              }
            ></TextField>
            <Typography sx={AdminProfileUpdateStyle.textFieldLabelStyle}>
              Enter Password to Continue
            </Typography>
            <TextField
              sx={AdminProfileUpdateStyle.textFieldStyle}
              size="small"
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></TextField>

            <Typography sx={AdminProfileUpdateStyle.passwordChangeLinkStyle}>
              Want to change Password? Click here
            </Typography>
          </Box>
          <Box sx={AdminProfileUpdateStyle.submitButtonHolderStyle}>
            <Button
              variant="contained"
              color="error"
              sx={AdminProfileUpdateStyle.generalButtonStyle}
              onClick={handleCloseAdminProfile}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={AdminProfileUpdateStyle.generalButtonStyle}
              onClick={handleUpdate}
            >
              Submit
            </Button>
          </Box>
          <Typography sx={{ textAlign: "center", marginTop: "5px" }}>
            {status}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default AdminProfileUpdate;
