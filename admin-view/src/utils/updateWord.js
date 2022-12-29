import axios from "axios";

const updateWord =async (data) => {
  var status = await axios
    .post("http://localhost:5000/word/updateWord", data, {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    })
  return status.status;
};

export default updateWord;
