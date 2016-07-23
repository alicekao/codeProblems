const expect = require('chai').expect;
const robotPaths = require('../problems/robotPaths');

describe('RobotPaths', () => {
  it('Should return correct # of paths', () => {
    expect(robotPaths(1)).to.equal(1);
    expect(robotPaths(2)).to.equal(2);
    expect(robotPaths(3)).to.equal(12);
    expect(robotPaths(4)).to.equal(184);
    expect(robotPaths(5)).to.equal(8512);
  });
  it('Should handle edge cases', () => {
    expect(robotPaths(0)).to.equal(0);
  });
});