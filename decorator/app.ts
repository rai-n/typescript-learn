// function Logger(construct: Function){
//     console.log("logging...")
//     console.log(construct)
// }

// @Logger
// class Person {
//     name: string
//     constructor(){
//         this.name = "bob"
//         console.log("Creating person object")
//     }
// }

// const bob = new Person();


function LoggerFactory(logString: string){
return function (constructor: Function){
    console.log("logging...")
    console.log(logString)
};
}

@LoggerFactory('Alex called')
class PersonFactory {
    name: string
    constructor(){
        this.name = "alex"
        console.log("Creating person object")
    }
}

const alex = new PersonFactory();


function WithTemplate(template: string, hookId: string){
    return function(_: Function){
        const hookElem = document.getElementById(hookId);
        if(hookElem){
            hookElem.innerHTML = template;
         }
    }
}


@WithTemplate('<h1>Person objecT: </h1>', 'app')
class PersonTemplate {
    name: string
    constructor(){
        this.name = "alex"
        console.log("Creating person object")
    }
}

// Suppose we have a class called ExampleClass with a property decorated using two decorators: @first() and @second().
// The evaluation order for multiple decorators on a single declaration follows function composition:
// The expressions for each decorator are evaluated top-to-bottom.
// The results are then called as functions from bottom-to-top.
