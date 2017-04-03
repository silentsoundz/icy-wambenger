const chai = require('chai')
const expect = chai.expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const upperFirst = require('../src/upperFirst.js')
describe('upperFirst()', () =>  {

  it('uppercases the first lettah', ()  =>  {
    expect(upperFirst('anothertime')).to.deep.equal('Anothertime')
  })
})
