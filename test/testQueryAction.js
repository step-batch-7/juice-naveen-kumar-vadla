"use strict";
const assert = require("assert");
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
			return '{"123": [{"Employee ID": "123","Beverage": "orange","Quantity": "2","Date": "2019-11-26T02:39:14.323Z"}]}';
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
				"Employee ID": "123",
				Beverage: "orange",
				Quantity: "2",
				Date: "2019-11-26T02:39:14.323Z"
			}
		];

		assert.deepStrictEqual(actual, expected);
	});

	it("Should should validate if file is not present", function() {
		let args = ["--query", "--empId", "123"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"Employee ID": "123","Beverage": "orange","Quantity": "2","Date": "2019-11-26T02:39:14.323Z"}]}';
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

	it("Should should validate if empId is not present", function() {
		let args = ["--query", "--empId", "121"];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return '{"123": [{"Employee ID": "123","Beverage": "orange","Quantity": "2","Date": "2019-11-26T02:39:14.323Z"}]}';
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
});
