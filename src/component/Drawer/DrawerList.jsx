import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import DashboardIcon from "@mui/icons-material/Dashboard";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Groups2Icon from "@mui/icons-material/Groups2";
import LogoutIcon from "@mui/icons-material/Logout";
import AbcIcon from "@mui/icons-material/Abc";
import { Box, Typography, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminProfileUpdate from "./AdminProfileUpdate/AdminProfileUpdate";

function DrawerList() {
  //LOGIN STATE DETERMINATION
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.role === "admin") {
      setisLogin(true);
    } else {
      setisLogin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.parse(localStorage.getItem("user"))?.userID, isLogin]);
  //

  //LOGOUT FUNCTION FOR USER GAME PAGE
  const handleLogout = (isLogin) => {
    console.log("called");
    if (isLogin) {
      if (JSON.parse(localStorage.getItem("user"))) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return true;
      } else {
        console.log("Requiring Token Not Found for Logout Process!");
        return false;
      }
    } else {
      console.log("Something went wrong in logut user Process!");
      return false;
    }
  };
  //

  // OPEN MODEL FOR UPDATE ADMIN PROFILE
  const [openAdminProfile, setopenAdminProfile] = React.useState(false);
  const handleOpenAdminProfile = () => setopenAdminProfile(true);
  const handleCloseAdminProfile = () => setopenAdminProfile(false);

  const Navigate = useNavigate();
  return (
    <>
      <List
        sx={{
          marginTop: "10px",
          "@media screen and (max-width: 600px)": {
            marginTop: "10px",
          },
        }}
      >
        <ListItem disablePadding>
          <Box
            sx={{ margin: "auto", marginBottom: "30px" }}
            onClick={handleOpenAdminProfile}
          >
            <Avatar
              alt="Remy Sharp"
              src="images/UserDemo.svg"
              sx={{ width: 80, height: 80, margin: "auto", fill: "red" }}
            />
            <Typography sx={{ marginTop: "15px", textAlign: "center" }}>
              Admin
            </Typography>
          </Box>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              Navigate("/dashboard");
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              Navigate("/challenges");
            }}
          >
            <ListItemIcon>
              <EventAvailableIcon />
            </ListItemIcon>
            <ListItemText primary={"Challenge"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              Navigate("/words");
            }}
          >
            <ListItemIcon>
              <AbcIcon />
            </ListItemIcon>
            <ListItemText primary={"Words"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              Navigate("/subscriptions");
            }}
          >
            <ListItemIcon>
              <Groups2Icon />
            </ListItemIcon>
            <ListItemText primary={"People"} />
          </ListItemButton>
        </ListItem>

        {isLogin ? (
          <ListItem
            disablePadding
            sx={{
              "@media screen and (min-width: 600px)": {
                display: "none",
              },
            }}
          >
            <ListItemButton
              onClick={() => {
                if (handleLogout(isLogin)) {
                  setisLogin(false);
                  Navigate("/");
                }
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
      <Modal open={openAdminProfile} onClose={handleCloseAdminProfile}>
        <AdminProfileUpdate handleCloseAdminProfile={handleCloseAdminProfile} />
      </Modal>
    </>
  );
}

export default DrawerList;
