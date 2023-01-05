import axios from "axios";

const deleteChallenge = async (id) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/challenges/deleteChallenge`,
    {
      _id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return status.status;
};

export default deleteChallenge;
