"use strict";

const generateTransactionRecord = function(input, timeStamp) {
	return {
		empId: +input[1],
		beverage: input[2],
		qty: +input[3],
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
