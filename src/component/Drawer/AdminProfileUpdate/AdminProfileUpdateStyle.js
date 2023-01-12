export const AdminProfileUpdateStyle = {
  LightAdminProfileModelStyle: {
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

  DarkAdminProfileModelStyle: {
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

  closeBtnBoxStyle: {
    height: "20px",
    display: "flex",
    justifyContent: "flex-end",
  },

  DarkcloseBtnBoxStyle: {
    height: "20px",
    display: "flex",
    justifyContent: "flex-end",
    color: "#fff",
  },

  closeIcon: {
    cursor: "pointer",
  },

  headingBoxStyle: {
    width: "90%",
    margin: "auto",
    textAlign: "center",
  },

  headingTextStyle: {
    fontWeight: "700",
  },

  DarkHeadingTextStyle: {
    fontWeight: "700",
    color: "#fff",
  },

  updateContentStyle: {
    width: "100%",
    margin: "auto",
    // display: "flex",
    // justifyContent: "space-between",
  },
  imageUpdateHolder: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    alignContent: "center",
  },

  profileImgStyle: {
    height: "90px",
    width: "90px",
    display: "block",
    margin: "auto",
    borderRadius: "50%",
    objectFit: "contain",
  },

  uploadBtnStyle: {
    margin: "auto",
    marginTop: "10px",
  },

  detailHolderStyle: {
    width: "95%",
    margin: "auto",
  },

  textFieldLabelStyle: {
    marginTop: "10px",
  },

  textFieldStyle: {
    width: "100%",
  },

  passwordChangeLinkStyle: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#5DA6E1",
    fontWeight: "500",
    cursor: "pointer",
  },

  submitButtonHolderStyle: {
    width: "90%",
    margin: "auto",
    display: "flex",
    marginTop: "25px",
    justifyContent: "space-between",
  },

  generalButtonStyle: {
    width: "48%",
  },
};
