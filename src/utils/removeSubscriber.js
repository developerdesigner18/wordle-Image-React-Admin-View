import axios from "axios";

const removeSubscriber = async (email) => {
  var status = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/subscribe/unSubscribe`,
    {
      email: email,
    }
  );

  return status.status;
};

export default removeSubscriber;
