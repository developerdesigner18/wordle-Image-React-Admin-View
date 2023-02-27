import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { AddChellangeStyle } from "./AddChellangeStyle";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import addChallenges from "../../../../utils/addChallenges";
import CancelIcon from "@mui/icons-material/Cancel";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[600],
    "&:hover": {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[600],
  },
}));

function AddChellange({
  handleCloseAddChellange,
  setselectedChallenge,
  toggle,
  settoggle,
}) {
  const [challenge_img, setchallenge_img] = useState();
  const [challenge_word, setchallenge_word] = useState("");
  const [grauout, setgrauout] = useState("false");
  const [state, setState] = useState(false);

  const handleSavedata = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append("challenge_img", challenge_img);
    bodyFormData.append("challenge_word", challenge_word);
    bodyFormData.append("grauout", grauout);
    addChallenges(bodyFormData)
      .then(() => {
        settoggle(!toggle);
        setselectedChallenge(toggle);
        handleCloseAddChellange();
      })
      .catch((err) => {
        setState("Something went wring in adding the Challenge.");
      });
  };

  return (
    <>
      <Box>
        <Box sx={AddChellangeStyle.closeBtnBoxStyle}>
          <CancelIcon
            onClick={handleCloseAddChellange}
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AddChellangeStyle.DarkcloseBtnBoxStyle
                : AddChellangeStyle.closeIcon
            }
          />
        </Box>
        <Typography variant="h5" sx={AddChellangeStyle.ModelHeadingStyle}>
          ADD CHALLENGE
        </Typography>
        <Box sx={AddChellangeStyle.imageUploader}>
          <Box>
            {challenge_img ? (
              <img
                src={URL.createObjectURL(challenge_img)}
                alt="current"
                height="100"
                width="100"
                style={
                  grauout === true
                    ? AddChellangeStyle.imageBlurPreviewStyle
                    : AddChellangeStyle.imagePreviewStyle
                }
              />
            ) : (
              <img
                src="images/UploadImage.png"
                alt="current"
                height="100"
                width="100"
                style={AddChellangeStyle.imagePreviewStyle}
              />
            )}
          </Box>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            onChange={(e) => {
              setchallenge_img(e.target.files[0]);
            }}
          />
          <label
            htmlFor="contained-button-file"
            style={AddChellangeStyle.labelStyle}
          >
            <Button
              variant="contained"
              color="success"
              component="span"
              style={AddChellangeStyle.uploadButtonStyle}
            >
              Upload Image
            </Button>
          </label>
        </Box>
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? AddChellangeStyle.grayOutFieldDark
              : AddChellangeStyle.grayOutField
          }
        >
          <Typography variant="h6" sx={AddChellangeStyle.GrayouttextStyle}>
            Grayout
          </Typography>
          <GreenSwitch
            sx={AddChellangeStyle.switchStyle}
            onChange={(e) => {
              setgrauout(e.target.checked);
            }}
          />
        </Box>
        <Box
          sx={
            localStorage.getItem("admin-theme") === "dark"
              ? AddChellangeStyle.DarkWordEntryBoxStyle
              : AddChellangeStyle.WordEntryBoxStyle
          }
        >
          <Typography variant="h6" sx={AddChellangeStyle.AddWordStyle}>
            Enter Word:
          </Typography>
          <TextField
            id="outlined-basic"
            sx={
              localStorage.getItem("admin-theme") === "dark"
                ? AddChellangeStyle.darkTextFieldStyle
                : AddChellangeStyle.textFieldStyle
            }
            size="small"
            onChange={(e) => {
              setchallenge_word(e.target.value);
            }}
          />
        </Box>
        <Box sx={AddChellangeStyle.buttonHolder}>
          <Button
            variant="contained"
            color="success"
            sx={AddChellangeStyle.buttonStyle}
            onClick={() => {
              handleSavedata();
            }}
          >
            <SaveIcon />
            SAVE
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={AddChellangeStyle.buttonStyle}
            onClick={handleCloseAddChellange}
          >
            <CloseIcon />
            CANCEL
          </Button>
        </Box>
      </Box>
      {state}
    </>
  );
}

export default AddChellange;
