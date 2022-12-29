import axios from "axios";

const addWord = async (word) => {
  var status = await axios.post(
    "http://localhost:5000/word/addWord",
    {
      word: word,
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return status.status;
};

export default addWord;
