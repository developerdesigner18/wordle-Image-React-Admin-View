import axios from "axios";

const updateChallenge = async (data) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/challenges/updateChallenges`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return status.status;
};

export default updateChallenge;
