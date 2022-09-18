/*
bill - a piece of legislation
{
  id: integer,
  name: string
}
*/

const csvToJson = require("convert-csv-to-json");
const bills = csvToJson
	.fieldDelimiter(",")
	.getJsonFromCsv("original-csv-files/bills.csv");

console.log(bills);

/* 
[
  {
    id: '2952375',
    title: 'H.R. 5376: Build Back Better Act',
    sponsor_id: '412211'
  },
  {
    id: '2900994',
    title: 'H.R. 3684: Infrastructure Investment and Jobs Act',
    sponsor_id: '400100'
  }
] 
*/

module.exports = bills;
