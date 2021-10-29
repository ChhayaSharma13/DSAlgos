function addNumbers(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i; 
    }
    return sum;
    // number of operations is (eventually bounded by a multiple of n => O(n))
    // as n grows loop grows
    // We consider order of magnitude 
}

console.log(addNumbers(10));


function addNumbersNumeric(n){
    return (n * (n + 1)) / 2;
    // Always 3 options i.e. constant O(1)
}

console.log(addNumbersNumeric(10));