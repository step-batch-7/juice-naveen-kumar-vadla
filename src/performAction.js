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
	const actions = { "--save": save, "--query": query };
	const indexOfAction = getIndexOfAction(args);
	const action = args[indexOfAction];
	return actions[action](
		args,
		isFilePresent,
		readFromFile,
		writeIntoFile,
		timeStamp,
		path
	);
};

exports.validateAndPerformAction = validateAndPerformAction;
