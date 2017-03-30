const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const lastArray = require('../src/last.js')
describe('lastArray()', () => {

    it('ass grab', () => {
      expect( lastArray([1, 3, 4, 5])).to.deep.equal(5)
    })
})
