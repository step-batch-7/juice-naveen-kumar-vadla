"use strict";

const utilities = require("../src/utilitiesLib");
const assert = require("chai").assert;

describe("isPositiveNumber", function() {
	it("should validate numbers only", function() {
		assert.ok(utilities.isPositiveNumber("232"));
	});
	it("should validate non numbrics", function() {
		assert.notOk(utilities.isPositiveNumber("a"));
		assert.notOk(utilities.isPositiveNumber("@"));
	});
	it("Should validate negative numbers", function() {
		assert.notOk(utilities.isPositiveNumber(-1));
		assert.notOk(utilities.isPositiveNumber(-6));
		assert.notOk(utilities.isPositiveNumber(0));
	});
});

describe("readFromFile", function() {
	it("Should read given File", function() {
		utilities.writeIntoFile("./data/testFileForRead", "hello");
		assert.strictEqual(
			utilities.readFromFile("./data/testFileForRead"),
			"hello"
		);
	});
});

describe("writeIntoFile", function() {
	it("Should write to the given file", function() {
		utilities.writeIntoFile("./data/testFileForWrite", "hello");
		assert.strictEqual(
			utilities.readFromFile("./data/testFileForWrite"),
			"hello"
		);
	});
});

describe("isFilePresent", function() {
	it("Should validate if file is present", function() {
		assert.ok(utilities.isFilePresent("./beverage.js"));
	});
	it("Should validate if file is not present", function() {
		assert.ok(!utilities.isFilePresent("./naveen"));
	});
});
