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

		const empId = args[1];
		const beverage = args[2];
		const qty = args[3];
		const date = args[4];
		let empData = record;
		const isEmpIdDefined =
			empId && empData.filter(isGivenOption(empId, "empId"));
		empData = isEmpIdDefined || empData;

		const isBeverageDefined =
			beverage && empData.filter(isGivenOption(beverage, "beverage"));
		empData = isBeverageDefined || empData;

		const isQtyDefined = qty && empData.filter(isGivenOption(qty, "qty"));
		empData = isQtyDefined || empData;

		const isDateDefined = date && empData.filter(isGivenDate(date));
		empData = isDateDefined || empData;

		return empData;
	}
	return [];
};

const isGivenDate = function(date) {
	return function(obj) {
		const txnDate = obj["date"].slice(0, date.length);
		return date == txnDate;
	};
};

const isGivenOption = function(userOption, option) {
	return function(obj) {
		const txnOption = obj[option];

		return userOption == txnOption;
	};
};

exports.query = query;
