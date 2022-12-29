import React from "react";
import Grid from "@mui/material/Grid";
import Totaluser from "./Totaluser";


function Dashboard() { 
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <Totaluser heading={'Total User'}/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Totaluser heading={'Subscribed Users'}/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Totaluser heading={'Subscribed Users'}/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Totaluser heading={'Correct Word'}/>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
