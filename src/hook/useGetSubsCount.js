import axios from "axios";
import { useEffect, useState } from "react";

const useGetSubsCount = (url, dep_var) => {
  const [subcount, setsubcount] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data[0]?.docCount);
        setsubcount(response.data.data[0]?.docCount);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url]);
  return subcount;
};

export default useGetSubsCount;
