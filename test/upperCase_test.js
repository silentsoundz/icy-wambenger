const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const upperCase = require('../src/upperCase.js')
describe('upperCase()', () =>{
  it('takes string and uppers it', () =>{
    expect(upperCase('frankie YOU are AMAZING')).to.equal('FRANKIE YOU ARE AMAZING')
  })
})
