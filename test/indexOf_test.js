const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const indexOf = require('../src/indexOf')
describe('indexOf()'), () => {

  it('gets index of passed in value', () => {
    expect( indexOf([1, 2, 1, 2], 2)).to.equal(1)
  })
})
