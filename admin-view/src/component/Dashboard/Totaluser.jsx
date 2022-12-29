import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { TotalUserStyle } from "./styles";
import { Box } from "@mui/system";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['2012', '2013', '2014', '2015', '2016'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100,200,300,420,480],
        backgroundColor: [
            '#7DE314',
            '#5059AB',
            '#01CC9B',
            '#5059AB',
            '#09909F'
          ],
        barThickness: 10
      }
    ],
  };

function Totaluser({heading}) {
  return (
    <>
      <Box sx={TotalUserStyle.cardHolderStyle}>
        <Card sx={TotalUserStyle.cardStyle}>
          <CardContent sx={{margin: "auto", marginTop:"25px"}}>
            <Typography variant="h4" sx={TotalUserStyle.cardHeading}>
              {heading}
            </Typography>
            <Box sx={{width: "95%", marginTop: "10px"}}>
            <Bar options={options} data={data}/>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Totaluser;
