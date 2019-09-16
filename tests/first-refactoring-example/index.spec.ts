import { expect } from 'chai'
import { invoice, plays, textStatement, htmlStatement } from '../../src/first-refactoring-example'

describe('textStatement', () => {
  it('should be 123', () => {
    expect(textStatement(invoice, plays)).equal('123')
  })
})

describe('htmlStatement', () => {
  it('should be 456', () => {
    expect(htmlStatement(invoice, plays)).equal('456')
  })
})
