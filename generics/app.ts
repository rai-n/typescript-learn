function merge<T extends object, U extends object>(objA: T, objB: U) {
  return (<any>Object).assign(objA, objB);
}

const mergeObj = merge({ name: "Neer" }, { age: 24 });
const mergeObj2 = merge({ name: "Neer" }, { age: 24, gender: "male" });

console.log(mergeObj);
console.log(mergeObj2);

interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(elem : T): [T, string]{
    let desc = "Got no value."
    if (elem.length === 1)
        desc = "Got 1 element."
    else if (elem.length > 1)
        desc = "Got " + elem.length + " elements."
    return [elem, desc]
}

console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["Hi there!", "How are you?"]));

function extractAndConvert<T extends object, U extends keyof T>(
    obj : T, key: U){
    return obj[key]
}

extractAndConvert({name: 'Neer'}, "name")

class StorageData<T extends string | number | boolean> { 
    private data: T[] = []
    

    addItem(item : T){
        this.data.push(item)
    }
    
    removeItem(item : T){
        this.data.splice(this.data.indexOf(item), 1)
    }
    
    getItems(){
        return [...this.data]
    }
}

const textStorage = new StorageData<string>();
textStorage.addItem("Neer")
textStorage.removeItem("Neer")
textStorage.removeItem("Hello")
console.log(textStorage.getItems())

const numberStorage = new StorageData<number>();
numberStorage.addItem(1)
console.log(numberStorage.getItems())


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) : CourseGoal{

    let courseGoal : Partial<CourseGoal> = {};
    courseGoal.completeUntil = date;
    courseGoal.title = title;
    courseGoal.description = description;
    
    return courseGoal as CourseGoal;
    // return {title: title, description: description, completeUntil: date} 
}

const names: Readonly<string[]> = ["Neer", 'Neer2'];
// names.push("Neer3");

// generic type is good for same type in the class but union type for having many 
// different values allowed