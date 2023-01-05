import axios from "axios";
import { useEffect, useState } from "react";

const useFetchChallenges = (url, dep_var) => {
  const [challenges, setchallenges] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setchallenges(response.data.data);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url]);
  return challenges;
};

export default useFetchChallenges;
