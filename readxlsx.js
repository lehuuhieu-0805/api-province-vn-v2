const axios = require('axios');
const XLSX = require('xlsx');

const workbook = XLSX.readFile('./dataset.xls');

let worksheet = workbook.Sheets[workbook.SheetNames[0]];

const listAddressTemp = [];

let addressTemp = {};

for (const cell in worksheet) {
  const cellAsString = cell.toString();

  if (cellAsString[1] !== 'r' && cellAsString !== 'm' && cellAsString[1] > 1) {
    if (cellAsString[0] === 'A') {
      addressTemp.province = worksheet[cell].v;
    }
    if (cellAsString[0] === 'B') {
      addressTemp.district = worksheet[cell].v;

      listAddressTemp.push(addressTemp);

      addressTemp = {};
    }
  }
}

let listAddress = [];

listAddressTemp.map((el) => {
  const address = el.district + ', ' + el.province;
  listAddress = [...listAddress, address];
});

// console.log(listAddress);

// call api to import data to database
// Promise.all(listAddress.map(async (address, index) => {
//   axios({
//     url: 'http://localhost:4000/api/v1/address',
//     method: 'post',
//     data: {
//       name: address
//     }
//   }).then(() => console.log(`success ${index}`))
//     .catch(error => console.log(error));
// }));