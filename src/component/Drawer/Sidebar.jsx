import React from "react";
import "./Sidebar.css";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import DrawerList from "./DrawerList";

const drawerWidth = 200;

const Sidebar = (props) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { sm: 200 },
          flexShrink: { sm: 0 }
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { ld: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 200,
            },
          }}
        >
          <DrawerList />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "90%",
              marginTop: "65px",
            },
          }}
          open
        >
          <DrawerList />
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
