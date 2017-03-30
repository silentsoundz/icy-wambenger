const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const SBTRKT = require('../src/subtract.js')
describe('SBTRKT()', () =>  {

  it('SBTRKTs two numbers duh', () => {
    expect( SBTRKT(1, 3)).to.equal(-2)
  })
})
