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

		if (args.includes("--date") && args.length == 3) {
			return queryDate(record, date);
		}
		const allEmpIds = Object.keys(record);
		if (allEmpIds.includes(empId)) {
			const empData = record[empId];
			if (args.includes("--date")) {
				const result = empData.filter(isGivenDate(date));

				return result;
			}
			return empData;
		}
	}
	return 0;
};

const isGivenDate = function(date) {
	return function(obj) {
		const trDate = obj["date"].slice(0, 10);
		return date == trDate;
	};
};

const queryDate = function(record, date) {
	const allRecords = Object.values(record);
	const allEmpData = allRecords.reduce(function(context, array) {
		for (let index = 0; index < array.length; index++) {
			context.push(array[index]);
		}
		return context;
	});
	return allEmpData.filter(isGivenDate(date));
};

exports.query = query;
exports.queryDate = queryDate;
