import axios from "axios";

const addExcel =async (data) => {
  var status = await axios
    .post("http://localhost:5000/word/importExcel", data, {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    })
  return status.status;
};

export default addExcel;
