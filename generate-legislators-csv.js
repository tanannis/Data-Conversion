const { Parser } = require("json2csv");
const { getLegislatorsVoteData } = require("./index");

const jsonToCSVParser = new Parser();

const legislatorsVoteData = getLegislatorsVoteData();
const legislatorsSupportOpposeCount =
	jsonToCSVParser.parse(legislatorsVoteData);

console.log(legislatorsSupportOpposeCount);
