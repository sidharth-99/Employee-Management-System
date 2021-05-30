"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
var controllers_1 = require("../../controllers");
exports.router = express.Router({
    strict: true
});
exports.router.post('/', function (req, res) {
    controllers_1.employeeController.create(req, res);
});
exports.router.get('/', function (req, res) {
    controllers_1.employeeController.readall(req, res);
    // employeeController.readbyid1(req, res);
    // employeeController.readbyid2(req, res);
    // employeeController.readbyid3(req, res);
    // employeeController.readbyid4(req, res);
    // employeeController.readbyid5(req, res);
    // employeeController.readbyid6(req, res);
});
exports.router.put('/', function (req, res) {
    controllers_1.employeeController.update(req, res);
});
exports.router["delete"]('/', function (req, res) {
    controllers_1.employeeController["delete"](req, res);
});
