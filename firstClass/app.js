var Department = /** @class */ (function () {
    function Department(name) {
        this.name = "DFLT";
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var engineering = new Department("Engineering");
var accounting = new Department("Accounting");
var dflt = new Department("");
console.log(engineering, accounting, dflt);
engineering.describe();
var engineeringCopy = engineering.describe();
var engineeringCopyThis = { name: "CopyDepartment", describe: engineering.describe };
engineeringCopyThis.describe();
