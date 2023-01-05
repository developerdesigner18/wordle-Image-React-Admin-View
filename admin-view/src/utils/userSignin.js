import axios from "axios";

const userSignin = async (data) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/user/usersignin`,
    data
  );
  return status.status;
};

export default userSignin;
