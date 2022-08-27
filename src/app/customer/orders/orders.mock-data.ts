export interface CustomerOrdersData{
  Id: number,
  Name: string,
  Status: number,
  Order_Date: string,
  Receive_Date: string,
  Location: string,
  Price: number,
  Company: string
}

export enum Status { pending, rejected, accepted}
export const customerOrdersData: CustomerOrdersData[] = [
  {
    Id: 123456789,
    Name: 'table',
    Status: Status.pending,
    Order_Date: '12/08/2022',
    Receive_Date: '30/08/2022',
    Location: 'local',
    Price: 15.5,
    Company: 'JimmyTech'
  },
  {
    Id: 12345678,
    Name: 'table',
    Status: Status.accepted,
    Order_Date: '12/08/2022',
    Receive_Date: '30/08/2022',
    Location: 'local',
    Price: 15.5,
    Company: 'SamTech'
  },
  {
    Id: 1234567,
    Name: 'table',
    Status: Status.rejected,
    Order_Date: '12/08/2022',
    Receive_Date: '30/08/2022',
    Location: 'local',
    Price: 15.5,
    Company: 'RabeaTech'
  },
]
