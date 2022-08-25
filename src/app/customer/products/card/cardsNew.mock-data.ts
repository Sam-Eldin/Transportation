
export interface ICardData{
  Id: number,
  Name: string,
  Price: number,
  Company: string,
  space: number,
  Description: string,
  category : string,
}

export const cardData: ICardData[] = [
  {
    Id: 123456789,
    category : 'Apartment',
    Company: 'Ace',
    Name: '1 room',
    Price: 1500,
    space: 40,
    Description: 'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living room, two additional rooms (parents/child/workroom), kitchen and dining area, bathroom\n' +
      'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\n' +
      'Wrapping and transporting household appliances\n' +
      'Transport and distribution of up to 60 boxes in the rooms\n' +
      'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\n' +
      'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\n' +
      'Screen over 75 inches (extra charge)\n' +
      'Item over 2.5 meters high/ Item attached to the wall\n' +
      'Art objects, jewelry or antiques worth over NIS 20,000\n' +
      'Items worth over NIS 30,000\n' +
      'Does not include packing services',

  },
  {
    Id: 123456788,
    category : 'Apartment',
    Company: 'JimmyTech',
    Name: '2 rooms',
    Price: 2500,
    space: 60,
    Description: 'color material ..',
  },
  {
    Id: 123456787,
    category : 'Apartment',
    Company: 'JimmyTech',
    Name: '3 rooms',
    Price: 3300,
    space: 80,
    Description: 'color material ..',

  },
  {
    Id: 123456786,
    category : 'Apartment',
    Company: 'JimmyTech',
    Name: '1 room',
    Price: 3300,
    space: 40,
    Description: 'color material ..',

  },
  ]
