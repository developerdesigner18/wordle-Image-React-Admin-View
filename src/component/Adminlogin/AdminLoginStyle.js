export const AdminLoginStyle = {
  LoginContainer: {
    width: "100%",
    textAlign: "center",
    height: "100vh",
    background: "#DDD7D7",
    alignItem: "center",
    display: "flex",
  },

  loginCardStyle: {
    width: "60%",
    margin: "auto",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "space-betweens",
    height: "500px",
    alignItems: "center",
    "@media only screen and (max-width: 570px)": {
      width: "90%",
    },
  },

  HeadingBoxStyle: {
    height: "40px",
    marginTop: "10px",
    marginBottom: "10px",
  },

  Headingtext: {
    fontWeight: "700",
    margin: "0",
    // marginTop: "0px !important",
    color: "#7e7e7e",
  },

  fieldHolderStyle: {
    width: "80%",
    margin: "auto",
  },

  labelStyle: {
    display: "flex",
    justifyContent: "flex-start",
    fontWeight: "500",
    color: "#7e7e7e",
  },

  textfieldStyle: {
    width: "100%",
    marginBottom: "10px",
  },

  loginBtnHolderStyle: {
    marginTop: "10px",
  },
  forgotBoxStyle: {
    margin: "5px",
    marginBottom: "10px",
  },
  loginBtnStyle: {
    width: "60%",
    backgroundColor: "#dd9866",
    "&:hover": {
      backgroundColor: "#dd9866"
    }
  },

  forgotLinkTextStyle: {
    cursor: "pointer",
    fontWeight: "400",
  },

  loginImageStyle: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  logoStyle: {
    height: "30px",
    width: "80px",
    objectFit: "contain",
  },

  loginImageHolder: {
    width: "50%",
    height: "100%",
    "@media only screen and (max-width: 820px)": {
      width: "30%",
    },
    "@media only screen and (max-width: 570px)": {
      display: "none",
    },
  },

  loginPageHolder: {
    width: "50%",
    "@media only screen and (max-width: 820px)": {
      width: "70%",
    },
    "@media only screen and (max-width: 570px)": {
      width: "100%",
      margin: "auto",
    },
  },
};
