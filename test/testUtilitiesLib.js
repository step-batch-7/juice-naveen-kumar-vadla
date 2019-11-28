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

describe("getIndexOfAction", function() {
	it("should validate for --save", function() {
		assert.strictEqual(utilities.getIndexOfAction(["--save"]), 0);
	});
	it("should validate for --query", function() {
		assert.strictEqual(utilities.getIndexOfAction(["--query"]), 0);
	});
	it("should validate if both are exists", function() {
		assert.strictEqual(utilities.getIndexOfAction(["--save", "--query"]), -1);
	});
	it("should validate if both doesn't exists", function() {
		assert.strictEqual(utilities.getIndexOfAction(["ss", "sss"]), -1);
	});
});

describe("readFromFile", function() {
	it("Should read given File", function() {
		assert.strictEqual(utilities.readFromFile("./testFileForRead"), "hello");
	});
});

describe("writeIntoFile", function() {
	it("Should write to the given file", function() {
		utilities.writeIntoFile("./testFileForWrites", "hello");
		assert.strictEqual(utilities.readFromFile("./testFileForWrites"), "hello");
	});
});

describe("isFilePresent", function() {
	it("Should validate if file is present", function() {
		assert.ok(utilities.isFilePresent("./testFileForWrites"));
	});
	it("Should validate if file is not present", function() {
		assert.ok(!utilities.isFilePresent("./naveen"));
	});
});
