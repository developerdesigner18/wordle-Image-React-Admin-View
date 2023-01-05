import axios from "axios";

const addChallenges = async (data) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/challenges/addChallenges`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return status.status;
};

export default addChallenges;
