export abstract class Department {
    private employeesIds: number[] = []

    constructor (public name: string){
        this.name = name
    }
    // catch unwanted behaviors
    abstract describe(this : Department) : void;
    // describe(){
    //     console.log(`Department: ${this.name}: ${this.departmentId}`)
    // }

    public addEmployee = (employeeId : number) => this.employeesIds.push(employeeId)
    public departmentSize = () => this.employeesIds.length
    public allEmployees = () => this.employeesIds.forEach(id => console.log(id)) 
}

class ITDepartment extends Department{
    admins: string[]
    constructor(name: string, admins: string[]){
        super(name)
        this.admins = admins
    }
    // enforcing classes share common methods using abstract method 
    // but different implementation
    describe(this: Department): void {
        console.log('Department id: ' + this.name)
    }
}

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


class FinanceDepartment extends Department{
    
    constructor(name: string, departmentId: number){
        super(name)
    }
    

    describe(): void {
      console.log('Accounting department - name: '+this.name)  
    }

    public generateReport(){
        console.log("Generating report...")
    }
}

const financeDepartment = new FinanceDepartment("Finance", 2);
financeDepartment.generateReport()

class ITDepartment2 extends Department{

    describe(this: Department): void {
        console.log("Department2 IT")
    }

    static salary = 1000

    // from db 
    private devices : number[] = []

    constructor(name: string, private admins: string[]){
        super(name)
        this.admins = admins
    }


    
    set registerDevice(id : number){
        console.log("Register device...")
        if (id < 0){
            throw new Error("Invalid device id: "+id)
        }
        this.devices.push(id)
    }

    get findAdmins() {
        return this.admins
    }

    get findDevices() {
        return this.devices
    }
   
    addAdmins(name: string){
        this.admins.push(name)
    }

    static getDepartmentBudget(staffAmt: number){
        return ITDepartment2.salary * staffAmt
    }
}

const itDepartment = new ITDepartment2("IT", ["admin1", "admin2"])
itDepartment.addAdmins("admin3")
console.log(itDepartment.findAdmins)

itDepartment.registerDevice = 1 
itDepartment.registerDevice = 4
console.log(itDepartment.findDevices)

// console.log("Finance budget: "+ ITDepartment.getDepartmentBudget(itDepartment.findAdmins.length))

financeDepartment.describe()