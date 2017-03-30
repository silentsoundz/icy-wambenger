const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const add = require('../src/add.js')
describe('add()', () =>  {

  it('adds two numbers duh', () => {
    expect( add(1, 3)).to.equal(4)
  })
})
