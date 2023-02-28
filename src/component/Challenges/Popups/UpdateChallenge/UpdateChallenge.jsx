import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { AddChellangeStyle } from "../AddChellange/AddChellangeStyle";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import updateChallenge from "../../../../utils/updateChallenges";
import useGetChallenge from "../../../../hook/useGetChallenge";
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

function UpdateChallenge({
  selectedChallenge,
  handleCloseupdateChallenge,
  setselectedChallenge,
  toggle,
  settoggle,
}) {
  const challengeData = useGetChallenge(
    `${process.env.REACT_APP_BACKEND_URL}/challenges/getSingleChallenge`,
    selectedChallenge
  );

  //FOR FIELD INPUT
  const [challenge_img, setchallenge_img] = useState();
  const [challenge_word, setchallenge_word] = useState(
    challengeData?.challenge_word || ""
  );
  const [grauout, setgrauout] = useState("false");
  const [blurr, setblurr] = useState("false");
  const [state, setState] = useState(false);
  //
  //FOR CREATING GRAYOUT EFFECT IN PICTURE
  //   const [imgStyle, setimgStyle] = useState(false);
  //

  const handleUpdatedata = async () => {
    var bodyFormData = new FormData();

    bodyFormData.append("_id", selectedChallenge);
    bodyFormData.append("challenge_img", challenge_img);
    bodyFormData.append("challenge_word", challenge_word);
    bodyFormData.append("grauout", grauout);
    bodyFormData.append("blurr", blurr);

    updateChallenge(bodyFormData)
      .then(() => {
        settoggle(!toggle);
        setselectedChallenge(toggle);
        handleCloseupdateChallenge();
      })
      .catch((err) => {
        setState("Something went wrong in adding the Challenge.");
      });
  };
  useEffect(() => {
    setgrauout(challengeData?.grauout);
    setblurr(challengeData?.blurr);
    setchallenge_word(challengeData?.challenge_word);
  }, [challengeData]);

  return (
    <>
      {challengeData ? (
        <>
          <Box>
            <Box sx={AddChellangeStyle.closeBtnBoxStyle}>
              <CancelIcon
                onClick={handleCloseupdateChallenge}
                sx={
                  localStorage.getItem("admin-theme") === "dark"
                    ? AddChellangeStyle.DarkcloseBtnBoxStyle
                    : AddChellangeStyle.closeIcon
                }
              />
            </Box>
            <Typography variant="h5" sx={AddChellangeStyle.ModelHeadingStyle}>
              EDIT CHALLENGE
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
                      challengeData?.grauout === true
                        ? AddChellangeStyle.imageBlurPreviewStyle
                        : AddChellangeStyle.imagePreviewStyle
                    }
                  />
                ) : challengeData?.challenge_img ? (
                  <>
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/static/${challengeData?.challenge_img}`}
                      alt="current"
                      height="100"
                      width="100"
                      style={
                        grauout && blurr
                          ? AddChellangeStyle.imageBlackWhiteBlurPreviewStyle
                          : grauout && !blurr
                          ? AddChellangeStyle.imageBlackWhitePreviewStyle
                          : !grauout && blurr
                          ? AddChellangeStyle.imageBlurPreviewStyle
                          : AddChellangeStyle.imagePreviewStyle
                      }
                    />
                  </>
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
                defaultChecked={challengeData?.grauout}
                // defaultChecked={challengeData?.grauout ? true : false}
                sx={AddChellangeStyle.switchStyle}
                onChange={(e) => {
                  setgrauout(e.target.checked);
                  console.log(e.target.checked, "gray");
                  //   setimgStyle(e.target.checked)
                }}
              />
            </Box>
            <Box
              sx={
                localStorage.getItem("admin-theme") === "dark"
                  ? AddChellangeStyle.grayOutFieldDark
                  : AddChellangeStyle.grayOutField
              }
            >
              <Typography variant="h6" sx={AddChellangeStyle.GrayouttextStyle}>
                blurr
              </Typography>
              <GreenSwitch
                defaultChecked={challengeData?.blurr}
                sx={AddChellangeStyle.switchStyle}
                onChange={(e) => {
                  setblurr(e.target.checked);
                  console.log(e.target.checked, "blurr");
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
                // value={challengeData?.challenge_word || 'no'}
                value={challenge_word}
                placeholder={
                  challengeData?.challenge_word
                    ? challengeData?.challenge_word
                    : ""
                }
                onChange={(e) => {
                  setchallenge_word(e.target.value);
                }}
                required
              />
            </Box>
            <Box sx={AddChellangeStyle.buttonHolder}>
              <Button
                variant="contained"
                color="success"
                sx={AddChellangeStyle.buttonStyle}
                onClick={() => {
                  handleUpdatedata();
                }}
              >
                <SaveIcon />
                SAVE
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={AddChellangeStyle.buttonStyle}
                onClick={handleCloseupdateChallenge}
              >
                <CloseIcon />
                CANCEL
              </Button>
            </Box>
          </Box>
          {state}
        </>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </>
  );
}

export default UpdateChallenge;
