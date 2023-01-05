import React, { useState } from "react";
import { AddWordStyle } from "../AddWord/AddWordStyle";
import { Box, Button, TextField, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import updateWord from "../../../../utils/updateWord";
import useGetWord from "../../../../hook/useGetWord";

function UpdateWord({
  selectedWord,
  setselectedWord,
  toggle,
  settoggle,
  handleCloseUpdateWord,
  menuClose,
}) {
  //CUSTOM HOOK TO GET THE SELECTED WORD
  const word = useGetWord(
    `${process.env.REACT_APP_BACKEND_URL}/word/getSingleWord`,
    selectedWord
  );
  const [newWord, setnewWord] = useState();
  const [status, setStatus] = useState();

  //SAVE FUNCTION
  const handleSave = (e) => {
    e.preventDefault();
    var tempObj = {
      _id: selectedWord,
      word: newWord,
    };
    //UPDATE WORD FUNCTION FROM UTILS
    updateWord(tempObj)
      .then(() => {
        settoggle(!toggle);
        setselectedWord(toggle);
        handleCloseUpdateWord();
        menuClose();
      })
      .catch((err) => {
        setStatus("Something Went Wrong In Updating Word!");
      });
  };
  //
  return (
    <>
      <Box>
        <Box sx={AddWordStyle.closeBtnBoxStyle}>
          <CancelIcon
            onClick={handleCloseUpdateWord}
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
            EDIT WORD
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
            placeholder={word?.word ? word.word : ""}
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
              handleCloseUpdateWord();
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

export default UpdateWord;
