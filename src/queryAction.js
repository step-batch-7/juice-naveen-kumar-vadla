"use strict";

const query = function(
	args,
	isFilePresent,
	readFromFile,
	writeIntoFile,
	timeStamp,
	path
) {
	if (isFilePresent(path)) {
		const data = readFromFile(path);
		const record = JSON.parse(data || "[]");

		const indexOfEid = args.indexOf("--empId");
		const indexOfBev = args.indexOf("--beverage");
		const indexOfQty = args.indexOf("--qty");
		const indexOfDate = args.indexOf("--date");

		const empId = args[indexOfEid + 1];
		const beverage = args[indexOfBev + 1];
		const qty = args[indexOfQty + 1];
		const date = args[indexOfDate + 1];

		let empData = record;
		if (args.includes("--date")) {
			empData = empData.filter(isGivenDate(date));
		}

		if (args.includes("--empId")) {
			empData = empData.filter(isGivenOption(empId, "empId"));
		}

		if (args.includes("--beverage")) {
			empData = empData.filter(isGivenOption(beverage, "beverage"));
		}

		if (args.includes("--qty")) {
			empData = empData.filter(isGivenOption(qty, "qty"));
		}

		return empData;
	}
	return 0;
};

const isGivenDate = function(date) {
	return function(obj) {
		const trDate = obj["date"].slice(0, date.length);
		return date == trDate;
	};
};

const isGivenOption = function(userOption, option) {
	return function(obj) {
		const trOption = obj[option];

		return userOption == trOption;
	};
};

exports.query = query;
