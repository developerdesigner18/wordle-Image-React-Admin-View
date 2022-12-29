//HERE CALL COUNT REFER TO THE ROW NUMBER IN WHICH THE INPUT IS CURRENTLY ENTERED
export const calculateStatistics = (rowStatusObj, callCount) => {
  var winningStatus = 0;

  var updating_guesses = JSON.parse(localStorage.getItem("statistic_unique"));
  updating_guesses.guess_distrinution = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  localStorage.removeItem("statistic_unique");
  localStorage.setItem("statistic_unique", JSON.stringify(updating_guesses));

  var statistic_unique = JSON.parse(localStorage.getItem("statistic_unique"));
  //-----------------------------
  if (statistic_unique.played && callCount === 0) {
    statistic_unique.played = statistic_unique.played + 1;
  } else if (callCount === 0) {
    statistic_unique.played = 1;
  }
  //----------------------------------

  if (statistic_unique.currentStreak && callCount === 0) {
    statistic_unique.currentStreak = statistic_unique.currentStreak + 1;
  } else {
    if (callCount === 0) {
      statistic_unique.currentStreak = 1;
    }
  }
  //--------------------------------------
  // eslint-disable-next-line array-callback-return
  Object.keys(rowStatusObj).map((item) => {
    if (rowStatusObj[item].status === "correct") {
      statistic_unique.guess_distrinution[callCount] = 1;
      winningStatus = 1;
    } else {
      winningStatus = 0;
      statistic_unique.guess_distrinution[callCount] = 0;
    }
  });

  //---------------------------------------------------
  if (winningStatus === 1 && statistic_unique.totalWin) {
    statistic_unique.totalWin = statistic_unique.totalWin + 1;
  } else if (winningStatus === 1) {
    statistic_unique.totalWin = 1;
  }
  //---------------------
  statistic_unique.win =
    (100 / statistic_unique.played) * statistic_unique.totalWin;

  //-------------------
  localStorage.setItem("statistic_unique", JSON.stringify(statistic_unique));

  return winningStatus;
};
