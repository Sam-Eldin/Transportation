export interface IProductData {
  Category: string,
  Name: string,
  Size: {
    height: number;
    width: number;
    length: number;
    weight: number;
  },
  Description: string,
  Price: number,
  Id: number
}
