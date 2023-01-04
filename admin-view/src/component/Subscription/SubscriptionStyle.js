export const SubscriptionStyle = {
  headingTextStyle: {
    marginTop: "20px",
    textAlign: "center",
    fontWeight: "800",
  },
  mainContentHolderStyle: {
    width: "95%",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "auto",
    "@media only screen and (max-width: 920px)": {
      display: "block",
    },
  },
  peopleListHolderStyle: {
    width: "45%",
    height: "460px",
    boxShadow: "2px 1px 19px -7px rgba(69,69,69,0.75)",
    marginTop: "20px",
    "@media only screen and (max-width: 920px)": {
      width: "100%",
    },
  },
  peopleHeadingStyle: {
    textAlign: "center",
    marginTop: "10px",
    fontWeight: "500",
  },
  peopleContainerStyle: {
    width: "85%",
    maxHeight: "395px",

    margin: "auto",
    marginTop: "10px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
  },
  personStyle: {
    width: "95%",
    margin: "auto",
    borderRadius: "5px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "7px",
    "@media only screen and (max-width: 350px)": {
      display: "block",
    },
  },
  peopleDescHolderStyle: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  emailStyle: {
    marginTop: "8px",
    marginLeft: "10px",
  },
  // Remove people Button css
  btnStyle: {
    height: "30px",
    marginTop: "5px",
  },
  //
  editorContentHolderStyle: {
    width: "45%",
    height: "460px",
    marginTop: "20px",
    boxShadow: "2px 1px 19px -7px rgba(69,69,69,0.75)",
    "@media only screen and (max-width: 920px)": {
      width: "100%",
    },
  },
  editorheadingStyle: {
    textAlign: "center",
    marginTop: "10px",
    fontWeight: "500",
  },
  formHolderStyle: {
    width: "85%",
    height: "395px",
    margin: "auto",
    marginTop: "20px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
  },
  SubjectHolderStyle: {
    width: "85%",
    margin: "auto",
  },
  subjectFieldStyle: {
    width: "100%",
    border: "0.5px solid #C4C4C4",
    borderRadius: "5px",
  },
  descHolderStyle: {
    width: "85%",
    margin: "auto",
    marginTop: "10px",
  },
  textAreaStyle: {
    border: "0.5px solid #C4C4C4", // focus
    width: "100%",
    borderRadius: "5px",
    resize: "none",
    fontSize: "15px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
  },

  generalBtnHolderStyle: {
    width: "85%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  formBtnStyle: {
    width: "45%",
  },
};
