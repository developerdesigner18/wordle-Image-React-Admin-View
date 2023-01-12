import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { AdminProfileUpdateStyle } from "./AdminProfileUpdateStyle";
import CancelIcon from "@mui/icons-material/Cancel";
function AdminProfileUpdate({ handleCloseAdminProfile }) {
  // STATE FOR IMAGE INPUT
  const [profileImage, setprofileImage] = useState();
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
            F
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
            {profileImage ? (
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
            ></TextField>
            <Typography sx={AdminProfileUpdateStyle.textFieldLabelStyle}>
              Enter User Name
            </Typography>
            <TextField
              sx={AdminProfileUpdateStyle.textFieldStyle}
              size="small"
            ></TextField>
            <Typography sx={AdminProfileUpdateStyle.textFieldLabelStyle}>
              Enter Password to Continue
            </Typography>
            <TextField
              sx={AdminProfileUpdateStyle.textFieldStyle}
              size="small"
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
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AdminProfileUpdate;
