class Department {
    name: string = "DFLT";

    constructor (name: string){
        this.name = name
    }
    // catch unwanted behaviors
    describe(this : Department){
        console.log("Department: " + this.name)
    }
}

const engineering = new Department("Engineering")
const accounting = new Department("Accounting")
const dflt = new Department("")


console.log(engineering, accounting, dflt)

engineering.describe()

const engineeringCopy =  engineering.describe()

// avoid undefined
const engineeringCopyThis =  {name: "CopyDepartment", describe : engineering.describe}
engineeringCopyThis.describe()

 