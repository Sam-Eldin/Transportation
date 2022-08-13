export interface CustomerOrdersData{
  Id: number,
  Name: string,
  Status: number,
  Date: string,
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
    Date: '12/08/2022',
    Location: 'local',
    Price: 15.5,
    Company: 'JimmyTech'
  },
  {
    Id: 12345678,
    Name: 'table',
    Status: Status.accepted,
    Date: '12/08/2022',
    Location: 'local',
    Price: 15.5,
    Company: 'JimmyTech'
  },
  {
    Id: 1234567,
    Name: 'table',
    Status: Status.rejected,
    Date: '12/08/2022',
    Location: 'local',
    Price: 15.5,
    Company: 'JimmyTech'
  },
]
