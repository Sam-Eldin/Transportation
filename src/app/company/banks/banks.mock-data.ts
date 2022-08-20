export interface IBanksData {
  Number: number,
  Name: string,
  Account: number,
  Balance: number,
}

export const banksMockData: IBanksData[] = [
  {
    Number: 12,
    Name: 'boalem',
    Account: 123123,
    Balance: 12000
  },
  {
    Number: 10,
    Name: 'laumi',
    Account: 122300,
    Balance: 1400
  },
  {
    Number: 11,
    Name: 'diskont',
    Account: 100221,
    Balance: 500
  },
  {
    Number: 4,
    Name: 'eahav',
    Account: 400122,
    Balance: 3000
  },
  {
    Number: 99,
    Name: 'israel',
    Account: 899843,
    Balance: 7600
  }
]
