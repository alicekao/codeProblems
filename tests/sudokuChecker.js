var expect = require('chai').expect;
var sudokuChecker = require('../problems/sudokuChecker');

describe('SudokuChecker', () => {
  it('Should return invalid if invalid', () => {
    expect(sudokuChecker("111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999")).to.equal('invalid');
    expect(sudokuChecker("215873649\n734965812\n698412537\n387241965\n146597283\n471659328\n952386471\n563128794\n829734156")).to.equal('invalid');
  });
  it('Should return solved if solved', () => {
    expect(sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429")).to.equal('solved');
    expect(sudokuChecker("795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538")).to.equal('solved');
    expect(sudokuChecker("895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214396857\n639578241")).to.equal('solved');
  });
})