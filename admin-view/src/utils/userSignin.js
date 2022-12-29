import axios from "axios";

const userSignin = async (data) => {
  var status = await axios.post("http://localhost:5000/user/usersignin", data);
  console.log(status.status);
  return status.status;
};

export default userSignin;
