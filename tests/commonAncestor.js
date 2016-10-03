const expect = require('chai').expect;
const Tree = require('../problems/commonAncestor');

const a = new Tree();
const b = new Tree();
const c = new Tree();
const d = new Tree();
const e = new Tree();

a.addChild(b);
a.addChild(c);
b.addChild(d);

describe('CommonAncestor', () => {
  it('Should have methods on the prototype', () => {
    expect(a.getPath).to.be.a('function')
    expect(a.commonAncestor).to.be.a('function');
    expect(a).to.be.an.instanceof(Tree);
  });
  it('Should provide the correct path and return null if none', () => {
    expect(a.getPath(d)).to.eql([a,b,d]);
    expect(a.getPath(a)).to.eql([a]);
    expect(a.getPath(b)).to.eql([a,b]);
    expect(a.getPath(e)).to.be.null;
  });
  it('Should provide the common ancestor', ()=> {
    expect(a.commonAncestor(d, c)).to.eql(a);
    expect(a.commonAncestor(b, c)).to.eql(a);
    expect(a.commonAncestor(b,e)).to.be.null;
  })
})