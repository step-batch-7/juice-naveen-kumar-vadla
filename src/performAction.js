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
		const tableColumns = Object.keys(newRecord);
		const tableValues = Object.values(newRecord);
		return "Transaction Recorded:\n" + tableColumns + "\n" + tableValues;
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
		} else {
			return "Records Not Found";
		}
	}
};

exports.validateAndPerformAction = validateAndPerformAction;
exports.performAction = performAction;
