const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const chunk = require('../src/chunk.js')
describe('chunk ()', () => {
   it('Splits group into argrument 2', () => {
     expect(chunk([1, 2, 1, 2], 2)).to.deep.equal([[1,2], [1,2]]);
   });

});
