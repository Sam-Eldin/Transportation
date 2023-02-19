// import {ICardData} from "./common/card.interface,ts";
//
// export const cardData: ICardData[] = [
//   /*************************************-----Apartment----***********************************************************************************/
//   {
//     Id: 123456789,
//     Category : 'Apartment',
//     Company: 'Mothership',
//     Name: '1 room',
//     Price: 1500,
//     space: 40,
//     Description: 'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment:1 room (living room/parents/child/workroom), kitchen and dining area, bathroom\n' +
//       'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\n' +
//       'Wrapping and transporting household appliances\n' +
//       'Transport and distribution of up to 60 boxes in the rooms\n' + 'not included service' +
//       'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\n' +
//       'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\n' +
//       'Screen over 75 inches (extra charge)\n' +
//       'Item over 2.5 meters high/ Item attached to the wall\n' +
//       'Art objects, jewelry or antiques worth over NIS 20,000\n' +
//       'Items worth over NIS 30,000\n' +
//       'Does not include packing services',
//
//   },
//
//   {
//     Id: 123456788,
//     Category : 'Apartment',
//     Company: 'Finditparts',
//     Name: '2 rooms',
//     Price: 2500,
//     space: 80,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living room, one additional room (parents/child/workroom), kitchen and dining area, bathroom\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 60 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
//   {
//     Id: 123456787,
//     Category : 'Apartment',
//     Company: 'Finditparts',
//     Name: '3 rooms',
//     Price: 3300,
//     space: 80,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, two additional room (parents/child/workroom), kitchen and dining area, bathroom\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 60 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//
//   {
//     Id: 123456786,
//     Category : 'Apartment',
//     Company: 'Mothership',
//     Name: '3 rooms and porch',
//     Price: 3800,
//     space: 80 + 15,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, two additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 60 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//     Id: 123456785,
//     Category : 'Apartment',
//     Company: 'Mothership',
//     Name: '4 rooms',
//     Price: 4200,
//     space: 110,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, three additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 3 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 80 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//     Id: 123456784,
//     Category : 'Apartment',
//     Company: 'Mothership',
//     Name: '4 rooms and porch',
//     Price: 4700,
//     space: 110 + 20,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, three additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 80 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//     Id: 123456783,
//     Category : 'Apartment',
//     Company: 'Finditparts',
//     Name: '5 rooms',
//     Price: 5100,
//     space: 130,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 110 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//     Id: 123456782,
//     Category : 'Apartment',
//     Company: 'Mothership',
//     Name: '5 rooms and porch',
//     Price: 5600,
//     space: 130 + 20,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 110 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//   Id: 123456781,
//   Category : 'Apartment',
//   Company: 'Mothership',
//   Name: 'duplicate',
//   Price: 10000,
//   space: 250,
//   Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
// '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
// '      \'Wrapping and transporting household appliances\\n\' +\n' +
// '      \'Transport and distribution of up to 200 boxes in the rooms\\n\' + \'not included service\' +\n' +
// '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
// '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
// '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
// '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
// '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
// '      \'Items worth over NIS 30,000\\n\' +\n' +
// '      \'Does not include packing services\',',
//
//
// },
//   {
//   Id: 123456780,
//   Category : 'Apartment',
//   Company: 'Finditparts',
//   Name: 'duplicate and porch',
//   Price: 10000,
//   space: 250 + 60,
//   Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
// '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
// '      \'Wrapping and transporting household appliances\\n\' +\n' +
// '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
// '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
// '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
// '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
// '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
// '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
// '      \'Items worth over NIS 30,000\\n\' +\n' +
// '      \'Does not include packing services\',',
//
//
// },
//   /*************************************-----Office----***********************************************************************************/
//
//   {
//     Id: 223456789,
//     Category : 'office',
//     Company: 'Finditparts',
//     Name: '1 room',
//     Price: 350,
//     space: 60,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//     Id: 223456788,
//     Category : 'Office',
//     Company: 'Finditparts',
//     Name: '2 room',
//     Price: 1000,
//     space: 80,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//     Id: 223456787,
//     Category : 'Office',
//     Company: 'Finditparts',
//     Name: '3 room',
//     Price: 2000,
//     space: 110,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   {
//     Id: 223456786,
//     Category : 'Office',
//     Company: 'Finditparts',
//     Name: '4 room',
//     Price: 3500,
//     space: 140,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//
//   },
//   /*************************************-----Container----***********************************************************************************/
//
//   {
//   Id: 323456789,
//   Category : 'Container',
//   Company: 'Finditparts',
//   Name: 'Dry Cube ',
//   Price: 700,
//   space: 33,
//   Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
// '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
// '      \'Wrapping and transporting household appliances\\n\' +\n' +
// '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
// '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
// '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
// '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
// '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
// '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
// '      \'Items worth over NIS 30,000\\n\' +\n' +
// '      \'Does not include packing services\',',
//
//
// },
//   {
//   Id: 323456788,
//   Category : 'Container',
//   Company: 'Finditparts',
//   Name: 'High Cube',
//   Price: 800,
//   space: 37,
//   Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
// '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
// '      \'Wrapping and transporting household appliances\\n\' +\n' +
// '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
// '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
// '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
// '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
// '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
// '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
// '      \'Items worth over NIS 30,000\\n\' +\n' +
// '      \'Does not include packing services\',',
//
//
// },
//   {
//   Id: 323456787,
//   Category : 'Container',
//   Company: 'Finditparts',
//   Name: 'High Cube ',
//   Price: 1500,
//   space: 75,
//   Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
// '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
// '      \'Wrapping and transporting household appliances\\n\' +\n' +
// '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
// '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
// '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
// '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
// '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
// '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
// '      \'Items worth over NIS 30,000\\n\' +\n' +
// '      \'Does not include packing services\',',
//
//
// },
//
//   {
//     Id: 323456786,
//     Category : 'Container',
//     Company: 'Finditparts',
//     Name: 'Pallet Wide ',
//     Price: 2000,
//     space: 85,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the apartment: living rooms, four additional room (parents/child/workroom), kitchen and dining area, bathroom, porch till 15 n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
//   /*************************************-----Factory----***********************************************************************************/
//
//   {
//     Id: 423456789,
//     Category : 'Factory',
//     Company: 'Finditparts',
//     Name: 'plastic bottles',
//     Price: 25000,
//     space: 1000,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the factory:50 machine n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
//   {
//     Id: 423456788,
//     Category : 'Factory',
//     Company: 'Finditparts',
//     Name: 'dress factory',
//     Price: 30000,
//     space: 1200,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the factory:80 machine n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
//
//   {
//     Id: 423456787,
//     Category : 'Factory',
//     Company: 'Finditparts',
//     Name: 'shampoo factory',
//     Price: 40000,
//     space: 2000,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurance.  The contents of the factory:100 machine n\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
//   /*************************************-----Furniture----***********************************************************************************/
//
//   {
//     Id: 423456787,
//     Category : 'Furniture',
//     Company: 'Finditparts',
//     Name: ' 1 surface',
//     Price: 250,
//     space: 1,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurancen\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
//   {
//     Id: 423456787,
//     Category : 'Furniture',
//     Company: 'Finditparts',
//     Name: ' 2 surface',
//     Price: 350,
//     space: 1,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurancen\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
//   {
//     Id: 423456787,
//     Category : 'Furniture',
//     Company: 'Finditparts',
//     Name: ' 5 surface',
//     Price: 800,
//     space: 1,
//     Description: '  Description: \'Crane services - at the discretion of the company at no extra charge. Full transport insurancen\\n\' +\n' +
//       '      \'Dismantling, transport and assembly of up to 4 wardrobes and standard beds including mattresses\\n\' +\n' +
//       '      \'Wrapping and transporting household appliances\\n\' +\n' +
//       '      \'Transport and distribution of up to 230 boxes in the rooms\\n\' + \'not included service\' +\n' +
//       '      \'Transportation within a range of up to 30 km between the apartments (additional payment over 30 km)\\n\' +\n' +
//       '      \'Items over 65 kg such as a piano, an aquarium, a fitness system, a jacuzzi, a pool table, an outdoor kitchen system, etc.\\n\' +\n' +
//       '      \'Screen over 75 inches (extra charge)\\n\' +\n' +
//       '      \'Item over 2.5 meters high/ Item attached to the wall\\n\' +\n' +
//       '      \'Art objects, jewelry or antiques worth over NIS 20,000\\n\' +\n' +
//       '      \'Items worth over NIS 30,000\\n\' +\n' +
//       '      \'Does not include packing services\',',
//
//   },
// ]
