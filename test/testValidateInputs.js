const assert = require("chai").assert;
const validateInput = require("../src/validateInputs");

describe("invalidInput", function() {
	it("should return false", function() {
		assert.notOk(validateInput.invalidInput());
	});
});

describe("validateQuery", function() {
	it("should validate valid query args are given", function() {
		assert.ok(validateInput.validateQuery(["--query", "--empId", "343434"]));
	});
	it("should validate invalid query args are given", function() {
		assert.notOk(
			validateInput.validateQuery(["--query", "--naveen", "343434"])
		);
		assert.notOk(
			validateInput.validateQuery(["--query", "--date", "dd-mm-yyyy"])
		);
		assert.notOk(
			validateInput.validateQuery([
				"--query",
				"--empId",
				"123",
				"--date",
				"10-10-2019",
				"--qty",
				"12"
			])
		);
	});
	it("Should validate if empId and date are given ", function() {
		assert.ok(
			validateInput.validateQuery([
				"--query",
				"--empId",
				"123",
				"--date",
				"29-10-2019"
			])
		);
		assert.ok(validateInput.validateQuery(["--query", "--date", "12-03-2014"]));
		assert.ok(validateInput.validateQuery(["--query", "--empId", "1234"]));
	});
});

describe("validateSave", function() {
	it("should validate for valid save args", function() {
		assert.ok(
			validateInput.validateSave([
				"--save",
				"--empId",
				123,
				"--beverage",
				"orange",
				"--qty",
				1
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
			validateInput.isValidInput([
				"--save",
				"--empId",
				123,
				"--beverage",
				"orange",
				"--qty",
				1
			])
		);
	});
	it("should validate for query", function() {
		assert.ok(validateInput.isValidInput(["--query", "--empId", "343434"]));
	});
	it("should validate for invalid args", function() {
		assert.notOk(
			validateInput.isValidInput(["--save", "--query", "--empId", "343434"])
		);
		assert.notOk(validateInput.isValidInput(["--empId", "343434"]));
	});
});
