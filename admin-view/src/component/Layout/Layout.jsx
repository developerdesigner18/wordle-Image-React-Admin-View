import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Layout.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Card } from "@mui/material";

// THIS STYLE IS FOR CARD THAT DISPLAY ALL THE CHILDREN
const style = {
  maxWidth: "85%",
  marginLeft: "15%",
  marginTop: "5%",
  marginBottom: "20px",
  minHeight: "88vh",
  "@media only screen and (max-width: 600px)": {
    maxWidth: "100%",
    marginLeft: "0%",
    marginTop: "60px",
  },
  "@media only screen and (min-width: 600px)": {
    maxWidth: "100%",
    marginLeft: "200px",
    marginTop: "70px",
  },
};

function Layout({ children }) {
  const [theme, setTheme] = useState("light");

  // USEEFFECT TO DETERMINE THE THEME BEFORE STARTING
  useEffect(() => {
    if (localStorage.getItem("admin-theme")) {
      setTheme(localStorage.getItem("admin-theme"));
    } else {
      setTheme("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("admin-theme")]);

  //MUI THEME CONFIGURATION WITH STATE DEFINE ABOVE NAMED theme
  const darkTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: "#fff", // This is an orange looking color
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Card>
          <Header setTheme={setTheme} theme={theme} />
          <Card sx={style}>{children}</Card>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default Layout;
