const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const allButt = require('../src/initial.js')
describe('allButt()', () =>  {

  it('everything but the butt', () => {
    expect( allButt([1, 2, 3])).to.deep.equal([1, 2])
  })
})
