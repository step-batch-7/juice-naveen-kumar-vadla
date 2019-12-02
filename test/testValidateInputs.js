const assert = require("chai").assert;
const validateInput = require("../src/validateInputs");

describe("invalidInput", function() {
	it("should return false", function() {
		assert.notOk(validateInput.invalidInput());
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
		assert.notOk(
			validateInput.validateQuery(["--query", "--empId", "343ds434"])
		);
		assert.notOk(
			validateInput.validateQuery(["--query", "--date", "dd-mm-yyyy"])
		);
		assert.notOk(
			validateInput.validateQuery([
				"--query",
				"123",
				"orange",
				"2",
				"10-10-2019",
				"naveen"
			])
		);
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
