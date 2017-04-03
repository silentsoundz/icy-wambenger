const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const lowerFirst = require('../src/lowerFirst.js')
describe('lowerFirst()', () =>  {

  it('lowercases the first lettah', ()  =>  {
    expect(lowerFirst('Anothertime')).to.deep.equal('anothertime')
  })
})
