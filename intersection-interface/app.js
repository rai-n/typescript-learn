var superUser;
var Badger = /** @class */ (function () {
    function Badger(name, email, role, loggedIn) {
        if (loggedIn === void 0) { loggedIn = true; }
        var _this = this;
        this.name = name;
        this.email = email;
        this.role = role;
        this.loggedIn = loggedIn;
        this.permissions = ['read', 'write'];
        this.printInfo = function () {
            console.log(_this);
        };
    }
    return Badger;
}());
superUser = new Badger("Neer", "Badger@gmail.com", 1, false);
// & will find intersection for types
var myValue = 10;
// type guard
function addTypeGuard(a, b) {
    if (typeof a === 'string' || typeof b === "number") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('permission' in emp) {
        console.log('Permissions: ' + emp.permission);
    }
    if ('printInfo' in emp) {
        console.log('Role from method guard?: ' + emp.role);
        console.log('PrintInfo: ' + emp.printInfo());
    }
}
printEmployeeInfo({
    name: 'Neer',
    email: "Neer@gmail.com",
    role: 1,
    permissions: ['read', 'write'],
    printInfo: function () {
        return "hello";
    }
});
