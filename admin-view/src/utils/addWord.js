import axios from "axios";

const addWord = async (word) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/word/addWord`,
    {
      word: word,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return status.status;
};

export default addWord;
