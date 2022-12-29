import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import deleteChallenge from "../../../utils/deleteChallenge";

const DarkTextStyle = {
  color: "#fff",
};

const LightTextStyle = {
  color: "#000",
};

function ConfoDelete({ selectedChallenge, handleClose, setselectedChallenge }) {
  const [status, setStatus] = useState("");

  const handleDelete = () => {
    deleteChallenge(selectedChallenge)
      .then(() => {
        handleClose();
        setselectedChallenge("");
      })
      .catch((err) => {
        setStatus("err", err);
        console.log(err);
      });
  };
  return (
    <>
      <Typography
        sx={
          localStorage.getItem("admin-theme") === "dark"
            ? DarkTextStyle
            : LightTextStyle
        }
      >
        Are You Sure You Want to Delete The challenge?
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ marginTop: "5px" }}
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: "5px", marginLeft: "10px" }}
        onClick={() => {
          handleClose();
        }}
      >
        Cancel
      </Button>
      <Typography>{status}</Typography>
    </>
  );
}

export default ConfoDelete;
