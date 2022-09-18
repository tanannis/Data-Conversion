const { Parser } = require("json2csv");
const { getBillsVoteData } = require("./index");

const jsonToCSVParser = new Parser();

const billsVoteData = getBillsVoteData();
const billsSupportOpposeCount = jsonToCSVParser.parse(billsVoteData);

console.log(billsSupportOpposeCount);
