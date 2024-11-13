// function factorial(n) {
//     if(n === 0) return 1;
//     else return n * factorial(n - 1);
// }

// function e(n) {
//     if(n === 0) return 1;
//     else return 1.0 / factorial(n) + e(n - 1);
// }

function factorial(n) {
    let fact = 1;
    // Change to use for loop 
    for (let i = 1; i <= n; i++) { // Runs along all of n, complexity n
        fact *= i;
    }
    return fact;
}

function e(n) {
    let euler = 1.0;
    // Change to for loop
    // Delete Later: check with Ali, seems too simple to be right
    for (let i = 1; i <= n; i++) { // Runs along all of n, complexity n
        euler += (1.0 / factorial(i)); 
    }
    return euler;
}
