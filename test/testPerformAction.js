"use strict";
const assert = require("chai").assert;
const fs = require("fs");

const performAction = require("../src/performAction");
const getSaveMessage = require("../src/performAction").getSaveMessage;
const getQueryMessage = require("../src/performAction").getQueryMessage;

describe("performAction", function() {
	it("Should validate save", function() {
		const args = [
			"--save",
			"--qty",
			"1",
			"--empId",
			"123",
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
			return "[]";
		};
		const isFilePresent = function(filepath) {
			return false;
		};
		const path = "./naveen.js";
		const actual = performAction.performAction(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected =
			"Transaction Recorded:\n" +
			"Employee ID, Beverage, Quantity, Date" +
			"\n" +
			"123,orange,1,2019-11-26T05:33:25.642Z";
		assert.strictEqual(actual, expected);
	});

	it("Should validate query", function() {
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
		const actual = performAction.performAction(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected =
			"Employee ID, Beverage, Quantity, Date" +
			"\n" +
			"123,orange,2,2019-11-26T02:39:14.323Z" +
			"\n" +
			"Total: " +
			2 +
			" Juice";
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate query if employee data not found", function() {
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
		const actual = performAction.performAction(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = "Records Not Found";
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate for invalid input", function() {
		const args = ["--query", "--empId", "123", "--save"];
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
		const actual = performAction.performAction(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = "please enter valid input";
		assert.deepStrictEqual(actual, expected);
	});
});

describe("getSaveMessage", function() {
	it("Should give message of given object", function() {
		const args = {
			empId: 123,
			beverage: "orange",
			qty: 1,
			date: new Date("2019-11-26T05:33:25.642Z")
		};
		const actual = performAction.getSaveMessage(args);
		const expected =
			"Transaction Recorded:\nEmployee ID, Beverage, Quantity, Date\n123,orange,1,2019-11-26T05:33:25.642Z";
		assert.strictEqual(actual, expected);
	});
});

describe("getQueryMessage", function() {
	it("Should give message of array of one object", function() {
		const args = [
			{
				empId: 123,
				beverage: "orange",
				qty: 1,
				date: "2019-11-26T05:33:25.642Z"
			}
		];
		const actual = performAction.getQueryMessage(args);
		const expected =
			"Employee ID, Beverage, Quantity, Date\n123,orange,1,2019-11-26T05:33:25.642Z\nTotal: 1 Juice";
		assert.strictEqual(actual, expected);
	});

	it("Should give message of array of more than one object", function() {
		const args = [
			{
				empId: 123,
				beverage: "orange",
				qty: 1,
				date: "2019-11-26T05:33:25.642Z"
			},
			{
				empId: 123,
				beverage: "apple",
				qty: 1,
				date: "2019-11-26T05:33:29.642Z"
			}
		];
		const actual = performAction.getQueryMessage(args);
		const expected =
			"Employee ID, Beverage, Quantity, Date\n123,orange,1,2019-11-26T05:33:25.642Z\n123,apple,1,2019-11-26T05:33:29.642Z\nTotal: 2 Juice";
		assert.strictEqual(actual, expected);
	});
});
