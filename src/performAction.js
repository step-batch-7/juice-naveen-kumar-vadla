const save = require("./saveAction").save;
const query = require("./queryAction").query;
const getIndexOfAction = require("./utilitiesLib").getIndexOfAction;
const isValidInput = require("./validateInputs").isValidInput;

const performAction = function(
	args,
	isFilePresent,
	readFromFile,
	writeIntoFile,
	timeStamp,
	path
) {
	if (!isValidInput(args)) {
		return "please enter valid input";
	}
	const actions = { "--save": save, "--query": query };
	const actionMessage = {
		"--save": getSaveMessage,
		"--query": getQueryMessage
	};
	const actionIndex = getIndexOfAction(args);
	const action = args[actionIndex];
	const transactions = actions[action](
		args,
		isFilePresent,
		readFromFile,
		writeIntoFile,
		timeStamp,
		path
	);
	return actionMessage[action](transactions);
};

const getSaveMessage = function(newRecord) {
	newRecord["date"] = newRecord["date"].toJSON();
	const Values = [
		newRecord.empId,
		newRecord.beverage,
		newRecord.qty,
		newRecord.date
	];
	return `Transaction Recorded:\nEmployee ID, Beverage, Quantity, Date\n${Values}`;
};

const getQueryMessage = function(empData) {
	let result = "Records Not Found";
	if (empData != 0) {
		const empTotalBeverages = empData.reduce(function(sum, obj) {
			return sum + parseInt(obj["qty"]);
		}, 0);
		const values = empData.map(function(obj) {
			return [obj.empId, obj.beverage, obj.qty, obj.date];
		});
		result = `Employee ID, Beverage, Quantity, Date\n${[
			values.join("\n")
		]}\nTotal: ${empTotalBeverages} Juice`;
	}
	return result;
};

exports.performAction = performAction;
exports.getSaveMessage = getSaveMessage;
exports.getQueryMessage = getQueryMessage;
