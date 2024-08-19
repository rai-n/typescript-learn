"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 999] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["BLOGGER"] = 1] = "BLOGGER";
})(Role || (Role = {}));
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log("Hi, I am the admin!!!");
    },
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    person.greet();
}
