import { Invoice, Plays, Statement, Performance, EnrichPerformance } from './interface'
import createPerformanceCalculator from './createPerformanceCalculator'

export default function createStatementData(invoice: Invoice, plays: Plays) {
  let result = <Statement>{}
  result.customer = invoice.customer
  result.performances = invoice.performances.map(enrichPerformance)
  result.totalAmount = totalAmount(result)
  result.totalVolumeCredits = totalVolumeCredits(result)
  return result

  function enrichPerformance(aPerformance: Performance) {
    let calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
    let result = <EnrichPerformance>{ ...aPerformance }
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    return result
  }
  
  function playFor(aPerformance: Performance) {
    return plays[aPerformance.playID]
  }

  function totalAmount(data: Statement) {
    return data.performances
      .reduce((total, p) => total + p.amount, 0)
  }
  
  function totalVolumeCredits(data: Statement) {
    return data.performances
      .reduce((total, p) => total + p.volumeCredits, 0)
  }
}
