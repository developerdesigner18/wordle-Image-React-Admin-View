import axios from "axios";
import { useEffect, useState } from "react";

const useFetchRegisteredUser = (url, dep_var) => {
  const [registeredUser, setregisteredUser] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setregisteredUser(response.data.data);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url]);

  return registeredUser;
};

export default useFetchRegisteredUser;
