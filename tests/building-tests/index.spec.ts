import { expect } from 'chai'
import { Province, sampleProvinceData } from '../../src/building-tests'

describe('province', () => {
  it('shortfall', () => {
    const asia = new Province(sampleProvinceData())
    expect(asia.shortfall).equal(5)
  })
})
