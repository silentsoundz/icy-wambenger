const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const reverseArray = require('../src/reverseArray')
describe('reverseArray()', () =>{
  it('flip it and reverse it', () =>{
    expect(reverseArray([1,2,3,4,5,6,])).to.deep.equal([6,5,4,3,2,1])
  })
})
