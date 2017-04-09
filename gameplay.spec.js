const chai = require('chai');

const expect = chai.expect;
const getRounds = require('./gameplay').getRounds;
const determineRPSWinner = require('./gameplay').determineRPSWinner;

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

    it('should two merged record when presented with four throws', () => {
      expect(getRounds([...throws, ...throws])).to.eql([{
        throws,
        winner: 'a'
      },
      {
        throws,
        winner: 'a'
      }]);
    });
  });
  describe('determineRPSWinner', () => {
    it('should return empty when the draw', () => {
      expect(determineRPSWinner({ throw: 'rock', name: 'r' }, { throw: 'rock', name: 'r' })).to.eql('');
      expect(determineRPSWinner({ throw: 'paper', name: 'p' }, { throw: 'paper', name: 'p' })).to.eql('');
      expect(determineRPSWinner({ throw: 'scissors', name: 's' }, { throw: 'scissors', name: 's' })).to.eql('');
    });
    it('should return A name when B wins', () => {
      expect(determineRPSWinner({ throw: 'rock', name: 'r' }, { throw: 'scissors', name: 's' })).to.eql('r');
      expect(determineRPSWinner({ throw: 'scissors', name: 's' }, { throw: 'paper', name: 'p' })).to.eql('s');
      expect(determineRPSWinner({ throw: 'paper', name: 'p' }, { throw: 'rock', name: 'r' })).to.eql('p');
    });
    it('should return B name when B wins', () => {
      expect(determineRPSWinner({ throw: 'scissors', name: 's' }, { throw: 'rock', name: 'r' })).to.eql('r');
      expect(determineRPSWinner({ throw: 'paper', name: 'p' }, { throw: 'scissors', name: 's' })).to.eql('s');
      expect(determineRPSWinner({ throw: 'rock', name: 'r' }, { throw: 'paper', name: 'p' })).to.eql('p');
    });
  });
});
