import React from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";

import { SubscriptionStyle } from "./SubscriptionStyle";
import Avatar from "@mui/material/Avatar";
import useFetchAllSubscriber from "../../hook/useFetchAllSubscriber";
import { useState } from "react";
import removeSubscriber from "../../utils/removeSubscriber";

function Subscription() {
  const [selectedId, setselectedId] = useState("");
  const subscribers = useFetchAllSubscriber(
    "http://localhost:5000/subscribe/getAllSubscriber",
    selectedId
  );

  const handleRemove = (email) => {
    removeSubscriber(email);
  };

  return (
    <>
      <Typography sx={SubscriptionStyle.headingTextStyle} variant="h4">
        Subscriptions
      </Typography>
      <Box sx={SubscriptionStyle.mainContentHolderStyle}>
        <Card sx={SubscriptionStyle.peopleListHolderStyle}>
          <Typography sx={SubscriptionStyle.peopleHeadingStyle} variant="h5">
            People
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
                sx={SubscriptionStyle.subjectFieldStyle}
                size="small"
              />
            </Box>
            <Box sx={SubscriptionStyle.descHolderStyle}>
              <Typography>Enter Email text/ description</Typography>
              <TextField
                multiline
                sx={SubscriptionStyle.textAreaStyle}
                rows={9}
                cols={50}
              ></TextField>
            </Box>
            <Box sx={SubscriptionStyle.generalBtnHolderStyle}>
              <Button
                variant="contained"
                color="success"
                sx={SubscriptionStyle.formBtnStyle}
              >
                Sent
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={SubscriptionStyle.formBtnStyle}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default Subscription;
