enum Role {
    ADMIN = 999, READ_ONLY = 0, BLOGGER = 1 
}

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log("Hi, I am the admin!!!")
    },
    role: Role.ADMIN
}

if (person.role === Role.ADMIN) {
    person.greet()
}