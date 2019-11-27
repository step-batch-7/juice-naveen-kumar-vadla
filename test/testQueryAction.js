"use strict";
const assert = require("chai").assert;
const queryAction = require("../src/queryAction");

describe("QueryAction", function() {
	it("Should return transactions of given employee", function() {
		let args = ["--query", "--empId", "123"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]}';
		};
		let isFilePresent = function(filepath) {
			return true;
		};
		let path = "./naveen.js";
		let actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		let expected = [
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
		let args = ["--query", "--empId", "123"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]}';
		};
		let isFilePresent = function(filepath) {
			return false;
		};
		let path = "./naveen.js";
		let actual = queryAction.query(
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
		let args = ["--query", "--empId", "123"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return "";
		};
		let isFilePresent = function(filepath) {
			return true;
		};
		let path = "./naveen.js";
		let actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		assert.strictEqual(actual, 0);
	});

	it("Should validate if empId is not present", function() {
		let args = ["--query", "--empId", "121"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]}';
		};
		let isFilePresent = function(filepath) {
			return true;
		};
		let path = "./naveen.js";
		let actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		assert.strictEqual(actual, 0);
	});

	it("Should validate if only empId is given ", function() {
		let args = ["--query", "--empId", "123"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"empId": "123","Beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]}';
		};
		let isFilePresent = function(filepath) {
			return true;
		};
		let path = "./naveen.js";
		let actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		let expected = [
			{
				empId: "123",
				Beverage: "orange",
				qty: "2",
				date: "2019-11-26T02:39:14.323Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if both empId and date are given ", function() {
		let args = ["--query", "--empId", "123", "--date", "2019-11-26"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"empId": "123","Beverage": "orange","qty": "2","date": "2019-11-26T05:33:25.642Z"}]}';
		};
		let isFilePresent = function(filepath) {
			return true;
		};
		let path = "./naveen.js";
		let actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		let expected = [
			{
				empId: "123",
				Beverage: "orange",
				qty: "2",
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if only date is given ", function() {
		let args = ["--query", "--date", "2019-11-26"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"empId": "123","Beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]}';
		};
		let isFilePresent = function(filepath) {
			return true;
		};
		let path = "./naveen.js";
		let actual = queryAction.query(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		let expected = [
			{
				empId: "123",
				Beverage: "orange",
				qty: "2",
				date: "2019-11-26T02:39:14.323Z"
			}
		];
		assert.deepStrictEqual(actual, expected);
	});
});

describe("Querydate", function() {
	it("Should give transactions of given date", function() {
		const date = "2019-11-27";
		const record = {
			123: [{ date: "2019-11-27T05:33:25.642Z" }],
			121: [
				{ date: "2019-11-27T05:33:25.642Z" },
				{ date: "2019-11-26T05:33:25.642Z" }
			]
		};
		const actual = queryAction.queryDate(record, date);
		const expected = [
			{ date: "2019-11-27T05:33:25.642Z" },
			{ date: "2019-11-27T05:33:25.642Z" }
		];
		assert.deepStrictEqual(actual, expected);
	});
});
