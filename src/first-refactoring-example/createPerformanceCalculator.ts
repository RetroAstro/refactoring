import { Performance, Play } from './interface'

class PerformanceCalculator {
  constructor(
    public performance: Performance, public play: Play
  ) {}
  get amount() {
    throw new Error('subclass responsibility')
  }
  get _volumeCredits() {
    return Math.max(this.performance.audience - 30, 0)
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount(): any {
    let result = 0
    result = 40000
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30)
    }
    return result
  }
  get volumeCredits() {
    return this._volumeCredits
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount(): any {
    let result = 0
    result = 30000
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20)
    }
    result += 300 * this.performance.audience
    return result
  }
  get volumeCredits() {
    return this._volumeCredits + Math.floor(this.performance.audience / 5)
  }
}

export default function createPerformanceCalculator(aPerformance: Performance, aPlay: Play) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay)
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay)
    default:
      throw new Error(`unknown type: ${aPlay.type}`)
  }
}
