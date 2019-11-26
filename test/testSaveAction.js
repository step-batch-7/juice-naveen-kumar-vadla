"use strict";

const assert = require("assert");

const saveAction = require("../src/saveAction");

describe("generateTransactionRecord", function() {
	it("Should generate transaction record", function() {
		const data = [
			"--save",
			"--qty",
			"1",
			"--empId",
			"123",
			"--beverage",
			"orange"
		];

		const expected = {
			"Employee ID": 123,
			Beverage: "orange",
			Quantity: 1,
			Date: "2019-11-26T05:33:25.642Z"
		};

		const timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		assert.deepStrictEqual(
			saveAction.generateTransactionRecord(data, timeStamp),
			expected
		);
	});
});
