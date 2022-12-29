export const getSolStatusArr = (data) => {
  console.log(data, "in Fuinctiom");
  var tempArr = "";
  // eslint-disable-next-line array-callback-return
  Object.keys(data).map((item) => {
    // tempArr.push(data[item].status);
    if (data[item].status === "correct") {
      tempArr = tempArr + "🟩";
    } else if (data[item].status === "present") {
      tempArr = tempArr + "🟨";
    } else if (data[item].status === "absent") {
      tempArr = tempArr + "⬜";
    } else {
      tempArr = tempArr + "⬜";
    }
    // tempArr = tempArr + " " + data[item].status;
  });
  return tempArr + "\n";
};
