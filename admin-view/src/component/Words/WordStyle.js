export const WordStyle = {
  HeadingBox: {
    width: "90%",
    margin: "auto",
    marginTop: "30px",
  },

  headingtext: {
    fontWeight: "800",
    // color: "#EB8296",
  },

  contentCardStyle: {
    width: "90%",
    margin: "auto",
    marginTop: "20px",
    boxShadow:
      "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)",
    marginBottom: "20px",
  },

  actionbarStyle: {
    width: "95%",
    margin: "auto",
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    "@media only screen and (max-width: 430px)": {
      display: "block",
    },
  },

  searchFieldStyle: {
    width: "40%",
    "@media only screen and (max-width: 430px)": {
      width: "100%",
    },
  },

  AddWordBtnStyle: {
    background: "#EB8296",
    marginLeft: "5px",
    marginRight: "5px",
    "&:hover": {
      backgroundColor: "#EB8296",
    },
    "@media only screen and (max-width: 430px)": {
      width: "50%",
    },
  },

  generalButtonHolderStyle: {
    "@media only screen and (max-width: 430px)": {
      width: "80%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
  },

  generalbtnStyle: {
    marginLeft: "5px",
    marginRight: "5px",
    "@media only screen and (max-width: 430px)": {
      width: "50%",
    },
  },

  wordCardStyle: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    height: "45px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },

  soloWord: {
    marginTop: "10px",
  },

  moreIconStyle: {
    marginTop: "0px",
  },

  wordContainerStyel: {
    width: "95%",
    margin: "auto",
    marginTop: "40px",
    marginBottom: "20px",
    maxHeight: "450px",
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
    paddingBottom: "10px",
  },

  menuStyle: {
    width: "120px",
    display: "felx",
    justifyContent: "space-between",
  },

  UpdateNoteStyle: {
    width: "50%",
    display: "flex",
  },

  AddModelStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    border: "1px solid #f8f8f8",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    "@media only screen and (max-width: 500px)": {
      width: 300,
    },
  },
  DarkAddModelStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
    borderRadius: "20px",
    boxShadow: "2px 1px 19px -7px rgba(69,69,69,0.75)",
    color: "#fff",
    border: "1px solid #f8f8f8",
    "@media only screen and (max-width: 500px)": {
      width: 300,
    },
  },
};
