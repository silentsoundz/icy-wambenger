const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const daTimes = require('../src/multiply.js')
describe('daTimes()', () =>  {

  it('daTimess two numbers duh', () => {
    expect( daTimes(1, 3)).to.equal(3)
  })
})
