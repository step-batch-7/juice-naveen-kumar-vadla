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
	args = arrangeArgs(args);
	if (!isValidInput(args)) {
		return "please enter valid input";
	}
	const actions = { "--save": save, "--query": query };
	const actionMessage = {
		"--save": getSaveMessage,
		"--query": getQueryMessage
	};
	const action = args[0];
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
	const indexOfOption = getIndexOfAction(args);
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

exports.performAction = performAction;
exports.getSaveMessage = getSaveMessage;
exports.getQueryMessage = getQueryMessage;
exports.arrangeArgs = arrangeArgs;
