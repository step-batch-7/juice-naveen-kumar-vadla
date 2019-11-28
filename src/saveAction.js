"use strict";

const generateTransactionRecord = function(input, timeStamp) {
	const indexOfEid = input.indexOf("--empId");
	const indexOfBev = input.indexOf("--beverage");
	const indexOfQty = input.indexOf("--qty");

	return {
		empId: +input[indexOfEid + 1],
		beverage: input[indexOfBev + 1],
		qty: +input[indexOfQty + 1],
		date: timeStamp()
	};
};

const save = function(
	args,
	isFilePresent,
	readFromFile,
	writeIntoFile,
	timeStamp,
	path
) {
	let record = [];
	if (isFilePresent(path)) {
		const data = readFromFile(path);
		record = JSON.parse(data || "[]");
	}
	const newRecord = generateTransactionRecord(args, timeStamp);
	record.push(newRecord);
	const stringifiedRecord = JSON.stringify(record);
	writeIntoFile(path, stringifiedRecord);
	return newRecord;
};

exports.save = save;
exports.generateTransactionRecord = generateTransactionRecord;
