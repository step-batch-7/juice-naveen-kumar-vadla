"use strict";

const generateTransactionRecord = function(input, timeStamp) {
	const indexOfEid = input.indexOf("--empId") + 1;
	const indexOfBev = input.indexOf("--beverage") + 1;
	const indexOfQty = input.indexOf("--qty") + 1;

	return {
		empId: +input[indexOfEid],
		beverage: input[indexOfBev],
		qty: +input[indexOfQty],
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
	let record = {};
	if (isFilePresent(path)) {
		const data = readFromFile(path);
		record = JSON.parse(data || "{}");
	}
	const newRecord = generateTransactionRecord(args, timeStamp);
	const indexOfEid = args.indexOf("--empId") + 1;
	const empId = args[indexOfEid];
	const recordKeys = Object.keys(record);
	if (recordKeys.includes(empId)) {
		record[empId].push(newRecord);
	} else {
		record[empId] = [newRecord];
	}
	const stringifiedRecord = JSON.stringify(record);
	writeIntoFile(path, stringifiedRecord);
	return newRecord;
};

exports.save = save;
exports.generateTransactionRecord = generateTransactionRecord;
