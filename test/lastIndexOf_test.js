const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const lastIndexOf  = require('../src/lastIndexOf.js')
describe('lastIndexOf()', () => {

  it('kansas city shuffle', () =>  {
    expect( lastIndexOf([1, 2, 1, 2], 2)).to.equal(3)
  })
})
