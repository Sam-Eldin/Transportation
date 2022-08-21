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
export const ordersMockData: IOrdersData[] = [
  {
    Id: 123456789,
    Name: 'table',
    Date: '12/08/2022',
    UntilDate: '11/09/2022',
    Location: 'local',
    ToLocation: 'haifa',
    Price: 15,
    Status: Status.pending,
    Driver: 'Jimmy',
    TruckNumber: 11111
  },
  {
    Id: 12348888,
    Name: 'steal',
    Date: '1/08/2022',
    UntilDate: '1/09/2022',
    Location: 'local',
    ToLocation: 'majdal shams',
    Price: 1500,
    Status: Status.accepted,
    Driver: 'ram',
    TruckNumber: 3456798
  },
  {
    Id: 178876322,
    Name: 'car',
    Date: '19/09/2022',
    UntilDate: '11/11/2022',
    Location: 'local',
    ToLocation: 'tel aviv',
    Price: 30000,
    Status: Status.rejected,
    Driver: 'sam',
    TruckNumber: 123345
  }
]
