import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAdminData = (url, dep_var) => {
  const [adminData, setadminData] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response, "response");
        setadminData(response.data.data);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url]);

  return adminData;
};

export default useFetchAdminData;
