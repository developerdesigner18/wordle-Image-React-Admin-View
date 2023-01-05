import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAllSubscriber = (url, dep_var) => {
  const [subscriber, setsubscriber] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setsubscriber(response.data.response);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url]);

  return subscriber;
};

export default useFetchAllSubscriber;
