/*
person - a legislator elected to government

legislator = {
  id: integer,
  name: string
}
*/

const csvToJson = require("convert-csv-to-json");
const legislators = csvToJson
	.fieldDelimiter(",")
	.getJsonFromCsv("original-csv-files/legislators.csv");

console.log(legislators);
/*
[
  { id: '904789', name: 'Rep. Don Bacon (R-NE-2)' },
  { id: '1603850', name: 'Rep. Jamaal Bowman (D-NY-16)' },
  { id: '1852382', name: 'Rep. Cori Bush (D-MO-1)' },
  { id: '904796', name: 'Rep. Brian Fitzpatrick (R-PA-1)' },
  { id: '15318', name: 'Rep. Andrew Garbarino (R-NY-2)' },
  { id: '1269775', name: 'Rep. Anthony Gonzalez (R-OH-16)' },
  { id: '412649', name: 'Rep. John Katko (R-NY-24)' },
  { id: '412421', name: 'Rep. Adam Kinzinger (R-IL-16)' },
  { id: '15367', name: 'Rep. Nicole Malliotakis (R-NY-11)' },
  { id: '412487', name: 'Rep. David McKinley (R-WV-1)' },
  { id: '1269767', name: 'Rep. Alexandria Ocasio-Cortez (D-NY-14)' },
  { id: '905216', name: 'Rep. Ilhan Omar (D-MN-5)' },
  { id: '1269778', name: 'Rep. Ayanna Pressley (D-MA-7)' },
  { id: '412393', name: 'Rep. Tom Reed (R-NY-23)' },
  { id: '400380', name: 'Rep. Chris Smith (R-NJ-4)' },
  { id: '1269790', name: 'Rep. Rashida Tlaib (D-MI-13)' },
  { id: '400414', name: 'Rep. Fred Upton (R-MI-6)' },
  { id: '17941', name: 'Rep. Jeff Van Drew (R-NJ-2)' },
  { id: '400440', name: 'Rep. Don Young (R-AK-1)' },
  { id: '412211', name: 'Rep. John Yarmuth (D-KY-3)' }
]
*/
module.exports = legislators;
