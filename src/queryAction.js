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
	return empData;
};

exports.query = query;
