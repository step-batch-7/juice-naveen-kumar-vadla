const save = require("./saveAction").save;
const query = require("./queryAction").query;
const getIndexOfAction = require("./utilitiesLib").getIndexOfAction;
const isValidInput = require("./validateInputs").isValidInput;
const helpMsg = require("./utilitiesLib").helpMsg;

const validateAndPerformAction = function(
	args,
	isFilePresent,
	readFromFile,
	writeIntoFile,
	timeStamp,
	path
) {
	{
		if (!isValidInput(args)) {
			return helpMsg();
		}
		return performAction(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
	}
};

const performAction = function(
	args,
	isFilePresent,
	readFromFile,
	writeIntoFile,
	timeStamp,
	path
) {
	if (args.includes("--save")) {
		const newRecord = save(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const Values = Object.values(newRecord);
		return (
			"Transaction Recorded:\n" +
			"Employee ID, Beverage, Quantity, Date" +
			"\n" +
			Values
		);
	}
	if (args.includes("--query")) {
		const empData = query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		if (empData != 0) {
			const empTotalBeverages = empData.reduce(function(sum, obj) {
				return sum + parseInt(obj["qty"]);
			}, 0);
			const values = empData.map(function(obj) {
				return Object.values(obj);
			});
			return (
				"Employee ID, Beverage, Quantity, Date" +
				"\n" +
				values.join("\n") +
				"\n" +
				"Total Beverages: " +
				empTotalBeverages
			);
		} else {
			return "Records Not Found";
		}
	}
	return 0;
};

exports.validateAndPerformAction = validateAndPerformAction;
exports.performAction = performAction;
