import React, { useState } from "react";
import { AddWordStyle } from "./AddWordStyle";
import { Box, Button, TextField, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import addWord from "../../../../utils/addWord";

function AddWord({
  setselectedWord,
  handleCloseAddWord,
  settoggle,
  toggle,
  menuClose,
}) {
  const [newWord, setnewWord] = useState();
  const [status, setStatus] = useState();

  //SAVE FUNCTION
  const handleSave = (e) => {
    e.preventDefault();
    //ADD WORD FUNCTION FROM UTILS
    addWord(newWord)
      .then(() => {
        settoggle(!toggle);
        setselectedWord(toggle);
        handleCloseAddWord();
        menuClose();
      })
      .catch((err) => {
        setStatus("Something Went Wromng In Adding Words!");
      });
  };
  //
  return (
    <>
      <Box>
        <Box sx={AddWordStyle.closeBtnBoxStyle}>
          <CancelIcon
            onClick={handleCloseAddWord}
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AddWordStyle.DarkcloseBtnBoxStyle
                : AddWordStyle.closeIcon
            }
          />
        </Box>
        {status}
        <Box sx={AddWordStyle.headingBoxStyle}>
          <Typography
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AddWordStyle.DarkHeadingTextStyle
                : AddWordStyle.headingTextStyle
            }
            variant="h5"
          >
            ADD WORD
          </Typography>
        </Box>
        <Box sx={AddWordStyle.contentBoxStyle}>
          <Typography
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AddWordStyle.DarklabelStyle
                : AddWordStyle.labelStyle
            }
          >
            Enter Word:
          </Typography>
          <TextField
            id="outlined-basic"
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AddWordStyle.darkTextFieldStyle
                : AddWordStyle.textFieldStyle
            }
            size="small"
            onChange={(e) => {
              setnewWord(e.target.value);
            }}
          />
        </Box>
        <Box sx={AddWordStyle.btnHolderStyle}>
          <Button
            variant="contained"
            color="success"
            sx={AddWordStyle.generalBtnStyle}
            onClick={(e) => {
              handleSave(e);
            }}
          >
            <SaveIcon />
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={AddWordStyle.generalBtnStyle}
            onClick={() => {
              handleCloseAddWord();
              menuClose();
            }}
          >
            <CloseIcon />
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AddWord;
