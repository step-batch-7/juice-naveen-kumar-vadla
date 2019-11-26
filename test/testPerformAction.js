"use strict";
const assert = require("assert");
const fs = require("fs");

const performAction = require("../src/performAction");

describe("performAction", function() {
	it("Should validate save", function() {
		let args = [
			"--save",
			"--qty",
			"1",
			"--empId",
			"123",
			"--beverage",
			"orange"
		];
		let timeStamp = function() {
			return "2019-11-26T05:33:25.642Z";
		};
		let writeIntoFile = function(filepath, data) {
			return "";
		};
		let readFromFile = function(filepath) {
			return "{}";
		};
		let isFilePresent = function(filepath) {
			return false;
		};
		let path = "./naveen.js";
		let actual = performAction.performAction(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		let expected =
			"Transaction Recorded:\n" +
			"Employee ID,Beverage,Quantity,Date" +
			"\n" +
			"123,orange,1,2019-11-26T05:33:25.642Z";
		assert.strictEqual(actual, expected);
	});

	it("Should validate query", function() {
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
		let actual = performAction.performAction(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		let expected =
			"Employee ID,Beverage,Quantity,Date" +
			"\n" +
			"123,orange,2,2019-11-26T02:39:14.323Z" +
			"\n" +
			"Total Beverages: " +
			2;
		assert.deepStrictEqual(actual, expected);
	});
});
