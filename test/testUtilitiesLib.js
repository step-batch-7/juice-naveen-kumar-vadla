const utilities = require("../src/utilitiesLib");
const assert = require("chai").assert;

describe("isNumber", function() {
	it("should validate numbrics only", function() {
		assert.ok(utilities.isNumber("232"));
	});
	it("should validate non numbrics", function() {
		assert.notOk(utilities.isNumber("a"));
		assert.notOk(utilities.isNumber("@"));
	});
});

describe("getIndexOfAction", function() {
	it("should return index of --save", function() {
		assert.strictEqual(utilities.getIndexOfAction(["--save"]), 0);
	});
	it("should return index of --query", function() {
		assert.strictEqual(utilities.getIndexOfAction(["--query"]), 0);
	});
	it("should return -1 if both are exists", function() {
		assert.strictEqual(utilities.getIndexOfAction(["--save", "--query"]), -1);
	});
	it("should return -1 if both doesn't exists", function() {
		assert.strictEqual(utilities.getIndexOfAction(["ss", "sss"]), -1);
	});
});

describe("helpMsg", function() {
	it("Should return help message", function() {
		assert.strictEqual(utilities.helpMsg(), "please enter valid input");
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

describe("timeStamp", function() {
	it("Should return time", function() {
		assert.strictEqual(utilities.timeStamp(), utilities.timeStamp());
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
