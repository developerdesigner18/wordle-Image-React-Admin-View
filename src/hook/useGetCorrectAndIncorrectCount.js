import axios from "axios";
import { useEffect, useState } from "react";

const useGetCorrectAndIncorrectCount = (url, dep_var) => {
  const [correctCount, setcorrectCount] = useState();
  const [incorrectCount, setincorrectCount] = useState();
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setcorrectCount(response.data.correctWordCount);
        setincorrectCount(response.data.incorrectWordCount);
      })
      .catch((err) => {
        console.log("Can't Find data in Response");
      });
  }, [dep_var, url]);
  return { correctCount, incorrectCount };
};

export default useGetCorrectAndIncorrectCount;
