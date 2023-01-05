import React, { useState } from "react";
import { AdminLoginStyle } from "../AdminLoginStyle";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  handlesendOTP,
  handleverifyOTP,
  handleSubmit,
} from "../../../utils/forgetPassword";

function ForgetPassword() {
  const [email, setemail] = useState("");
  const [otp, setopt] = useState("");
  const [status, setstatus] = useState("");
  const [toggle, settoggle] = useState("");
  const [newpass, setnewpass] = useState("");
  const [reentred, setreentred] = useState("");

  const Navigate = useNavigate();
  return (
    <>
      <Box sx={AdminLoginStyle.LoginContainer}>
        <Card sx={AdminLoginStyle.loginCardStyle}>
        <Box sx={AdminLoginStyle.loginImageHolder}>
            <img
              src="images/AdminLoginBack.jpg"
              alt="admin_login_image"
              style={AdminLoginStyle.loginImageStyle}
            />
          </Box>
          <Box sx={AdminLoginStyle.loginPageHolder}>
          <img
              src="/images/WordleLogo.svg"
              alt="logo"
              style={AdminLoginStyle.logoStyle}
            />
            <Box sx={AdminLoginStyle.HeadingBoxStyle}>
              <Typography sx={AdminLoginStyle.Headingtext} variant="h5">
                Forget Pasword
              </Typography>
            </Box>
            <Box sx={AdminLoginStyle.fieldHolderStyle}>
              <Typography sx={AdminLoginStyle.labelStyle}>Email</Typography>
              <TextField
                size="small"
                sx={AdminLoginStyle.textfieldStyle}
                placeholder="Enter Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              {toggle === "OTP" && (
                <>
                  <Typography sx={AdminLoginStyle.labelStyle}>
                    Enter OPT
                  </Typography>
                  <TextField
                    size="small"
                    sx={AdminLoginStyle.textfieldStyle}
                    placeholder="Enter OTP.."
                    onChange={(e) => {
                      setopt(e.target.value);
                    }}
                  />
                </>
              )}
              {toggle === "change" && (
                <>
                  <Typography sx={AdminLoginStyle.labelStyle}>
                    Enter New Pasword
                  </Typography>
                  <TextField
                    size="small"
                    sx={AdminLoginStyle.textfieldStyle}
                    placeholder="Enter new Password"
                    onChange={(e) => {
                      setnewpass(e.target.value);
                    }}
                  />
                  <Typography sx={AdminLoginStyle.labelStyle}>
                    Re-Enter New Pasword
                  </Typography>
                  <TextField
                    size="small"
                    sx={AdminLoginStyle.textfieldStyle}
                    placeholder="Re-Enter new Password"
                    onChange={(e) => {
                      setreentred(e.target.value);
                    }}
                  />
                </>
              )}
              <Typography
                sx={AdminLoginStyle.labelStyle}
                color={status === "Loggin Success" ? "success" : "error"}
              >
                {status}
              </Typography>
            </Box>
            <Box sx={AdminLoginStyle.loginBtnHolderStyle}>
              <Button
                variant="contained"
                color="success"
                sx={AdminLoginStyle.loginBtnStyle}
                onClick={() => {
                  otp !== "" && toggle !== "change"
                    ? handleverifyOTP(otp, settoggle, setstatus)
                    : toggle === "change"
                    ? handleSubmit(
                        newpass,
                        reentred,
                        email,
                        setstatus,
                        Navigate
                      )
                    : handlesendOTP(settoggle, setstatus, email);
                }}
              >
                {toggle === "OTP" && toggle !== "change"
                  ? "Verify"
                  : toggle === "change"
                  ? "Submit"
                  : "Send OTP"}
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default ForgetPassword;
