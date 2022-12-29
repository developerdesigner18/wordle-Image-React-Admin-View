export const keyColorChanging = (data) => {
  var colorPalletObj = JSON.parse(localStorage.getItem("keyColor"));

  // eslint-disable-next-line array-callback-return
  Object.keys(data).map((item) => {
    if (data[item].status === "correct") {
      if (!colorPalletObj["correct"]?.includes(data[item].latter)) {
        colorPalletObj["correct"].push(data[item].latter);
      }
    } else if (data[item].status === "present") {
      if (!colorPalletObj["present"]?.includes(data[item].latter)) {
        colorPalletObj["present"].push(data[item].latter);
      }
    } else {
      if (!colorPalletObj["absent"]?.includes(data[item].latter)) {
        colorPalletObj["absent"].push(data[item].latter);
      }
    }
  });
  localStorage.removeItem("keyColor");
  localStorage.setItem("keyColor", JSON.stringify(colorPalletObj));
};
