"use strict";

const isNumber = require("./utilitiesLib").isNumber;

const pairTheArguments = function(userInput) {
	let pairedArguments = [];

	for (let index = 0; index < userInput.length; index += 2) {
		if (["--save", "--query"].includes(userInput[index])) {
			pairedArguments.push([userInput[index]]);
			index--;
		} else {
			pairedArguments.push([userInput[index], userInput[index + 1]]);
		}
	}

	if (pairedArguments.every(isValid)) {
		return pairedArguments;
	}
	return 0;
};

const isValid = function(pair) {
	if (["--empId", "--qty"].includes(pair[0])) {
		return isNumber(pair[1]);
	}
	if (pair[0] == "--beverage") {
		return !isNumber(pair[0]);
	}
	return 1;
};

const validateAndCAll = function(args) {
	return 0;
};
