import axios from "axios";

const updateAdminProfile = async (data) => {
  let message = "";
  var status = await axios.post(
    // `${process.env.REACT_APP_BACKEND_URL}/challenges/updateChallenges`,
    `${process.env.REACT_APP_BACKEND_URL}/auth/updateAdminProfile`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  message = status?.data?.msg;
  return message;
};

export default updateAdminProfile;
