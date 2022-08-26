
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
    Company: 'Ace moving',
    Name: '1 room',
    Price: 1500,
    space: 40,
    Description: 'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment:1 room (living room/parents/child/workroom), kitchen and dining area, bathroom\n' +
      'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\n' +
      'Wrapping and transporting household appliances\n' +
      'Transport and distribution of up to 60 boxes in the rooms\n' + 'not included service' +
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
    Company: 'Aviv moving',
    Name: '2 rooms',
    Price: 2500,
    space: 80,
    Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living room, one additional room (parents/child/workroom), kitchen and dining area, bathroom\\n\' +\n' +
      '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
      '      \'Wrapping and transporting household appliances\\n\' +\n' +
      '      \'Transport and distribution of up to 60 boxes in the rooms\\n\' + \'not included service\' +\n' +
      '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
      '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
      '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
      '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
      '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
      '      \'Items worth over NIS 30,000\\n\' +\n' +
      '      \'Does not include packing services\',',

  },
  {
    Id: 123456787,
    category : 'Apartment',
    Company: 'Aviv moving',
    Name: '3 rooms',
    Price: 3300,
    space: 80,
    Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, two additional room (parents/child/workroom), kitchen and dining area, bathroom\\n\' +\n' +
      '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
      '      \'Wrapping and transporting household appliances\\n\' +\n' +
      '      \'Transport and distribution of up to 60 boxes in the rooms\\n\' + \'not included service\' +\n' +
      '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
      '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
      '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
      '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
      '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
      '      \'Items worth over NIS 30,000\\n\' +\n' +
      '      \'Does not include packing services\',',


  },

  {
    Id: 123456786,
    category : 'Apartment',
    Company: 'Interval moving',
    Name: '3 rooms and porch',
    Price: 3800,
    space: 80 + 15,
    Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, two additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
      '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
      '      \'Wrapping and transporting household appliances\\n\' +\n' +
      '      \'Transport and distribution of up to 60 boxes in the rooms\\n\' + \'not included service\' +\n' +
      '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
      '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
      '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
      '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
      '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
      '      \'Items worth over NIS 30,000\\n\' +\n' +
      '      \'Does not include packing services\',',


  },
  {
    Id: 123456785,
    category : 'Apartment',
    Company: 'Ace moving',
    Name: '4 rooms',
    Price: 4200,
    space: 110,
    Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, three additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
      '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
      '      \'Wrapping and transporting household appliances\\n\' +\n' +
      '      \'Transport and distribution of up to 80 boxes in the rooms\\n\' + \'not included service\' +\n' +
      '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
      '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
      '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
      '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
      '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
      '      \'Items worth over NIS 30,000\\n\' +\n' +
      '      \'Does not include packing services\',',


  },
  {
    Id: 123456784,
    category : 'Apartment',
    Company: 'Interval moving',
    Name: '4 rooms and porch',
    Price: 4700,
    space: 110 + 20,
    Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, three additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
      '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
      '      \'Wrapping and transporting household appliances\\n\' +\n' +
      '      \'Transport and distribution of up to 80 boxes in the rooms\\n\' + \'not included service\' +\n' +
      '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
      '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
      '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
      '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
      '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
      '      \'Items worth over NIS 30,000\\n\' +\n' +
      '      \'Does not include packing services\',',


  },
  {
    Id: 123456783,
    category : 'Apartment',
    Company: 'Aviv moving',
    Name: '5 rooms',
    Price: 5100,
    space: 130,
    Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
      '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
      '      \'Wrapping and transporting household appliances\\n\' +\n' +
      '      \'Transport and distribution of up to 110 boxes in the rooms\\n\' + \'not included service\' +\n' +
      '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
      '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
      '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
      '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
      '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
      '      \'Items worth over NIS 30,000\\n\' +\n' +
      '      \'Does not include packing services\',',


  },
  {
    Id: 123456782,
    category : 'Apartment',
    Company: 'Interval moving',
    Name: '5 rooms and porch',
    Price: 5600,
    space: 130 + 20,
    Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
      '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
      '      \'Wrapping and transporting household appliances\\n\' +\n' +
      '      \'Transport and distribution of up to 110 boxes in the rooms\\n\' + \'not included service\' +\n' +
      '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
      '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
      '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
      '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
      '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
      '      \'Items worth over NIS 30,000\\n\' +\n' +
      '      \'Does not include packing services\',',


  },
  {
  Id: 123456781,
  category : 'Apartment',
  Company: 'Interval moving',
  Name: 'duplicate',
  Price: 10000,
  space: 250,
  Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
'      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
'      \'Wrapping and transporting household appliances\\n\' +\n' +
'      \'Transport and distribution of up to 200 boxes in the rooms\\n\' + \'not included service\' +\n' +
'      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
'      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
'      \'Screen over 75 inches (extra charge)\\n\' +\n' +
'      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
'      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
'      \'Items worth over NIS 30,000\\n\' +\n' +
'      \'Does not include packing services\',',


},
  {
  Id: 123456781,
  category : 'Apartment',
  Company: 'Aviv moving',
  Name: 'duplicate and porch',
  Price: 10000,
  space: 250 + 60,
  Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
'      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
'      \'Wrapping and transporting household appliances\\n\' +\n' +
'      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
'      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
'      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
'      \'Screen over 75 inches (extra charge)\\n\' +\n' +
'      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
'      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
'      \'Items worth over NIS 30,000\\n\' +\n' +
'      \'Does not include packing services\',',


},
  ]
