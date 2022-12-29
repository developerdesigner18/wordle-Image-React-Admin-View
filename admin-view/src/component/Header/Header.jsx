import React, { useState } from "react";
import "./Header.css";
// for Header
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
//
import { HeaderStyle } from "./styles";
import Sidebar from "../Drawer/Sidebar";
import { useNavigate } from "react-router-dom";

function Header({ setTheme, theme }) {
  //MOBILE VIEW HANDELING STATES
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mode, setmode] = useState(false);

  const Navigate = useNavigate();

  // FUNCTION TO HANDLE MOBILE VIEW DRAWER MANIPULATIONS
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" sx={HeaderStyle.AppbarStyle}>
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, display: "flex" }}
            >
              <img
                src="./images/WordleLogo.svg"
                alt="logo"
                style={HeaderStyle.logoSvg}
              />
            </Typography>
            <Box sx={HeaderStyle.themeBox}>
              <IconButton
                onClick={() => {
                  setmode(!mode);
                }}
                sx={HeaderStyle.modeIconBtn}
              >
                {localStorage.getItem("admin-theme") === "dark" ? (
                  <LightModeIcon
                    sx={
                      theme === "dark"
                        ? HeaderStyle.DarkIconStyle
                        : HeaderStyle.LightIconStyle
                    }
                    onClick={() => {
                      setTheme("light");
                      localStorage.removeItem("admin-theme");
                      localStorage.setItem("admin-theme", "light");
                    }}
                  />
                ) : (
                  <NightsStayOutlinedIcon
                    sx={
                      theme === "dark"
                        ? HeaderStyle.DarkIconStyle
                        : HeaderStyle.LightIconStyle
                    }
                    onClick={() => {
                      setTheme("dark");
                      localStorage.removeItem("admin-theme");
                      localStorage.setItem("admin-theme", "dark");
                    }}
                  />
                )}
              </IconButton>
              <Button
                sx={HeaderStyle.logOutButton}
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  Navigate("/");
                }}
              >
                <Box sx={HeaderStyle.buttonBox}>
                  <LogoutIcon sx={HeaderStyle.logOutIcon} />
                  <Typography sx={HeaderStyle.btnTypo}>Logout</Typography>
                </Box>
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={HeaderStyle.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
    </>
  );
}

export default Header;
