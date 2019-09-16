export interface Performance {
  playID: string
  audience: number
}

export interface EnrichPerformance extends Performance {
  play: Play
  amount: number
  volumeCredits: number
}

export interface Invoice {
  customer: string
  performances: Performance[]
}

export interface Play {
  name: string,
  type: string
}

export interface Plays {
  [key: string]: Play
}

export interface Statement {
  customer: string
  performances: EnrichPerformance[]
  totalAmount: number
  totalVolumeCredits: number
}
