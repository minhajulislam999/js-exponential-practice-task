let a = 1234567.89;

console.log(a.toExponential()); //result : 1.23456789e+6

console.log(a.toExponential(1)); //1.2e+6

console.log(a.toExponential(3)); //1.235e+6

console.log(a.toExponential(5)); //1.23457e+6


console.log((45.789).toExponential(2)); //4.58e+1

{
    let a = 5000;

    console.log(a.toExponential(2));
}

{
    let a = 12000;
    console.log(typeof a.toExponential(2)); //result: 1.20e+4
}

{
    let b = 0.000345;
    let a= b.toExponential(4); //result: 3.450e-4
    console.log(a);
}

{
    let c = 1.6789;
    let d = c.toExponential(0);

    console.log(d);
}

{
    console.log((500).toExponential(4));
    console.log((0.95).toExponential(2));
}