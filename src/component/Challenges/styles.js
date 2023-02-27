export const ChallengeStyle = {
  cardStyle: {
    margin: "auto",
    marginTop: "20px",
  },

  tableContentStyle: {
    maxHeight: 490,
    maxWidth: "95%",
    margin: "auto",
    marginTop: "40px",
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

  tableCellStyle: {
    padding: "2px",
    height: "20px",
    textAlign: "center",
  },

  tableRowStyle: {
    t: "20",
  },

  paginationStyle: {
    marginRight: "50px",
    marginTop: "20px",
  },

  challengeImgStyle: {
    borderRadius: "3px",
    marginTop: "3px",
  },

  editIcon: {
    color: "#8CC7BC",
  },

  deleteIcon: {
    color: "#EB8296",
  },

  actionBoxStyle: {
    width: "50%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-evenly",
  },

  headingHolderBox: {
    width: "85%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  PageHeading: {
    fontWeight: "600",
    // color: "#EB8296",
    "@media (max-width:470px)": {
      fontSize: "25px",
    },
  },

  AddBtnStyle: {
    background: "#EB8296",
    "&:hover": {
      backgroundColor: "#EB8296",
    },
    "@media (max-width:470px)": {
      width: "100px",
      fontSize: "8px",
    },
  },

  deleteModelStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #f8f8f8",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    "@media only screen and (max-width: 500px)": {
      width: 300,
    },
  },

  DarkdeleteModelStyle: {
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

  AddModelStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
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
  searchFieldStyle: {
    width: "40%",
    margin: "30px 0px 0px 40px",
    "@media only screen and (max-width: 430px)": {
      width: "95%",
      margin: "10px 0px 0px 10px",
    },
  },
};
