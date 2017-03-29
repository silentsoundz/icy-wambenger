const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const tailArray = require('../src/tailArray')
describe('tailArray()', () => {
  it('everything but the head', () =>{
    expect( tailArray([1, 2, 3, 4, 5, 6])).to.deep.equal([2, 3, 4, 5, 6])
  })
})
