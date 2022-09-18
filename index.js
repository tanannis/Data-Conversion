const bills = require("./data/bills");
const legislators = require("./data/legislators");
const voteResults = require("./data/voteResults");
const votes = require("./data/votes");

// Helper function to count the votes
const countVotesByKey = (key) => {
	const map = {};

	for (const voteResult of voteResults) {
		const { vote_type } = voteResult;
		const id = voteResult[key];

		let voteType;
		if (vote_type === "1") {
			voteType = "yesCount";
		} else {
			voteType = "noCount";
		}

		if (id in map) {
			if (map[id][voteType]) {
				map[id][voteType]++;
			} else {
				map[id][voteType] = 1;
			}
		} else {
			map[id] = {};
			map[id][voteType] = 1;
		}
	}

	return map;
};

/* 1. For every legislator in the dataset, how many bills did the legislator support (voted for the bill)? How many bills 
did the legislator oppose? 
  legislator = {
    id: integer
    name: string
    numSupportedBills: integer,
    numOpposedBills: integer
  }
*/
const getLegislatorsVoteData = () => {
	const map = countVotesByKey("legislator_id");

	for (let legislator of legislators) {
		const { id } = legislator;

		if (id in map) {
			const { yesCount, noCount } = map[id];
			legislator.numSupportedBills = yesCount;
			legislator.numOpposedBills = noCount;
		} else {
			legislator.numSupportedBills = 0;
			legislator.numOpposedBills = 0;
		}
	}
	// console.log(legislators)
	return legislators;
};

/* 2. For every bill in the dataset, how many legislators supported the bill? How many legislators opposed the bill? Who was the primary sponsor of the bill?
  billData = {
    id: integer,
    name: string,
    supporterCount: integer,
    opposerCount: integer,
    primarySponsor: string
  }
*/
const getBillsVoteData = () => {
	const votesMap = countVotesByKey("vote_id");

	const legislatorsMap = {};
	for (const { id, name } of legislators) {
		legislatorsMap[id] = name;
	}

	for (const vote of votes) {
		const { id, bill_id } = vote;
		// match vote_id with bill_id, and switch the key from vote_id to bill_id
		votesMap[bill_id] = votesMap[id];
		// remove the previous data using vote_id from votesMap
		delete votesMap[id];
	}

	for (let bill of bills) {
		const { id, title, sponsor_id } = bill;
		bill.name = title;

		if (id in votesMap) {
			const { yesCount, noCount } = votesMap[id];
			bill.supporterCount = yesCount;
			bill.opposerCount = noCount;
		} else {
			bill.supporterCount = 0;
			bill.opposerCount = 0;
		}

		// find primary sponsors from within legislators
		if (sponsor_id in legislatorsMap) {
			bill.primarySponsor = legislatorsMap[sponsor_id];
		} else {
			bill.primarySponsor = "secret sponsor";
		}

		// clean up old keys
		delete bill.sponsor_id;
		delete bill.title;
	}
	// console.log(bills);
	return bills;
};

module.exports = {
	getLegislatorsVoteData,
	getBillsVoteData,
};
