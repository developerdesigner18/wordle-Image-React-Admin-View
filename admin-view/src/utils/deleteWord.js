import axios from "axios";

const deleteWord = async (id) => {
  var status = await axios.post(
    "http://localhost:5000/word/deleteWord",
    {
       _id: id
    },
    {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }
  );
  return status.status;
};

export default deleteWord;
