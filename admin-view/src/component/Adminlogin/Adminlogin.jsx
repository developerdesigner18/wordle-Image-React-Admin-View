import React, { useState } from "react";
import { AdminLoginStyle } from "./AdminLoginStyle";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Adminlogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginStatus, setloginstatus] = useState("");

  const Navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
        email: email.trim(),
        password: password,
      })
      .then((response) => {
        setloginstatus(response.data.msg);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        Navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err?.response?.data?.msg);
        setloginstatus(err?.response?.data?.msg);
      });
  };

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
                Login Page
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
              <Typography sx={AdminLoginStyle.labelStyle}>Password</Typography>
              <TextField
                size="small"
                sx={AdminLoginStyle.textfieldStyle}
                placeholder="Enter Password"
                type="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <Typography
                sx={AdminLoginStyle.labelStyle}
                color={loginStatus === "Loggin Success" ? "success" : "error"}
              >
                {loginStatus}
              </Typography>
            </Box>
            <Box sx={AdminLoginStyle.loginBtnHolderStyle}>
              <Button
                variant="contained"
                color="success"
                sx={AdminLoginStyle.loginBtnStyle}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
            <Box sx={AdminLoginStyle.forgotBoxStyle}>
              <Typography
                sx={AdminLoginStyle.forgotLinkTextStyle}
                onClick={() => {
                  Navigate("/forgetpassword");
                }}
              >
                Forgot Password?
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default Adminlogin;
