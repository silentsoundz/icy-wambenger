const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const lowerCase = require('../src/lowerCase.js')
describe('lowerCase()', () =>{
  it('takes string and lowers it', () =>{
    expect(lowerCase('YOU are AMAZING')).to.equal('you are amazing')
  })
})
