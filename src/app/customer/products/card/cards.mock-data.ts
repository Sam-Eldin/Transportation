export interface IProductDimension {
  height: number;
  width: number;
  length: number;
  weight: number;
}

export interface ICardData{
  Id: number,
  Name: string,
  Price: number,
  Company: string,
  Dimension: IProductDimension,
  Description: string
}

export const cardData: ICardData[] = [
  {
    Id: 123456789,
    Name: 'table',
    Price: 15.5,
    Company: 'JimmyTech',
    Dimension: {height: 10, weight: 20, length: 30, width: 40},
    Description: 'color material ..'
  },
  {
    Id: 12345678,
    Name: 'table',
    Price: 15.5,
    Company: 'SamTech',
    Dimension: {height: 10, weight: 20, length: 30, width: 40},
    Description: 'color material ..'
  },
  {
    Id: 1234567,
    Name: 'table',
    Price: 15.5,
    Company: 'RabeaTech',
    Dimension: {height: 10, weight: 20, length: 30, width: 40},
    Description: 'color material ..'
  },
  {
    Id: 1234567,
    Name: 'table',
    Price: 15.5,
    Company: 'RabeaTech',
    Dimension: {height: 10, weight: 20, length: 30, width: 40},
    Description: 'color material ..'
  },
]
