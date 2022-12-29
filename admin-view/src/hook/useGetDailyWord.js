import axios from "axios";
import { useEffect, useState } from "react";

const useGetDailyWord = (url) => {
  const [dailyWord, setdailyWord] = useState();
  const [wordlength, setwordlength] = useState();
  const [image, setimage] = useState();
  const [grauout, setgrauout] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setdailyWord(response.data.response.challenge_word);
        setwordlength(response.data.response.challenge_word.length);
        setimage(response.data.response.challenge_img)
        setgrauout(response.data.response.grauout)
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  }, [url]);

  return [dailyWord,wordlength,image,grauout];
};

export default useGetDailyWord;
