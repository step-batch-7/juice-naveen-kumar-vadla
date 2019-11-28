"use strict";

const assert = require("chai").assert;

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
			empId: 123,
			beverage: "orange",
			qty: 1,
			date: "2019-11-26T05:33:25.642Z"
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

describe("save", function() {
	it("Should validate even if file is not present", function() {
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
			return "2019-11-26T05:33:25.642Z";
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const readFromFile = function(filepath) {
			return "{}";
		};
		const isFilePresent = function(filepath) {
			return false;
		};
		const path = "./naveen.js";
		const actual = saveAction.save(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = {
			empId: 123,
			beverage: "orange",
			qty: 1,
			date: "2019-11-26T05:33:25.642Z"
		};
		assert.deepStrictEqual(actual, expected);
	});

	it("Should validate if file is present but contains empty space", function() {
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
			return "2019-11-26T05:33:25.642Z";
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
		const path = "./transactionsData";
		const actual = saveAction.save(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = {
			empId: 123,
			beverage: "orange",
			qty: 1,
			date: "2019-11-26T05:33:25.642Z"
		};
		assert.deepStrictEqual(actual, expected);
	});
	it("Should validate if file is present and contains previous transactions", function() {
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
			return "2019-11-26T05:33:25.642Z";
		};
		const writeIntoFile = function(filepath, data) {
			return "";
		};
		const isFilePresent = function(filepath) {
			return true;
		};
		const readFromFile = function(filepath) {
			return '[{"empId": "123","beverage": "orange","qty": "2","date": "2019-11-26T02:39:14.323Z"}]';
		};
		const path = "./transactionsData";
		const actual = saveAction.save(
			args,
			isFilePresent,
			readFromFile,
			writeIntoFile,
			timeStamp,
			path
		);
		const expected = {
			empId: 123,
			beverage: "orange",
			qty: 1,
			date: "2019-11-26T05:33:25.642Z"
		};
		assert.deepStrictEqual(actual, expected);
	});
});
