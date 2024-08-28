interface BasicUser {
    name: string,
    email: string,
    loggedIn: boolean
}

interface Admin {
    name: string,
    email: string,
    role: number,
    permissions: string[],
    get printInfo() : Function
}
 
// interface SuperUser extends BasicUser, Admin {}
// combination of object properties for classes
type SuperUser = BasicUser & Admin

let superUser : SuperUser;

class Badger implements SuperUser {
    
    permissions = ['read', 'write']

    printInfo = () => {
        console.log(this)
    }
    
    constructor(
        public name: string,
        public email: string,
        public role: number,
        public loggedIn: boolean = true
    ) {}
    
}

superUser = new Badger(
    "Neer",
    "Badger@gmail.com",
    1,
    false
)

// console.log(superUser.printInfo)


type Combinable = number | string
type Numeric = number | boolean

type Universal = Combinable & Numeric
// & will find intersection for types
const myValue : Universal = 10


// type guard
function addTypeGuard(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b ==="number"){
        return a.toString() + b.toString();
    } 
    return a + b;
}

type UnknownEmployee = BasicUser | Admin;
// in - useful for interfaces since can't use instance of here
function printEmployeeInfo(emp : UnknownEmployee){
    console.log('Name: '+ emp.name)
    if ('permission' in emp){
        console.log('Permissions: '+ emp.permission)
    }
    if ('printInfo' in emp){
        console.log('Role from method guard?: '+ emp.role)
        console.log('PrintInfo: '+ emp.printInfo())
    }
}

printEmployeeInfo({
    name: 'Neer',
    email: "Neer@gmail.com",
    role: 1,
    permissions: ['read', 'write'],
    printInfo() {
        return "hello"
    }
})

class Car {
    drive(){
        console.log("Driving...")
    }
}

class Truck {
    drive(){
        console.log("Driving... trucke")
    }

    loadCargo(amt: number){
        console.log("Loading cargo ..." + amt)
    }
}

type Vehicle = Car | Truck; 

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if ('loadCargo' in vehicle || vehicle instanceof Truck){
        vehicle.loadCargo(1200)
    }
}

useVehicle(v1)
useVehicle(v2)