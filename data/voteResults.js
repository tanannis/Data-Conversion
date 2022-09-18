/*
voteResult - a vote cast by a legislator for/against a bill
{
  id: integer,
  legislatorId: integer,
  voteId: integer,
  voteType: integer (1 for yes 2 for no)
}

*/

const csvToJson = require("convert-csv-to-json");
const voteResults = csvToJson
	.fieldDelimiter(",")
	.getJsonFromCsv("original-csv-files/vote_results.csv");

console.log(voteResults);
/*
[
  {
    id: '92516784',
    legislator_id: '400440',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516770',
    legislator_id: '17941',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516768',
    legislator_id: '400414',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516753',
    legislator_id: '400380',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516734',
    legislator_id: '412393',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516711',
    legislator_id: '412487',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516702',
    legislator_id: '15367',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516688',
    legislator_id: '412421',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516683',
    legislator_id: '412649',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516647',
    legislator_id: '1269775',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516640',
    legislator_id: '15318',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516632',
    legislator_id: '904796',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516579',
    legislator_id: '904789',
    vote_id: '3321166',
    vote_type: '2'
  },
  {
    id: '92516553',
    legislator_id: '1269790',
    vote_id: '3321166',
    vote_type: '1'
  },
  {
    id: '92516513',
    legislator_id: '1269778',
    vote_id: '3321166',
    vote_type: '1'
  },
  {
    id: '92516500',
    legislator_id: '905216',
    vote_id: '3321166',
    vote_type: '1'
  },
  {
    id: '92516499',
    legislator_id: '1269767',
    vote_id: '3321166',
    vote_type: '1'
  },
  {
    id: '92516373',
    legislator_id: '1852382',
    vote_id: '3321166',
    vote_type: '1'
  },
  {
    id: '92516368',
    legislator_id: '1603850',
    vote_id: '3321166',
    vote_type: '1'
  },
  {
    id: '92280168',
    legislator_id: '1269790',
    vote_id: '3314452',
    vote_type: '2'
  },
  {
    id: '92280136',
    legislator_id: '1269778',
    vote_id: '3314452',
    vote_type: '2'
  },
  {
    id: '92280128',
    legislator_id: '905216',
    vote_id: '3314452',
    vote_type: '2'
  },
  {
    id: '92280127',
    legislator_id: '1269767',
    vote_id: '3314452',
    vote_type: '2'
  },
  {
    id: '92280007',
    legislator_id: '1852382',
    vote_id: '3314452',
    vote_type: '2'
  },
  {
    id: '92279998',
    legislator_id: '1603850',
    vote_id: '3314452',
    vote_type: '2'
  },
  {
    id: '92279979',
    legislator_id: '400440',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279965',
    legislator_id: '17941',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279964',
    legislator_id: '400414',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279943',
    legislator_id: '400380',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279920',
    legislator_id: '412393',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279888',
    legislator_id: '412487',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279879',
    legislator_id: '15367',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279858',
    legislator_id: '412421',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279850',
    legislator_id: '412649',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279828',
    legislator_id: '1269775',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279823',
    legislator_id: '15318',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279817',
    legislator_id: '904796',
    vote_id: '3314452',
    vote_type: '1'
  },
  {
    id: '92279758',
    legislator_id: '904789',
    vote_id: '3314452',
    vote_type: '1'
  }
]
*/
module.exports = voteResults;
