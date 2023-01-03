import axios from "axios";

const removeSubscriber = async (email) => {
  var status = await axios.post("http://localhost:5000/subscribe/unSubscribe", {
    email: email,
  });
  return status.status;
};

export default removeSubscriber;
