const utilities = require("./utilitiesLib");

const isValidInput = function(args) {
	const validateAction = {
		"--save": validateSave,
		"--query": validateQuery,
		undefined: invalidInput
	};
	const index = utilities.getIndexOfAction(args);
	return validateAction[args[index]](args);
};

const invalidInput = function() {
	return false;
};

const validateSave = function(args) {
	const indexOfEId = args.indexOf("--empId");
	const indexOfQty = args.indexOf("--qty");
	const indexOfBev = args.indexOf("--beverage");
	return (
		utilities.isPositiveNumber(args[indexOfEId + 1]) &&
		utilities.isPositiveNumber(args[indexOfQty + 1]) &&
		!utilities.isPositiveNumber(args[indexOfBev + 1]) &&
		args.length == 7
	);
};

const validateQuery = function(args) {
	if (args.length <= 9) {
		if (args.includes("--date") && args.includes("--empId")) {
			const indexOfEId = args.indexOf("--empId");
			const indexOfDate = args.indexOf("--date");
			const date = args[indexOfDate + 1];
			const dateArray = date.split("-");
			return (
				utilities.isPositiveNumber(args[indexOfEId + 1]) &&
				dateArray.every(utilities.isPositiveNumber)
			);
		}

		const index = args.indexOf("--empId") + 1 || args.indexOf("--date") + 1;

		return args[index].split("-").every(utilities.isPositiveNumber);
	}
	return false;
};

exports.isValidInput = isValidInput;
exports.invalidInput = invalidInput;
exports.validateSave = validateSave;
exports.validateQuery = validateQuery;
