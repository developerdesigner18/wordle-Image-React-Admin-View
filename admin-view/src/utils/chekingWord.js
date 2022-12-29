import { keyColorChanging } from "./keyColorChanging";
import { calculateStatistics } from "./calculateStatistics";
import axios from "axios";
import moment from "moment";
import { getSolStatusArr } from "./getSolStatusArr";

const chekingWord = (
  dailyWord,
  data,
  setFunc,
  callCount,
  openWinModel,
  shareData,
  setshareData
) => {
  let charactersCount = {};
  for (let key in dailyWord) {
    charactersCount[`${dailyWord[key]}`] =
      charactersCount[`${dailyWord[key]}`] + 1 || 1;
  }

  var correct1Obj = {};

  const dailyWordArr = dailyWord?.toLowerCase().split("");

  for (var i = 0; i < dailyWord.length; i++) {
    const correctWord = dailyWord[i]?.toLowerCase();
    const inputWord = data[i]?.toLowerCase();

    if (correctWord === inputWord) {
      if (charactersCount[inputWord] === 0) {
        correct1Obj[i] = { latter: inputWord.toUpperCase(), status: "absent" };
      } else {
        correct1Obj[i] = { latter: inputWord.toUpperCase(), status: "correct" };
        charactersCount[inputWord] = charactersCount[inputWord] - 1;
      }
    } else if (dailyWordArr.includes(inputWord)) {
      if (charactersCount[inputWord] === 0) {
        correct1Obj[i] = { latter: inputWord.toUpperCase(), status: "absent" };
      } else {
        correct1Obj[i] = { latter: inputWord.toUpperCase(), status: "present" };
        charactersCount[inputWord] = charactersCount[inputWord] - 1;
      }
    } else {
      correct1Obj[i] = { latter: inputWord.toUpperCase(), status: "absent" };
    }
  }
  setFunc(correct1Obj);
  keyColorChanging(correct1Obj);

  // SETTING CURRENT ROW STATUS TO CREATE CLIP CODE
  var currentRowStats = getSolStatusArr(correct1Obj);
  if (currentRowStats) {
    setshareData(shareData + currentRowStats);
  }

  var winingStatus = calculateStatistics(correct1Obj, callCount);
  if (winingStatus || callCount === 5) {
    openWinModel(true);
    var winObj = {
      word: dailyWord,
      status: winingStatus === 1 ? "win" : "loose",
    };
    localStorage.setItem("todayGame", JSON.stringify(winObj));

    // STORING THE STATISTIC IN USER COLLECTION IF USER IS LOGGED IN
    if (JSON.parse(localStorage.getItem("player"))?.role === "player") {
      console.log("making Axios req");
      axios
        .post(
          "http://localhost:5000/game/setStatistic",
          {
            userID: JSON.parse(localStorage.getItem("player")).userID,
            winingStatus: winingStatus ? winingStatus : 0,
            date: moment().format("MM-DD-YYYY"),
            guess_distrinution: JSON.parse(
              localStorage.getItem("statistic_unique")
            ).guess_distrinution,
          },
          {
            headers: {
              authorization: localStorage.getItem("player-token"),
            },
          }
        )
        .then((response) => {
          console.log("request Send");
        })
        .catch((err) => {
          console.log(err, "error Occur");
        });
    }
  }
  correct1Obj = {};
};

export default chekingWord;
