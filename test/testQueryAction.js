"use strict";
const assert = require("chai").assert;
const queryAction = require("../src/queryAction");

describe("QueryAction", function() {
	it("Should return transactions of given employee", function() {
		const args = ["--query", "123", undefined, undefined, undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T02:39:14.323Z"
			}
		];

		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if file is not present", function() {
		const args = ["--query", "123", undefined, undefined, undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const isFilePresent = function(filepath) {
			return false;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		assert.deepStrictEqual(actual, []);
	});

	it("Should validate if file is present but empty", function() {
		const args = ["--query", "123", undefined, undefined, undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return "";
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		assert.deepStrictEqual(actual, []);
	});

	it("Should validate if empId is not present", function() {
		const args = ["--query", "121", undefined, undefined, undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		assert.deepStrictEqual(actual, []);
	});

	it("Should validate if (only one) empId is given ", function() {
		const args = ["--query", "123", undefined, undefined, undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T02:39:14.323Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (only one) date is given ", function() {
		const args = ["--query", undefined, undefined, undefined, "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T02:39:14.323Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (only one) beverage is given ", function() {
		const args = ["--query", undefined, "orange", undefined, undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T02:39:14.323Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (only one) quantity is given ", function() {
		const args = ["--query", undefined, undefined, "2", undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T02:39:14.323Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any two) empId and date are given ", function() {
		const args = ["--query", "123", undefined, undefined, "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any two) empId and beverage are given ", function() {
		const args = ["--query", "123", "orange", undefined, undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any two) empId and quantity are given ", function() {
		const args = ["--query", "123", undefined, "2", undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any two) beverage and date are given ", function() {
		const args = ["--query", undefined, "orange", undefined, "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any two) beverage and quantity are given ", function() {
		const args = ["--query", undefined, "orange", "2", undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any two) quantity and date are given ", function() {
		const args = ["--query", undefined, undefined, "2", "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any three) empId, date and beverage are given", function() {
		const args = ["--query", "123", "orange", undefined, "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any three) empId, quantity and beverage are given", function() {
		const args = ["--query", "123", "orange", "2", undefined];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any three) empId, date and quantity are given", function() {
		const args = ["--query", "123", undefined, "2", "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (any three) quantity, date and beverage are given", function() {
		const args = ["--query", undefined, "orange", "2", "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if (all) empId, date, quantity and beverage are given", function() {
		const args = ["--query", "123", "orange", "2", "2019-11-26"];
		const timeStamp = function() {
			return new Date("2019-11-26T05:33:25.642Z");
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]';
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const path = "./naveen.js";
		const actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = [
			{
				empId: "123",
				beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});
});
