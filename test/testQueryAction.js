"use strict";
const assert = require("chai").assert;
const queryAction = require("../src/queryAction");

describe("QueryAction", function() {
	it("Should return transactions of given employee", function() {
		const args = ["--query", "--empId", "123"];
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
		const args = ["--query", "--empId", "123"];
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
		assert.strictEqual(actual, 0);
	});

	it("Should validate if file is present but empty", function() {
		const args = ["--query", "--empId", "123"];
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
		const args = ["--query", "--empId", "121"];
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

	it("Should validate if only empId is given ", function() {
		const args = ["--query", "--empId", "123"];
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

	it("Should validate if only date is given ", function() {
		const args = ["--query", "--date", "2019-11-26"];
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

	it("Should validate if only empId and date are given ", function() {
		const args = ["--query", "--empId", "123", "--date", "2019-11-26"];
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

	it("Should validate if only empId and beverage are given ", function() {
		const args = ["--query", "--empId", "123", "--beverage", "orange"];
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

	it("Should validate if only beverage and date are given ", function() {
		const args = ["--query", "--beverage", "orange", "--date", "2019-11-26"];
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

	it("Should validate if all empId, date and beverage are given", function() {
		const args = [
			"--query",
			"--empId",
			"123",
			"--date",
			"2019-11-26",
			"--beverage",
			"orange"
		];
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
