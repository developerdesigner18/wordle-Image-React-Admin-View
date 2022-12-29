import axios from "axios";

export const handlesendOTP = (settoggle, setstatus, email) => {
  axios
    .post("http://localhost:5000/auth/generateOPT", {
      email: email.trim(),
    })
    .then((response) => {
      settoggle("OTP");
    })
    .catch((err) => {
      console.log(err?.response?.data?.msg);
      setstatus(err?.response?.data?.msg);
    });
};

export const handleverifyOTP = (otp, settoggle, setstatus) => {
  axios
    .post("http://localhost:5000/auth/verifyOTP", {
      otp: otp,
    })
    .then((response) => {
      settoggle("change");
    })
    .catch((err) => {
      setstatus("Something went Wrong.");
    });
};

export const handleSubmit = (
  newpass,
  reentred,
  email,
  setstatus,
  handleopenLoginModel,
  handleCloseForgetPassModel
) => {
  if (newpass === reentred) {
    axios
      .post("http://localhost:5000/auth/updatePassword", {
        email: email,
        password: newpass,
      })
      .then((response) => {
        console.log("Success Password Change.");
        handleopenLoginModel();
        handleCloseForgetPassModel();
      })
      .catch((err) => {
        console.log("Something Went Wrong!", err);
      });
  } else {
    setstatus("Password Not Matched!");
  }
};
