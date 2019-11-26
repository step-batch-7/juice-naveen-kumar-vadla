"use strict";

const generateTransactionRecord = function(input, timeStamp) {
	const indexOfEid = input.indexOf("--empId") + 1;
	const indexOfBev = input.indexOf("--beverage") + 1;
	const indexOfQty = input.indexOf("--qty") + 1;

	return {
		"Employee ID": +input[indexOfEid],
		Beverage: input[indexOfBev],
		Quantity: +input[indexOfQty],
		Date: timeStamp()
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
		record = JSON.parse(data);
	}
	const recordKeys = Object.keys(record);
	const indexOfEid = args.indexOf("--empId") + 1;
	const empId = args[indexOfEid];
	const newRecord = generateTransactionRecord(args, timeStamp);
	if (recordKeys.includes(empId)) {
		record[empId].push(newRecord);
	} else {
		record[empId] = [newRecord];
	}
	const tableColumns = Object.keys(newRecord);
	const tableValues = Object.values(newRecord);
	const stringifiedRecord = JSON.stringify(record);
	writeIntoFile(path, stringifiedRecord);
	return "Transaction Recorded:\n" + tableColumns + "\n" + tableValues;
};

exports.save = save;
