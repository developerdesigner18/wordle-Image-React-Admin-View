import axios from "axios";
import { useEffect, useState } from "react";

const useGetChallenge = (url, challengeID) => {
  const [challenge, setchallenge] = useState();
  useEffect(() => {
    axios
      .post(
        url,
        {
          _id: challengeID,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setchallenge(response.data.data);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  }, [challengeID, url]);

  return challenge;
};

export default useGetChallenge;
