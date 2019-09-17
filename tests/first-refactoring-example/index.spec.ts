import { expect } from 'chai'
import * as statementData from './statementData.json'
import {
  invoice,
  plays,
  textStatement,
  htmlStatement,
  renderText,
  renderHtml,
  createStatementData
} from '../../src/first-refactoring-example'

describe('createStatementData', () => {
  it('should equal to statementData', () => {
    expect(
      JSON.stringify(createStatementData(invoice, plays))
    )
    .equal(JSON.stringify(statementData))
  })
})

describe('textStatement', () => {
  it('should equal to textStatement', () => {
    expect(textStatement(invoice, plays)).equal(renderText(statementData))
  })
})

describe('htmlStatement', () => {
  it('should equal to htmlStatement', () => {
    expect(htmlStatement(invoice, plays)).equal(renderHtml(statementData))
  })
})
