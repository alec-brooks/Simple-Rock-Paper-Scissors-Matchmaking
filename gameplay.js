const addNewRound = (result, thr) =>
  [...result, { throws: [thr], winner: 'a' }];

const matchAgainstPreviousThrow = (result, thr) => {
  const newThrows = [...result[result.length - 1].throws, thr];
  const newRound = Object.assign({}, result[result.length - 1], { throws: newThrows });
  return [
    ...result.slice(0, result.length - 1),
    newRound
  ];
};

const determineRPSWinner = (a, b) => {
  if (a.throw === b.throw) {
    return '';
  }
  if (
    (a.throw === 'rock' && b.throw === 'scissors')
    || (a.throw === 'scissors' && b.throw === 'paper')
    || (a.throw === 'paper' && b.throw === 'rock')
  ) {
    return a.name;
  }
  return b.name;
};
const getRounds = (throws) => throws.reduce(
  (r, t, i) => (i % 2
    ? matchAgainstPreviousThrow(r, t)
    : addNewRound(r, t)), []
);

module.exports = { getRounds, determineRPSWinner };
