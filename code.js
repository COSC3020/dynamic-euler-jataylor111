// function factorial(n) {
//     if(n === 0) return 1;
//     else return n * factorial(n - 1);
// }

// function e(n) {
//     if(n === 0) return 1;
//     else return 1.0 / factorial(n) + e(n - 1);
// }

function e(n) {
    let euler = 1.0;
    let fact = 1
    // Change to for loop
    for (let i = 1; i <= n; i++) { // Runs along all of n, complexity n
        euler += (1.0 / (fact *= i)); 
    }
    return euler;
}
