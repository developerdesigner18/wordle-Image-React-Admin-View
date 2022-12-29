import axios from "axios";

const deleteChallenge = async (id) => {
  var status = await axios.post(
    "http://localhost:5000/challenges/deleteChallenge",
    {
      _id: id,
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return status.status;
};

export default deleteChallenge;
