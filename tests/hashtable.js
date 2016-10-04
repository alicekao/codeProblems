const expect = require('chai').expect;
const hashtable = require('../problems/hashtable');

describe('Hashtables', () => {
  it('Should have insert, size and retrieve methods and private vars', () => {
    const ex = new hashtable(8);
    expect(ex.insert).to.be.a('function');
    expect(ex.size).to.be.a('function');
    expect(ex.retrieve).to.be.a('function');
    expect(ex.remove).to.be.a('function');
    expect(ex.storage).to.be.undefined;
  });
  it('Should reflect sizes', () => {
    const ex = new hashtable(8);
    expect(ex.size()).to.equal(0);
  })
  it('Should retrieve values', () => {
    const ex = new hashtable(8);
    ex.insert('alice', 'kao');
    ex.insert('apple', 'banana');
    ex.insert('bob', 'donut');
    ex.insert('danny', 'cat');
    expect(ex.size()).to.equal(4);
    expect(ex.retrieve('alice')).to.equal('kao');
    expect(ex.retrieve('danny')).to.equal('cat');
    expect(ex.retrieve('unknown')).to.null;
  });
  it('Should delete values', () => {
    const ex = new hashtable(8);
    ex.insert('alice', 'kao');
    ex.insert('apple', 'banana');
    ex.insert('bob', 'donut');
    expect(ex.size()).to.equal(3);
    ex.remove('alice');
    expect(ex.retrieve('apple')).to.equal('banana');
    expect(ex.retrieve('alice')).to.be.null;
    expect(ex.size()).to.equal(2);
  });
  // it('Should handle key collisions', () => {
  //   const ex = new hashtable(8);
  //   ex.insert('alice', 'jerry');
  //   expect(ex.size()).to.equal(1);
  //   ex.insert('alice', 'kao');
  //   expect(ex.size()).to.equal(1);
  //   expect(ex.retrieve('alice')).to.equal('kao');
  // });
})