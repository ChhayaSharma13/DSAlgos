let pattern = ""; 
let n = 5;
for (let i=1; i<= n; i++){
    for(let j = 0; j <= n-i; j++){
        pattern += "*";
    }
    pattern += "\n";
    // It grows as n*n
}
console.log(pattern);