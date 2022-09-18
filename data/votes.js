/*
vote - a vote on a particular bill
{
  id: integer,
  billId: integer
}
*/
const csvToJson = require("convert-csv-to-json");
const votes = csvToJson
	.fieldDelimiter(",")
	.getJsonFromCsv("original-csv-files/votes.csv");

console.log(votes);
/*
[
  { id: '3314452', bill_id: '2900994' },
  { id: '3321166', bill_id: '2952375' }
]
*/
module.exports = votes;
