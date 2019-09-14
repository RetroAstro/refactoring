interface ProducerInterface {
  name: string
  cost: number
  production: number
}

export interface ProvinceInterface {
  name: string
  demand: number
  price: number
  producers: ProducerInterface[]
}

class Producer {
  _province: Province
  _name: string
  _cost: number
  _production: number
  constructor(aProvince: Province, data: ProducerInterface) {
    this._province = aProvince
    this._name = data.name
    this._cost = data.cost
    this._production = data.production || 0
  }
  get name() { return this._name }
  get cost() { return this._cost }
  set cost(arg: any) { this._cost = parseInt(arg) }
  get production() { return this._production }
  set production(amountStr: any) {
    const newProduction = parseInt(amountStr)
    this._province.totalProduction += newProduction - this._production
    this._production = newProduction
  }
}

export class Province {
  _name: string
  _demand: number
  _price: number
  _totalProduction: number = 0
  _producers: Producer[] = []
  constructor(doc: ProvinceInterface) {
    this._name = doc.name
    this._demand = doc.demand
    this._price = doc.price

    doc.producers
      .forEach(d => this.addProducer(new Producer(this, d)))
  }
  addProducer(arg: Producer) {
    this._producers.push(arg)
    this._totalProduction += arg.production
  }
  get name() { return this._name }
  get demand() { return this._demand }
  set demand(arg: any) { this._demand = parseInt(arg) }
  get price() { return this._price }
  set price(arg: any) { this._price = parseInt(arg) }
  get totalProduction() { return this._totalProduction }
  set totalProduction(arg: number) { this._totalProduction = arg }
  get producers() { return this._producers.slice() }
  get shortfall() {
    return this._demand - this._totalProduction
  }
  get profit() {
    return this.demandValue - this.demandCost
  }
  get demandValue() {
    return Math.min(this._demand, this._totalProduction) * this._price
  }
  get demandCost() {
    let remainingDemand = this._demand
    let result = 0

    this._producers
      .sort((a, b) => a.cost - b.cost)
      .forEach(p => {
        const contribution = Math.min(remainingDemand, p.production)
        remainingDemand -= contribution
        result += contribution * p.cost
      })

    return result
  }
}

export function sampleProvinceData(): ProvinceInterface {
  return {
    name: 'Asia',
    demand: 30,
    price: 20,
    producers: [
      { name: 'Byzantium', cost: 10, production: 9 },
      { name: 'Attalia', cost: 12, production: 10 },
      { name: 'Sinope', cost: 10, production: 6 }
    ]
  }
}
