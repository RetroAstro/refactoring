import { expect } from 'chai'
import { Province, ProvinceInterface, sampleProvinceData } from '../../src/building-tests'

describe('province', () => {
  let asia: Province

  beforeEach(() => {
    asia = new Province(sampleProvinceData())
  })

  it('shortfall', () => {
    expect(asia.shortfall).to.equal(5)
  })

  it('profit', () => {
    expect(asia.profit).to.equal(230)
  })

  it('change production', () => {
    asia.producers[0].production = 20
    expect(asia.shortfall).to.equal(-6)
    expect(asia.profit).to.equal(292)
  })

  it('zero demand', () => {
    asia.demand = 0
    expect(asia.shortfall).to.equal(-25)
    expect(asia.profit).to.equal(0)
  })

  it('negative demand', () => {
    asia.demand = -1
    expect(asia.shortfall).to.equal(-26)
    expect(asia.profit).to.equal(-10)
  })

  it('empty string demand', () => {
    asia.demand = ""
    expect(asia.shortfall).to.NaN
    expect(asia.profit).to.NaN
  })
})

describe('no producers', () => {
  let noProducers: Province

  beforeEach(() => {
    const data: ProvinceInterface = {
      name: 'No producers',
      producers: [],
      demand: 30,
      price: 20
    }
    noProducers = new Province(data)
  })

  it('shortfall', () => {
    expect(noProducers.shortfall).to.equal(30)
  })

  it('profit', () => {
    expect(noProducers.profit).to.equal(0)
  })
})
