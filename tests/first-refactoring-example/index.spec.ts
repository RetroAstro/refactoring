import { expect } from 'chai'
import * as statementData from './statementData.json'
import {
  invoice,
  plays,
  textStatement,
  htmlStatement,
  renderText,
  renderHtml,
} from '../../src/first-refactoring-example'

describe('textStatement', () => {
  it('should equal to textStatement', () => {
    expect(textStatement(invoice, plays)).to.equal(renderText(statementData))
  })
})

describe('htmlStatement', () => {
  it('should equal to htmlStatement', () => {
    expect(htmlStatement(invoice, plays)).to.equal(renderHtml(statementData))
  })
})
