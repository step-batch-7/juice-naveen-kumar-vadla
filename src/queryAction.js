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
		const indexOfDate = args.indexOf("--date") + 1;
		const date = args[indexOfDate];
		const indexOfEid = args.indexOf("--empId") + 1;
		const empId = args[indexOfEid];
		const indexOfBev = args.indexOf("--beverage") + 1;
		const beverage = args[indexOfBev];

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

const isGivenOption = function(empId, option) {
	return function(obj) {
		const trEmpId = obj[option];
		return empId == trEmpId;
	};
};

exports.query = query;
