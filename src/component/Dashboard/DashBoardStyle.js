export const DashBoardStyle = {
  mainDashboardContainerStyle: {
    height: "100%",
    width: "95%",
    margin: "auto",
    marginTop: "50px",
  },

  mainHeadingStyle: {
    width: "95%",
    fontWeight: "500",
    margin: "auto",
    marginBottom: "10px",
    "@media only screen and (max-width: 985px)": {
      textAlign: "center",
    },
  },

  countersHolderStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },

  detailCardStyle: {
    height: "180px",
    width: "250px",
    textAlign: "center",
    margin: "auto",
    "@media only screen and (max-width: 985px)": {
      width: "220px",
      height: "150px",
    },
  },
  cardHeadingStyle: {
    marginTop: "25px",
    fontWeight: "500",
    "@media only screen and (max-width: 985px)": {
      marginTop: "10px",
    },
  },

  ChallengeHeadingStyle: {
    width: "95%",
    margin: "auto",
    fontWeight: "500",
    marginTop: "25px",
    "@media only screen and (max-width: 915px)": {
      textAlign: "center",
      marginTop: "30px",
    },
  },

  challengesHolderStyle: {
    width: "99%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    "@media only screen and (max-width: 915px)": {
      display: "block",
    },
  },

  challengeBoxStyle: {
    width: "40%",
    "@media only screen and (max-width: 915px)": {
      width: "100%",
    },
  },

  challengeTypeStyle: {
    width: "90%",
    margin: "auto",
    "@media only screen and (max-width: 915px)": {
      textAlign: "center",
    },
  },

  challengeCardStyle: {
    display: "flex",
    justifyContent: "space-between",
  },

  challengeImageStyle: {
    height: "150px",
    width: "150px",
    objectFit: "contain",
  },

  DetailHolderStyle: {
    width: "40%",
    marginTop: "20px",
  },

  labelStyle: {
    fontSize: "15px",
    color: "#727272",
  },

  OtherChallengeHolderStyle: {
    width: "45%",
    margin: "auto",
    "@media only screen and (max-width: 915px)": {
      width: "100%",
      marginTop: "20px",
    },
  },

  challenegeListHolder: {
    maxHeight: "130px",
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
    marginTop: "10px",
    "@media only screen and (max-width: 915px)": {
      maxHeight: "200px",
    },
  },

  singleChallengeStyle: {
    width: "95%",
    margin: "auto",
  },

  listImgStyle: {
    height: "50px",
    width: "50px",
    objectFit: "contain",
  },

  soloChallengeStyle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },

  challengeWordStyle: {
    marginTop: "15px",
    fontWeight: "500",
  },
};
