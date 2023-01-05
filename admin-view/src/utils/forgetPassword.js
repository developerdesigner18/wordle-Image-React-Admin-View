import axios from "axios";

export const handlesendOTP = (settoggle, setstatus, email) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/auth/generateOPT`, {
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
    .post(`${process.env.REACT_APP_BACKEND_URL}/auth/verifyOTP`, {
      otp: otp,
    })
    .then((response) => {
      settoggle("change");
    })
    .catch((err) => {
      setstatus("Something went Wrong.");
    });
};

export const handleSubmit = (newpass, reentred, email, setstatus, Navigate) => {
  if (newpass === reentred) {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/updatePassword`, {
        email: email,
        password: newpass,
      })
      .then((response) => {
        console.log("Success Password Change.");
        Navigate("/");
      })
      .catch((err) => {
        console.log("Something Went Wrong!", err);
      });
  } else {
    setstatus("Password Not Matched!");
  }
};
