export interface IProductData {
  Category: string,
  Name: string,
  Size: string[],
  Description: string,
  Price: number,
  Id: number
}

export const productsMockData: IProductData[] = [
  {
    Id: 1,
    Category: 'clothes',
    Name: 'bans',
    Size: ['10kg','1m','50cm'],
    Description: 'very good',
    Price: 100
  },
  {
    Id: 2,Category: 'food',
    Name: 'shaorma',
    Size: ['15kg','',''],
    Description: 'yammy',
    Price: 44
  },
  {
    Id: 3,Category: 'cars',
    Name: 'mercedes',
    Size: ['3000kg','5m','7m'],
    Description: 'fast',
    Price: 100000
  },
  {
    Id: 4,Category: 'material',
    Name: 'sand',
    Size: ['3000kg','',''],
    Description: 'fast',
    Price: 100000
  }
]
