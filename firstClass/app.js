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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(name) {
        var _this = this;
        this.name = name;
        this.employeesIds = [];
        // describe(){
        //     console.log(`Department: ${this.name}: ${this.departmentId}`)
        // }
        this.addEmployee = function (employeeId) { return _this.employeesIds.push(employeeId); };
        this.departmentSize = function () { return _this.employeesIds.length; };
        this.allEmployees = function () { return _this.employeesIds.forEach(function (id) { return console.log(id); }); };
        this.name = name;
    }
    return Department;
}());
exports.Department = Department;
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(name, admins) {
        var _this = _super.call(this, name) || this;
        _this.admins = admins;
        return _this;
    }
    // enforcing classes share common methods using abstract method 
    // but different implementation
    ITDepartment.prototype.describe = function () {
        console.log('Department id: ' + this.name);
    };
    return ITDepartment;
}(Department));
// const engineering = new Department("Engineering")
// const accounting = new Department("Accounting")
// const dflt = new Department("")
// console.log(engineering, accounting, dflt)
// engineering.describe()
// const engineeringCopy =  engineering.describe()
// avoid undefined
// const engineeringCopyThis =  {name: "CopyDepartment", describe : engineering.describe}
// engineeringCopyThis.describe()
// engineering.addEmployee(1)
// engineering.addEmployee(2)
// engineering.addEmployee(3)
// engineering.allEmployees()
// console.log(engineering.departmentSize()) 
// class DepartmentShortCut  {
//     describe(){
//         console.log(`Department: ${this.name}: ${this.departmentId}`)
//     }
//     // readonly for typesafety
//     constructor(private name: string, private departmentId: number){
//         super(name = "Shortcut", departmentId = 2)
//     }
// }
// const accountingShortCut = new DepartmentShortCut("accounting", 2)
// accountingShortCut.describe()
var FinanceDepartment = /** @class */ (function (_super) {
    __extends(FinanceDepartment, _super);
    function FinanceDepartment(name, departmentId) {
        return _super.call(this, name) || this;
    }
    FinanceDepartment.prototype.describe = function () {
        console.log('Accounting department - name: ' + this.name);
    };
    FinanceDepartment.prototype.generateReport = function () {
        console.log("Generating report...");
    };
    return FinanceDepartment;
}(Department));
var financeDepartment = new FinanceDepartment("Finance", 2);
financeDepartment.generateReport();
var ITDepartment2 = /** @class */ (function (_super) {
    __extends(ITDepartment2, _super);
    function ITDepartment2(name, admins) {
        var _this = _super.call(this, name) || this;
        _this.admins = admins;
        // from db 
        _this.devices = [];
        _this.admins = admins;
        return _this;
    }
    ITDepartment2.prototype.describe = function () {
        console.log("Department2 IT");
    };
    Object.defineProperty(ITDepartment2.prototype, "registerDevice", {
        set: function (id) {
            console.log("Register device...");
            if (id < 0) {
                throw new Error("Invalid device id: " + id);
            }
            this.devices.push(id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ITDepartment2.prototype, "findAdmins", {
        get: function () {
            return this.admins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ITDepartment2.prototype, "findDevices", {
        get: function () {
            return this.devices;
        },
        enumerable: false,
        configurable: true
    });
    ITDepartment2.prototype.addAdmins = function (name) {
        this.admins.push(name);
    };
    ITDepartment2.getDepartmentBudget = function (staffAmt) {
        return ITDepartment2.salary * staffAmt;
    };
    ITDepartment2.salary = 1000;
    return ITDepartment2;
}(Department));
var itDepartment = new ITDepartment2("IT", ["admin1", "admin2"]);
itDepartment.addAdmins("admin3");
console.log(itDepartment.findAdmins);
itDepartment.registerDevice = 1;
itDepartment.registerDevice = 4;
console.log(itDepartment.findDevices);
// console.log("Finance budget: "+ ITDepartment.getDepartmentBudget(itDepartment.findAdmins.length))
financeDepartment.describe();
