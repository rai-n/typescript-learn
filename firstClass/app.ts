class Department {
    private name: string = "DFLT";
    private employeesIds: number[] = []

    constructor (name: string){
        this.name = name
    }
    // catch unwanted behaviors
    describe(this : Department){
        console.log("Department: " + this.name)
    }

    public addEmployee = (employeeId : number) => this.employeesIds.push(employeeId)
    public departmentSize = () => this.employeesIds.length
    public allEmployees = () => this.employeesIds.forEach(id => console.log(id)) 
}

const engineering = new Department("Engineering")
const accounting = new Department("Accounting")
const dflt = new Department("")


// console.log(engineering, accounting, dflt)

engineering.describe()

const engineeringCopy =  engineering.describe()

// avoid undefined
// const engineeringCopyThis =  {name: "CopyDepartment", describe : engineering.describe}
// engineeringCopyThis.describe()

engineering.addEmployee(1)
engineering.addEmployee(2)
engineering.addEmployee(3)

engineering.allEmployees()
console.log(engineering.departmentSize()) 

 

class DepartmentShortCut {
    describe(){
        console.log(`Department: ${this.name}: ${this.departmentId}`)
    }
    // readonly for typesafety
    constructor(private readonly name: string, private departmentId: number){
    }
}

const accountingShortCut = new DepartmentShortCut("accounting", 2)
accountingShortCut.describe()


class FinanceDepartment extends Department{

    public generateReport(){
        console.log("Generating report...")
    }
}

const financeDepartment = new FinanceDepartment("Finance");
financeDepartment.generateReport()

class ITDepartment extends Department{

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
        return ITDepartment.salary * staffAmt
    }
}

const itDepartment = new ITDepartment("IT", ["admin1", "admin2"])
itDepartment.addAdmins("admin3")
console.log(itDepartment.findAdmins)

itDepartment.registerDevice = 1 
itDepartment.registerDevice = 4
console.log(itDepartment.findDevices)

console.log("Finance budget: "+ ITDepartment.getDepartmentBudget(itDepartment.findAdmins.length))