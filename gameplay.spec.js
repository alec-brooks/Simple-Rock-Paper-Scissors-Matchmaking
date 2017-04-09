const chai = require('chai');

const expect = chai.expect;
const getRounds = require('./gameplay').getRounds;

describe('gameplay', () => {
  describe('getRound', () => {
    const throws = [{
      name: 'a',
      throw: 'rock'
    }, {
      name: 'b',
      throw: 'paper'
    }];
    it('should return empty on empty', () => {
      expect(getRounds([])).to.eql([]);
    });
    it('should a single merged record when present two', () => {
      expect(getRounds(throws)).to.eql([{
        throws,
        winner: 'a'
      }]);
    });
  });
});
