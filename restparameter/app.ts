const newAdd = (n1: number, n2: number, ...numbers : number[]) => {
    return n1+ n2 + numbers.reduce((acc, cur) => acc + cur, 0)
}

console.log(newAdd(1, 1, 2, 2, 2));