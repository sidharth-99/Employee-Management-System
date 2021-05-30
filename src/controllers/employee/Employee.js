"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EmployeeController = void 0;
var CrudController_1 = require("../CrudController");
var pg = require("pg");
var client = pg.Client;
var conn = new client({
    user: 'postgres',
    host: 'localhost',
    database: 'employee',
    password: 'postgres',
    port: 5432
});
if (conn.connect()) {
    console.log("Connected");
}
var EmployeeController = /** @class */ (function (_super) {
    __extends(EmployeeController, _super);
    function EmployeeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmployeeController.prototype.create = function (req, res) {
        var _a = req.body, empid = _a.empid, fname = _a.fname, lname = _a.lname, age = _a.age, designation = _a.designation, salary = _a.salary;
        conn.query('INSERT INTO emp (empid, empfname, emplname, age,designation, salary) VALUES ($1, $2,$3,$4,$5,$6)', [empid, fname, lname, age, designation, salary], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).send("User added ");
        });
    };
    EmployeeController.prototype.readall = function (req, res) {
        conn.query('SELECT * FROM emp ORDER BY empid ASC', function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    };
    EmployeeController.prototype.update = function (req, res) {
        var id2 = parseInt(req.params.id);
        var _a = req.body, empid = _a.empid, fname = _a.fname, lname = _a.lname, age = _a.age, designation = _a.designation, salary = _a.salary;
        conn.query('Update emp set empid=$1, empfname=$2, emplname=$3, age=$4,designation=$5, salary=$6 where id=$7)', [empid, fname, lname, age, designation, salary, id2], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).send("User modified with ID: " + id2);
        });
    };
    EmployeeController.prototype["delete"] = function (req, res) {
        var id = parseInt(req.params.id);
        conn.query('DELETE FROM emp WHERE empid = $1', [id], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).send("User deleted with ID: " + id);
        });
    };
    EmployeeController.prototype.readbyid1 = function (req, res) {
        var id = parseInt(req.params.id);
        conn.query('SELECT * FROM users WHERE empid = $1', [id], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    };
    EmployeeController.prototype.readbyid2 = function (req, res) {
        var fname = parseInt(req.params.id);
        conn.query('SELECT * FROM users WHERE empfname = $1', [fname], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    };
    EmployeeController.prototype.readbyid3 = function (req, res) {
        var lname = parseInt(req.params.id);
        conn.query('SELECT * FROM users WHERE emplname = $1', [lname], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    };
    EmployeeController.prototype.readbyid4 = function (req, res) {
        var age = parseInt(req.params.id);
        conn.query('SELECT * FROM users WHERE age = $1', [age], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    };
    EmployeeController.prototype.readbyid5 = function (req, res) {
        var designation = parseInt(req.params.id);
        conn.query('SELECT * FROM users WHERE designation = $1', [designation], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    };
    EmployeeController.prototype.readbyid6 = function (req, res) {
        var salary = parseInt(req.params.id);
        conn.query('SELECT * FROM users WHERE salary = $1', [salary], function (error, results) {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    };
    return EmployeeController;
}(CrudController_1.CrudController));
exports.EmployeeController = EmployeeController;
