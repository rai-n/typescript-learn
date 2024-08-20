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
var app_1 = require("../firstClass/app");
var testDepartment = /** @class */ (function (_super) {
    __extends(testDepartment, _super);
    function testDepartment(name) {
        return _super.call(this, name) || this;
    }
    testDepartment.prototype.describe = function () {
        console.log("Test department");
    };
    testDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new testDepartment("static department");
    };
    return testDepartment;
}(app_1.Department));
var testDepartmentClass = testDepartment.getInstance();
testDepartmentClass === null || testDepartmentClass === void 0 ? void 0 : testDepartmentClass.addEmployee(1);
testDepartmentClass === null || testDepartmentClass === void 0 ? void 0 : testDepartmentClass.describe;
