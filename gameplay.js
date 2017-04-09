const addNewRound = (result, thr) =>
  [...result, { throws: [thr] }];

const determineRPSWinner = (a, b) => {
  if (a.choice === b.choice) {
    return '';
  }
  if (
      (a.choice === 'rock' && b.choice === 'scissors')
      || (a.choice === 'scissors' && b.choice === 'paper')
      || (a.choice === 'paper' && b.choice === 'rock')
    ) {
    return a.name;
  }
  return b.name;
};

const matchAgainstPreviousThrow = (result, thr) => {
  const newThrows = [...result[result.length - 1].throws, thr];
  const newRound = Object.assign(
    {},
    result[result.length - 1],
    { throws: newThrows, winner: determineRPSWinner(...newThrows) }
  );
  return [
    ...result.slice(0, result.length - 1),
    newRound
  ];
};

const getRounds = (throws) => throws.reduce(
  (r, t, i) => (i % 2
    ? matchAgainstPreviousThrow(r, t)
    : addNewRound(r, t)), []
);

module.exports = { getRounds, determineRPSWinner };
