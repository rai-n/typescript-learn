// functions are first class 
// pass functions reference as arguments
const greet = () => console.log("Greetings...")

const logGreet = (fn : Function) => {
    fn();
} 

logGreet(greet);

// function expression
// having function reference as variables
const greetMe = () => {
    console.log("Hi neer")
}

greetMe()

// function expression on the fly 

logGreet(() => console.log("Wowe"))