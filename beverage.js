"use strict";

const readFromFile = require("./src/utilitiesLib").readFromFile;
const writeIntoFile = require("./src/utilitiesLib").writeIntoFile;
const isFilePresent = require("./src/utilitiesLib").isFilePresent;
const performAction = require("./src/performAction").performAction;

const main = function() {
	const args = process.argv.slice(2);
	const path = "./transactionsData.json";
	const timeStamp = function() {
		return new Date();
	};
	const result = performAction(
		args,
		isFilePresent,
		readFromFile,
		writeIntoFile,
		timeStamp,
		path
	);
	console.log(result);
};

main();
