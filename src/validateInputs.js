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
	const indexOfEId = args.indexOf("--empId") + 1;
	const indexOfQty = args.indexOf("--qty") + 1;
	const indexOfBev = args.indexOf("--beverage") + 1;
	return (
		utilities.isPositiveNumber(args[indexOfEId]) &&
		utilities.isPositiveNumber(args[indexOfQty]) &&
		!utilities.isPositiveNumber(args[indexOfBev]) &&
		args.length == 7
	);
};

const validateQuery = function(args) {
	if (args.length <= 7) {
		if (args.includes("--date") && args.includes("--empId")) {
			const indexOfEId = args.indexOf("--empId") + 1;
			const indexOfDate = args.indexOf("--date") + 1;
			const date = args[indexOfDate];
			const dateArray = date.split("-");
			return (
				utilities.isPositiveNumber(args[indexOfEId]) &&
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
