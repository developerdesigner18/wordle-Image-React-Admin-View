export const isWordInDatabase = (allWords, inputArr) => {
  var wordList = allWords?.map((item) => {
    return item?.word?.toLowerCase();
  });
  if (!wordList?.includes(inputArr.join("").toLowerCase())) {
    // TRUE FOR: SEND NOTIFICATION THAT WORD IS NOT IN LIST
    return true;
  } else {
    // FALSE FOR: DO NOTHING WORD IS IS THE LIST
    return false;
  }
};
