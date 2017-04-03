const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const maxArray = require('../src/maxArray.js')
describe('maxArray()', () => {

    it('finds the max ', () => {
      expect( maxArray([1, 3, 4, 5])).to.deep.equal(5)
    })
})
