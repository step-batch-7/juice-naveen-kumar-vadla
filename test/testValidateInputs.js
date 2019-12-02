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

describe("validateQuery", function() {
	it("Should validate if valid query arguments are given ", function() {
		assert.ok(
			validateInput.validateQuery([
				"--query",
				"123",
				undefined,
				undefined,
				"29-10-2019"
			])
		);
		assert.ok(
			validateInput.validateQuery([
				"--query",
				undefined,
				undefined,
				undefined,
				"12-03-2014"
			])
		);
		assert.ok(validateInput.validateQuery(["--query", "1234"]));
	});

	it("should validate invalid query args are given", function() {
		assert.notOk(validateInput.validateQuery(["--query", "121", "12"]));
		assert.notOk(validateInput.validateQuery(["--query", "dd-mm-yyyy"]));
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
