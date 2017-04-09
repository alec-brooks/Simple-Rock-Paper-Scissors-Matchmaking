const chai = require('chai');

const expect = chai.expect;
const getRounds = require('./gameplay').getRounds;
const determineRPSWinner = require('./gameplay').determineRPSWinner;

describe('gameplay', () => {
  describe('getRound', () => {
    const throws = [{
      name: 'a',
      choice: 'rock'
    }, {
      name: 'b',
      choice: 'paper'
    }];

    it('should return empty on empty', () => {
      expect(getRounds([])).to.eql([]);
    });

    it('should a single merged record when present two', () => {
      expect(getRounds(throws)).to.eql([{
        throws,
        winner: 'b'
      }]);
    });

    it('should two merged record when presented with four throws', () => {
      expect(getRounds([...throws, ...throws])).to.eql([{
        throws,
        winner: 'b'
      },
      {
        throws,
        winner: 'b'
      }]);
    });
  });
  describe('determineRPSWinner', () => {
    it('should return empty when the draw', () => {
      expect(determineRPSWinner({ choice: 'rock', name: 'r' }, { choice: 'rock', name: 'r' })).to.eql('');
      expect(determineRPSWinner({ choice: 'paper', name: 'p' }, { choice: 'paper', name: 'p' })).to.eql('');
      expect(determineRPSWinner({ choice: 'scissors', name: 's' }, { choice: 'scissors', name: 's' })).to.eql('');
    });
    it('should return A name when B wins', () => {
      expect(determineRPSWinner({ choice: 'rock', name: 'r' }, { choice: 'scissors', name: 's' })).to.eql('r');
      expect(determineRPSWinner({ choice: 'scissors', name: 's' }, { choice: 'paper', name: 'p' })).to.eql('s');
      expect(determineRPSWinner({ choice: 'paper', name: 'p' }, { choice: 'rock', name: 'r' })).to.eql('p');
    });
    it('should return B name when B wins', () => {
      expect(determineRPSWinner({ choice: 'scissors', name: 's' }, { choice: 'rock', name: 'r' })).to.eql('r');
      expect(determineRPSWinner({ choice: 'paper', name: 'p' }, { choice: 'scissors', name: 's' })).to.eql('s');
      expect(determineRPSWinner({ choice: 'rock', name: 'r' }, { choice: 'paper', name: 'p' })).to.eql('p');
    });
  });
});
