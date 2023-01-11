import axios from "axios";
import { useEffect, useState } from "react";

const useFetchTotalUserCount = (url, dep_var) => {
  const [totaluser, settotaluser] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        settotaluser(response.data.data);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url]);
  return totaluser;
};

export default useFetchTotalUserCount;
