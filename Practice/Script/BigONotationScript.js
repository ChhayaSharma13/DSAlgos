function addNumbers(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i; 
    }
    return sum;
}
console.log(addNumbers(10));


function addNumbersNumeric(n){
    return (n * (n + 1)) / 2;
}

console.log(addNumbersNumeric(10));