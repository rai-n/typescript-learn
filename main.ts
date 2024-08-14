const button = document.querySelector("button");
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;
const p = document.getElementById("sum")! as HTMLParagraphElement;

function add (num1: number, num2: number) : number{
    return num1+num2; 
}

button.addEventListener("click", function(){
    console.log(add(+input1.value, +input2.value));
    p.innerHTML = "Sum: "
    p.innerHTML = p.innerHTML + add(+input1.value, +input2.value).toString();
})

 