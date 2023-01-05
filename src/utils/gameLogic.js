


export const onChange = (input, wordlength, rowTracking, stateFunc) => {
  if (
    input.slice(wordlength * rowTracking, wordlength * rowTracking + wordlength)
      .length <= wordlength
  ) {
    var tempEnterdWordLen = input.slice(
      wordlength * rowTracking,
      wordlength * rowTracking + wordlength
    ).length;
    var lenDiff = wordlength - tempEnterdWordLen;
    var ModifiedArr = input.slice(
      wordlength * rowTracking,
      wordlength * rowTracking + wordlength
    );

    for (let i = 0; i < lenDiff; i++) {
      ModifiedArr.push("0");
    }

    stateFunc(ModifiedArr);
  } else {
    stateFunc(
      input.slice(
        wordlength * rowTracking,
        wordlength * rowTracking + wordlength
      )
    );
  }
};
