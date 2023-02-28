import React from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { SubscriptionStyle } from "./SubscriptionStyle";
import Avatar from "@mui/material/Avatar";
import useFetchAllSubscriber from "../../hook/useFetchAllSubscriber";
import { useState } from "react";
import removeSubscriber from "../../utils/removeSubscriber";
import sendCustomMail from "../../utils/sendCustomMail";
//TOSTIFY CONFIGURATION
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetchRegisteredUser from "../../hook/useFetchRegisteredUser";
import removeUser from "../../utils/removeUser";
const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

function Subscription() {
  const [selectedId, setselectedId] = useState("");
  const subscribers = useFetchAllSubscriber(
    `${process.env.REACT_APP_BACKEND_URL}/subscribe/getAllSubscriber`,
    selectedId
  );
  const registeredUser = useFetchRegisteredUser(
    `${process.env.REACT_APP_BACKEND_URL}/user/getalluser`,
    selectedId
  );

  const [subject, setsubject] = useState("");
  const [text, settext] = useState("");

  const handleRemove = (email) => {
    removeSubscriber(email);
  };
  const handleRemoveUser = (email) => {
    removeUser(email);
  };

  const handleMailSent = () => {
    sendCustomMail(subject, text);
  };

  return (
    <>
      <Typography sx={SubscriptionStyle.headingTextStyle} variant="h4">
        People
      </Typography>
      <Box sx={SubscriptionStyle.mainContentHolderStyle}>
        <Card sx={SubscriptionStyle.peopleListHolderStyle}>
          <Typography sx={SubscriptionStyle.peopleHeadingStyle} variant="h5">
            Subscribe People
          </Typography>
          <Box sx={SubscriptionStyle.peopleContainerStyle}>
            {subscribers &&
              subscribers.map((item) => (
                <Card sx={SubscriptionStyle.personStyle} key={item?._id}>
                  <Box sx={SubscriptionStyle.peopleDescHolderStyle}>
                    <Avatar>{item?.email[0]?.toUpperCase()}</Avatar>
                    <Typography sx={SubscriptionStyle.emailStyle}>
                      {item?.email}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="error"
                    sx={SubscriptionStyle.btnStyle}
                    onClick={() => {
                      handleRemove(item?.email);
                      setselectedId(item?._id);
                    }}
                  >
                    Remove
                  </Button>
                </Card>
              ))}
          </Box>
        </Card>

        <Card sx={SubscriptionStyle.editorContentHolderStyle}>
          <Typography sx={SubscriptionStyle.editorheadingStyle} variant="h5">
            Write mail to all Subscribers
          </Typography>
          <Box sx={SubscriptionStyle.formHolderStyle}>
            <Box sx={SubscriptionStyle.SubjectHolderStyle}>
              <Typography>Enter Email Subject</Typography>
              <TextField
                value={subject}
                sx={SubscriptionStyle.subjectFieldStyle}
                size="small"
                onChange={(e) => {
                  setsubject(e.target.value);
                }}
              />
            </Box>
            <Box sx={SubscriptionStyle.descHolderStyle}>
              <Typography>Enter Email text/ description</Typography>
              <TextField
                value={text}
                multiline
                sx={SubscriptionStyle.textAreaStyle}
                rows={7}
                cols={50}
                onChange={(e) => {
                  settext(e.target.value);
                }}
              ></TextField>
            </Box>
            <Box sx={SubscriptionStyle.generalBtnHolderStyle}>
              <Button
                variant="contained"
                color="success"
                sx={SubscriptionStyle.formBtnStyle}
                onClick={handleMailSent}
              >
                Sent
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={SubscriptionStyle.formBtnStyle}
                onClick={() => {
                  setsubject("");
                  settext("");
                }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
      <Box sx={SubscriptionStyle.mainRegisteredPeopleContentHolderStyle}>
        <Card sx={SubscriptionStyle.registeredPeopleListHolderStyle}>
          <Typography sx={SubscriptionStyle.peopleHeadingStyle} variant="h5">
            Registered People
          </Typography>
          <Box sx={SubscriptionStyle.peopleContainerStyle}>
            {subscribers &&
              registeredUser.map((item) => (
                <Card sx={SubscriptionStyle.personStyle} key={item?._id}>
                  <Box sx={SubscriptionStyle.peopleDescHolderStyle}>
                    <Avatar>{item?.email[0]?.toUpperCase()}</Avatar>
                    <Typography sx={SubscriptionStyle.emailStyle}>
                      {item?.email}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="error"
                    sx={SubscriptionStyle.btnStyle}
                    onClick={() => {
                      handleRemoveUser(item?.email);
                      setselectedId(item?._id);
                    }}
                  >
                    Remove
                  </Button>
                </Card>
              ))}
          </Box>
        </Card>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toast={toast}
        toastConfig={toastConfig}
        limit={1}
      />
    </>
  );
}

export default Subscription;
