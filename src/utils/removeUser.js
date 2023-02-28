import axios from "axios";

const removeUser = async (email) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/user/removeuser`,
    {
      email: email,
    }
  );

  return status.status;
};

export default removeUser;
