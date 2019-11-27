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
		const record = JSON.parse(data || "{}");
		const indexOfDate = args.indexOf("--date") + 1;
		const date = args[indexOfDate];
		const indexOfEid = args.indexOf("--empId") + 1;
		const empId = args[indexOfEid];
		let empData = record;
		if (args.includes("--date")) {
			empData = empData.filter(isGivenDate(date));
		}
		if (args.includes("--empId")) {
			empData = empData.filter(isGivenEmployee(empId));
		}
		return empData;
	}
	return 0;
};

const isGivenDate = function(date) {
	return function(obj) {
		const trDate = obj["date"].slice(0, 10);
		return date == trDate;
	};
};

const isGivenEmployee = function(empId) {
	return function(obj) {
		const trEmpId = obj["empId"];
		return empId == trEmpId;
	};
};

exports.query = query;
