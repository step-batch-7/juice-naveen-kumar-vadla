"use strict";
const {
	readFromFile,
	writeIntoFile,
	isFilePresent
} = require("./src/utilitiesLib");
const performAction = require("./src/performAction").performAction;
const {
	timeStamp,
	getDataStorePath
} = require("./src/config");

const main = function () {
	const args = process.argv.slice(2);
	const path = getDataStorePath(process.env);
	const timeStampWithEnv = timeStamp.bind(null, process.env);
	const result = performAction(
		args,
		isFilePresent,
		readFromFile,
		writeIntoFile,
		timeStampWithEnv,
		path
	);
	console.log(result);
};

main();