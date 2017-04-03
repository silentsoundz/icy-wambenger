const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const divide = require('../src/division.js')
describe('divide()', () =>  {

  it('divides two numbers duh', () => {
    expect( divide(6, 3)).to.equal(2)
  })
})
