var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: "Neer" }, { age: 24 });
var mergeObj2 = merge({ name: "Neer" }, { age: 24, gender: "male" });
console.log(mergeObj);
console.log(mergeObj2);
function countAndPrint(elem) {
    var desc = "Got no value.";
    if (elem.length === 1)
        desc = "Got 1 element.";
    else if (elem.length > 1)
        desc = "Got " + elem.length + " elements.";
    return [elem, desc];
}
console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["Hi there!", "How are you?"]));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Neer' }, "name");
var StorageData = /** @class */ (function () {
    function StorageData() {
        this.data = [];
    }
    StorageData.prototype.addItem = function (item) {
        this.data.push(item);
    };
    StorageData.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    StorageData.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return StorageData;
}());
var textStorage = new StorageData();
textStorage.addItem("Neer");
textStorage.removeItem("Neer");
textStorage.removeItem("Hello");
console.log(textStorage.getItems());
var numberStorage = new StorageData();
numberStorage.addItem(1);
console.log(numberStorage.getItems());
