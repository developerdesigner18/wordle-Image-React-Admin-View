import axios from "axios";

const updateChallenge = async (data) => {
  var status = await axios.post(
    "http://localhost:5000/challenges/updateChallenges",
    data,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return status.status;
};

export default updateChallenge;
