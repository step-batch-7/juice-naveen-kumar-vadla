const utilities = require("./utilitiesLib");

const isValidInput = function(args) {
	const validateAction = {
		"--save": validateSave,
		"--query": validateQuery,
		undefined: invalidInput
	};
	const action = args[0];
	return validateAction[action](args);
};

const invalidInput = function() {
	return false;
};

const validateSave = function(args) {
	const empId = args[1];
	const beverage = args[2];
	const qty = args[3];

	return (
		[empId, qty].every(utilities.isPositiveNumber) &&
		beverage.split("").every(function(char) {
			return char.match(/[a-zA-Z]/);
		}) &&
		args.length == 5
	);
};

const validateQuery = function(args) {
	let result = true;
	if (args[1] != undefined) {
		result = result && utilities.isPositiveNumber(args[1]);
	}
	if (args[3] != undefined) {
		result = result && utilities.isPositiveNumber(args[3]);
	}
	if (args[4] != undefined) {
		result = result && args[4].split("-").every(utilities.isPositiveNumber);
	}
	if (args[2] != undefined) {
		result =
			result &&
			args[2].split("").every(function(char) {
				return char.match(/[a-zA-Z]/);
			});
	}

	return result && args.length <= 5;
};

exports.isValidInput = isValidInput;
exports.invalidInput = invalidInput;
exports.validateSave = validateSave;
exports.validateQuery = validateQuery;
