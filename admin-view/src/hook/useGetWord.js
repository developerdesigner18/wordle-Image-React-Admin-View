import axios from "axios";
import { useEffect, useState } from "react";

const useGetWord = (url, wordID) => {
  const [word, setword] = useState();
  useEffect(() => {
    axios
      .post(
        url,
        {
          _id: wordID,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setword(response.data.data);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  }, [wordID, url]);

  return word;
};

export default useGetWord;
