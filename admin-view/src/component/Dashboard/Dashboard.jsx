import React from "react";
import Grid from "@mui/material/Grid";
import ChartTemplate from "./ChartTemplate";


function Dashboard() { 
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <ChartTemplate heading={'Total User'}/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <ChartTemplate heading={'Subscribed Users'}/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <ChartTemplate heading={'Incorrect Words'}/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <ChartTemplate heading={'Correct Word'}/>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
