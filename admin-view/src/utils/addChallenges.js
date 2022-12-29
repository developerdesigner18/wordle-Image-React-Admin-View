import axios from "axios";

const addChallenges =async (data) => {
  var status = await axios
    .post("http://localhost:5000/challenges/addChallenges", data, {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    })
  return status.status;
};

export default addChallenges;
