const { isPositiveNumber } = require("./utilitiesLib");

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

const isValidDate = function(date) {
	return date.split("-").every(isPositiveNumber);
};

const validateSave = function(args) {
	const empId = args[1];
	const beverage = args[2];
	const qty = args[3];

	return [empId, qty].every(isPositiveNumber) && isNaN(beverage);
};

const validateQuery = function(args) {
	let result = true;
	const features = {
		1: isPositiveNumber,
		2: isNaN,
		3: isPositiveNumber,
		4: isValidDate
	};
	for (let index = 1; index <= 4; index++) {
		const isUndefined = args[index] == undefined;
		const isValidData = isUndefined || features[index](args[index]);
		result = result && isValidData;
	}
	return result;
};

exports.isValidInput = isValidInput;
exports.invalidInput = invalidInput;
exports.validateSave = validateSave;
exports.validateQuery = validateQuery;
exports.isValidDate = isValidDate;
