"use strict";

const query = function(
	args,
	isFilePresent,
	readFromFile,
	writeIntoFile,
	timeStamp,
	path
) {
	const data = readFromFile(path);
	const record = JSON.parse(data);
	const indexOfEid = args.indexOf("--empId") + 1;
	const empId = args[indexOfEid];
	const empData = record[empId];

	const empTotalBeverages = empData.reduce(function(sum, obj) {
		return sum + parseInt(obj["Quantity"]);
	}, 0);
	const headings = Object.keys(empData[0]);
	const fields = empData.map(function(obj) {
		return Object.values(obj);
	});
	return (
		headings +
		"\n" +
		fields.join("\n") +
		"\n" +
		"Total Beverages: " +
		empTotalBeverages
	);
};

exports.query = query;
