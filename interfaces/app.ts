interface User {
    readonly name?: string
    age?: number

    greet(message: string): void
    set setAge (age : number) 
}

interface UserClient{
    findUser : User
}


let user1 : User;

user1 = {
    name : "Neer",
    age: 24,

    greet(message: string): void {
        console.log(`hello ${this.name}`)
    },
    set setAge(age : number) {
        this.age = age
    }
}

user1.greet("Hello")

class Neer implements User {
    greet(message?: string): void {
        console.log("Neer says "+message)
    }
    set setAge(age: number) {
        this.age = age
    }
    constructor(public name?: string, public age?: number) {
       if (name){
        this.name = name;
    }
    this.age = age;
    }

}

// type funcType = (a: string) => string

interface funcType {
    (a: string) : string
}

const func : funcType = (a: string) => {
    return a + "hello "
}


const neer = new Neer("Neer", 24);
neer.greet("wassup")

const noAge = new Neer("NoAge")
console.log(noAge.age)
noAge.setAge = 24
console.log(noAge.age)


