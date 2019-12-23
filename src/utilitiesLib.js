"use strict";

const fs = require("fs");

const readFromFile = function (filepath) {
  return fs.readFileSync(filepath, "utf8");
};

const writeIntoFile = function (filepath, data) {
  fs.writeFileSync(filepath, data,"utf8");
};

const isFilePresent = function (filepath) {
  return fs.existsSync(filepath);
};

const isPositiveNumber = function (num) {
  return Number.isInteger(+num) && +num > 0;
};

exports.isPositiveNumber = isPositiveNumber;
exports.isFilePresent = isFilePresent;
exports.readFromFile = readFromFile;
exports.writeIntoFile = writeIntoFile;
