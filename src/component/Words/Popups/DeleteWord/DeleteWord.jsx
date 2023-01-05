import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import deleteWord from "../../../../utils/deleteWord";
import { DeleteWordStyle } from "./DeleteWordStyle";

function DeleteWord({
  handleCloseDeleteWord,
  settoggle,
  toggle,
  setselectedWord,
  selectedWord,
  menuClose,
}) {
  const [status, setstatus] = useState("");

  //HANDLE DELETE FUNCTION
  const handleDelete = () => {
    //DELETEWORD FUNCTION FROM UTILS
    deleteWord(selectedWord)
      .then(() => {
        settoggle(!toggle);
        setselectedWord(toggle);
        handleCloseDeleteWord();
        menuClose();
      })
      .catch((err) => {
        setstatus("Something Went Wrong While Deleteing the Word!");
      });
  };
  return (
    <>
      <Box>
        <Typography
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? DeleteWordStyle.darkTextStyle
              : DeleteWordStyle.lightTextStyle
          }
        >
          Are you Sure You want to delete Word?
        </Typography>
        <Box sx={DeleteWordStyle.BtnHolderStyle}>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleCloseDeleteWord();
              menuClose();
            }}
          >
            Cancel
          </Button>
        </Box>
        {status}
      </Box>
    </>
  );
}

export default DeleteWord;
