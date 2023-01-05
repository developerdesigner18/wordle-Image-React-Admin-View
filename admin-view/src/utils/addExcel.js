import axios from "axios";

const addExcel = async (data) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/word/importExcel`,
    data,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return status.status;
};

export default addExcel;
