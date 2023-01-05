import axios from "axios";
import { toast } from "react-toastify";

const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const sendCustomMail = (subject, text) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/subscribe/mailAllSubscriber`, {
      subject: subject,
      emailText: text,
    })
    .then((response) => {
      toast.info("Message Sent to all Subscribers!", toastConfig);
    })
    .catch((err) => {});
};

export default sendCustomMail;
