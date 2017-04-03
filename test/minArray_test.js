const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const minArray = require('../src/minArray.js')
describe('minArray()', () => {

    it('finds the min ', () => {
      expect( minArray([1, 3, 4, 5])).to.deep.equal(1)
    })
})
