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
	const indOfEId = args.indexOf("--empId") + 1;
	const indOfQty = args.indexOf("--qty") + 1;
	const indOfBev = args.indexOf("--beverage") + 1;
	return (
		utilities.isNumber(args[indOfEId]) &&
		utilities.isNumber(args[indOfQty]) &&
		!utilities.isNumber(args[indOfBev]) &&
		args.length == 7
	);
};

const validateQuery = function(args) {
	if (args.length == 3) {
		let index = args.indexOf("--empId");
		return utilities.isNumber(args[index + 1]);
	}
	return false;
};

exports.isValidInput = isValidInput;
exports.invalidInput = invalidInput;
exports.validateSave = validateSave;
exports.validateQuery = validateQuery;
