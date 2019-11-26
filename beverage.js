"use strict";

const readFromFile = require("./src/utilitiesLib").readFromFile;
const writeIntoFile = require("./src/utilitiesLib").writeIntoFile;
const isFilePresent = require("./src/utilitiesLib").isFilePresent;
const timeStamp = require("./src/utilitiesLib").timeStamp;
const validateAndPerformAction = require("./src/performAction")
	.validateAndPerformAction;

const main = function() {
	const args = process.argv.slice(2);

	const path = "./transactionsData.json";

	const displayMsg = validateAndPerformAction(
		args,
		isFilePresent,
		readFromFile,
		writeIntoFile,
		timeStamp,
		path
	);
	console.log(displayMsg);
};

main();
