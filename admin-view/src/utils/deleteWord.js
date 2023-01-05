import axios from "axios";

const deleteWord = async (id) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/word/deleteWord`,
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

export default deleteWord;
