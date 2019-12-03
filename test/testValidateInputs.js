"use strict";

const assert = require("chai").assert;
const validateInput = require("../src/validateInputs");

describe("invalidInput", function() {
	it("should return false", function() {
		assert.notOk(validateInput.invalidInput());
	});
});

describe("isValidDate", function() {
	it("Should validate the given date", function() {
		assert.ok(validateInput.isValidDate("2019-11-12"));
	});
	it("Should validate if invalid date is given", function() {
		assert.notOk(validateInput.isValidDate("abcd"));
		assert.notOk(validateInput.isValidDate("2019.11.12"));
		assert.notOk(validateInput.isValidDate("2019-ab-12"));
	});
});

describe("validateSave", function() {
	it("should validate for valid save args", function() {
		assert.ok(
			validateInput.validateSave([
				"--save",
				"123",
				"orange",
				"1",
				"2019-11-30 "
			])
		);
	});
	it("should validate for invalid save args", function() {
		assert.notOk(
			validateInput.validateSave([
				"--save",
				"--empId",
				"hello",
				"--beverage",
				"123",
				"--qty",
				1
			])
		);
	});
});

describe("isValidInput", function() {
	it("should validate for save", function() {
		assert.ok(
			validateInput.isValidInput(["--save", "123", "orange", "1", "2019-11-12"])
		);
	});
	it("should validate for query", function() {
		assert.ok(validateInput.isValidInput(["--query", "343434"]));
	});
	it("should validate for invalid args", function() {
		assert.notOk(validateInput.isValidInput(["undefined", "343434"]));
	});
});

describe("validateQuery", function() {
	it("Should validate if (only one) empId is given ", function() {
		const args = ["--query", "123", undefined, undefined, undefined];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (only one) date is given ", function() {
		const args = ["--query", undefined, undefined, undefined, "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (only one) beverage is given ", function() {
		const args = ["--query", undefined, "orange", undefined, undefined];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (only one) quantity is given ", function() {
		const args = ["--query", undefined, undefined, "2", undefined];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any two) empId and date are given ", function() {
		const args = ["--query", "123", undefined, undefined, "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any two) empId and beverage are given ", function() {
		const args = ["--query", "123", "orange", undefined, undefined];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any two) empId and quantity are given ", function() {
		const args = ["--query", "123", undefined, "2", undefined];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any two) beverage and date are given ", function() {
		const args = ["--query", undefined, "orange", undefined, "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any two) beverage and quantity are given ", function() {
		const args = ["--query", undefined, "orange", "2", undefined];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any two) quantity and date are given ", function() {
		const args = ["--query", undefined, undefined, "2", "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any three) empId, date and beverage are given", function() {
		const args = ["--query", "123", "orange", undefined, "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any three) empId, quantity and beverage are given", function() {
		const args = ["--query", "123", "orange", "2", undefined];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any three) empId, date and quantity are given", function() {
		const args = ["--query", "123", undefined, "2", "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (any three) quantity, date and beverage are given", function() {
		const args = ["--query", undefined, "orange", "2", "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("Should validate if (all) empId, date, quantity and beverage are given", function() {
		const args = ["--query", "123", "orange", "2", "2019-11-26"];
		const actual = validateInput.validateQuery(args);
		assert.ok(actual);
	});

	it("should validate invalid query args are given", function() {
		assert.notOk(validateInput.validateQuery(["--query", "121", "12"]));
		assert.notOk(validateInput.validateQuery(["--query", "dd-mm-yyyy"]));
	});
});
