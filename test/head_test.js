const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const headArray = require('../src/head.js')
describe('headArray()', () => {
  it('off with its head', () => {
    expect(headArray([1, 2, 1, 2])).to.deep.equal(1);
  });


})
