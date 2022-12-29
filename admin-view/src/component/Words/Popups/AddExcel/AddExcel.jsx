import React, { useState } from "react";
import { AddWordStyle } from "../AddWord/AddWordStyle";
import { Box, Button, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import addExcel from "../../../../utils/addExcel";

function AddExcel({
  selectedWord,
  setselectedWord,
  toggle,
  settoggle,
  handleCloseExcelWord,
}) {
  const [newWordFile, setnewWordFile] = useState();
  const [status, setStatus] = useState();

  //SAVE FUNCTION
  const handleSave = (e) => {
    e.preventDefault();
    var excelFormData = new FormData();
    excelFormData.append("excel", newWordFile);
    //ADD EXCEL FUNCTION FROM UTILS
    addExcel(excelFormData)
      .then(() => {
        settoggle(!toggle);
        setselectedWord(toggle);
        handleCloseExcelWord();
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
            onClick={handleCloseExcelWord}
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AddWordStyle.DarkcloseBtnBoxStyle
                : AddWordStyle.closeIcon
            }
            F
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
            variant="h6"
          >
            ADD WORDS FROM EXCEL
          </Typography>
        </Box>
        <Box sx={AddWordStyle.contentBoxStyle}>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            onChange={(e) => {
              setnewWordFile(e.target.files[0]);
            }}
          />
          <label
            htmlFor="contained-button-file"
            style={AddWordStyle.excelInputLabelStyle}
          >
            {newWordFile?.name?.includes(".xlsx") ? (
              <img
                src="images/Excel.png"
                height="100"
                width="150"
                alt="Warning"
              />
            ) : (
              <img
                src="images/Warning.png"
                height="100"
                width="100"
                alt="Warning"
                style={AddWordStyle.WarningStyle}
              />
            )}

            <Button
              variant="contained"
              color="success"
              component="span"
              sx={AddWordStyle.uploadExcelButtonStyle}
            >
              Upload Excel File
            </Button>
          </label>
          <Box sx={AddWordStyle.name}>{newWordFile?.name}</Box>
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
              handleCloseExcelWord();
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

export default AddExcel;
