module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsEachSecond = turnsSpeed / 3600;
  let allturns = (2 ** disksNumber) - 1;
  let allSeconds = allturns / turnsEachSecond;
  let allSecondsRounded = Math.floor(allSeconds);

  return {
    turns: allturns,
    seconds: allSecondsRounded
  }
};
