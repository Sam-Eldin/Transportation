export interface IOrdersData{
  Id: number,
  Name: string,
  Date: string,
  UntilDate: string,
  Location: string,
  ToLocation: string,
  Price: number,
  Status: number,
  Driver: string,
  TruckNumber: number
}

export enum Status { pending, rejected, accepted}
