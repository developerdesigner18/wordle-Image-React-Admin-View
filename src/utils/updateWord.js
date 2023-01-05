import axios from "axios";

const updateWord = async (data) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/word/updateWord`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return status.status;
};

export default updateWord;
