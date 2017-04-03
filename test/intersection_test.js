const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const convergence = require('../src/intersection.js')
describe('convergence ()' , () => {

it('finds the convergence' , () => {
  expect( convergence([1, 2, 3, 4], [5, 6, 7, 3])).to.deep.equal([3])
})
})
