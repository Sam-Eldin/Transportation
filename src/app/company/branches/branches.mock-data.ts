export interface IBranchData {
  Id: number,
  Location: string,
  Name: string,
  ManagerName: string,
  Phone: string
}

export const branchesMockData: IBranchData[] = [
  {
    Id: 1,
    Location: 'Majdal Shams',
    Name: 'Fasty Trucks',
    ManagerName: 'Robert djr',
    Phone: '0501112223'
  },
  {
    Id: 2,
    Location: 'Massada',
    Name: 'meme Trucks',
    ManagerName: 'hmood ',
    Phone: '0501112443'
  },
  {
    Id: 3,
    Location: 'haifa',
    Name: 'haifa Trucks',
    ManagerName: 'amos',
    Phone: '0501992223'
  }
]
