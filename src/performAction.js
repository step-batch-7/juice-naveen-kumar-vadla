"use strict";

const save = require("./saveAction").save;
const query = require("./queryAction").query;
const isValidInput = require("./validateInputs").isValidInput;

const performAction = function(
	args,
	isFilePresent,
	readFromFile,
	writeIntoFile,
	timeStamp,
	path
) {
	let action = false;

	if (!bothIncludesOrNot(args)) {
		args = arrangeArgs(args);
		action = isValidInput(args) && args[0];
	}

	const actions = {
		"--save": [save, getSaveMessage],
		"--query": [query, getQueryMessage],
		false: [helpMsg, helpMsg]
	};
	const transactions = actions[action][0](
		args,
		isFilePresent,
		readFromFile,
		writeIntoFile,
		timeStamp,
		path
	);
	return actions[action][1](transactions);
};

const getSaveMessage = function(newRecord) {
	const Values = [
		newRecord.empId,
		newRecord.beverage,
		newRecord.qty,
		newRecord.date.toJSON()
	];
	return `Transaction Recorded:\nEmployee ID, Beverage, Quantity, Date\n${Values}`;
};

const getQueryMessage = function(empData) {
	const empTotalBeverages = empData.reduce(function(sum, obj) {
		return sum + parseInt(obj["qty"]);
	}, 0);
	const values = empData.map(function(obj) {
		return [obj.empId, obj.beverage, obj.qty, obj.date];
	});
	const juiceString = empTotalBeverages == 1 ? "Juice" : "Juices";
	const result = [
		`Employee ID, Beverage, Quantity, Date`,
		...values,
		`Total: ${empTotalBeverages} ${juiceString}`
	].join("\n");
	return result;
};

const arrangeArgs = function(args) {
	const indexOfOption =
		(args.indexOf("--save") + 1 || args.indexOf("--query") + 1) - 1;
	const indexOfEid = args.indexOf("--empId");
	const indexOfBev = args.indexOf("--beverage");
	const indexOfQty = args.indexOf("--qty");
	const indexOfDate = args.indexOf("--date");
	const indexes = [indexOfEid, indexOfBev, indexOfQty, indexOfDate].map(
		function(index) {
			return index < 0 ? index : index + 1;
		}
	);

	const arranged = [
		args[indexOfOption],
		args[indexes[0]],
		args[indexes[1]],
		args[indexes[2]],
		args[indexes[3]]
	];

	return arranged;
};

const helpMsg = function() {
	return "please enter valid input";
};

const bothIncludesOrNot = function(args) {
	const isBothPresent = args.includes("--save") && args.includes("--query");
	const isBothNotPresent =
		!args.includes("--save") && !args.includes("--query");
	return isBothPresent || isBothNotPresent;
};

exports.performAction = performAction;
exports.getSaveMessage = getSaveMessage;
exports.getQueryMessage = getQueryMessage;
exports.arrangeArgs = arrangeArgs;
exports.helpMsg = helpMsg;
exports.bothIncludesOrNot = bothIncludesOrNot;
