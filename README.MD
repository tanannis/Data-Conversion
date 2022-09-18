# About this project

`data` folder

- contains codes to convert each original csv to JSON data

`index.js`

- A function to get how many bills did each legislator support / oppose
- A function to get how many legislators support / oppose each bill

`generate-bills-csv.js`

- Simple code to output the new bills.csv

`generate-legislators-csv.js`

- Simple code to output the legislators-support-oppose-count.csv

`output-csv-files` folder

- contains the requested files, legislators-support-oppose-count.csv and the new bills.csv

## How to run

- If you want to check the original coverted JSON data, simply run `node relative-file-path` in the console. For example, run `node data/bills.js`.
- You can see the output CSV in the console as well, simply run `node generate-bills-csv.js` or `generate-legislators-csv.js` in the console.

## Answers to each question

### Discuss your solution’s time complexity. What trade offs did you make?

- The `getLegislatorsVoteData` function is O(2n), because there are 2 separated iterations.
- I used a hash map to store vote count of each legislator from the vote results, so matching the legislator_id from the hashmap can be O(1). This is a trade off of space to have faster look up time.
- The `getBillsVoteDate` function is also O(4n) = O(n), because there are 4 separated iterations.
- I also used a hash map to store vote count of each bill from the vote results, and another hash map to store the id and name of each legislator. This is a trade off of space to have faster look up time so matching the vote_id and bill_id can be O(1) time. It also helps to match the sponsor_id with the legislator_id.

### How would you change your solution to account for future columns that might be requested, such as “Bill Voted On Date” or “Co-Sponsors”?

- Create separate functions and use some SQL to simplify the codes.

### How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?

- I believe my solution of using the `json2csv` npm package will continue to work if I am given JSON data and need to convert to CSV

### How long did you spend working on the assignment?

- 4 hours (including reading the requirements, planning, researching, and writing up this doc)
