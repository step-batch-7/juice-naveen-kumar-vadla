const assert = require("assert");
const isFilePresent = require("./../src/beveragesLib").isFilePresent;
const save = require("./../src/beveragesLib").save;
const query = require("./../src/beveragesLib").query;
const performAction = require("./../src/beveragesLib").performAction;
const generateTransactionRecord = require("./../src/beveragesLib")
	.generateTransactionRecord;
const getDataInObject = require("./../src/beveragesLib").getDataInObject;
const putDatainFile = require("./../src/beveragesLib").putDatainFile;
