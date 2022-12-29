import axios from "axios";
import { useEffect, useState } from "react";

const useFetchAllWords = (url, dep_var, setsearch) => {
  const [words, setwords] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      })
      .then((response) => {
        setwords(response.data.data);
        setsearch(response.data.data);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url, setsearch]);
  return words;
};

export default useFetchAllWords;
