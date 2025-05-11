let a = 1234567.89;

console.log(a.toExponential()); //result : 1.23456789e+6

console.log(a.toExponential(1)); //1.2e+6

console.log(a.toExponential(3)); //1.235e+6

console.log(a.toExponential(5)); //1.23457e+6


console.log((45.789).toExponential(2)); //4.58e+1