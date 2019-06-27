//Write a function which returns the smallest of three numbers.

function min(a, b, c) {
    console.log('numbers', a, b, c);
    return (a < b && a < c) ? a : (a < b && a > c) ? c : b ;
    }

min(10, 5, 11) // 5 
    console.log('min', min(10, 5, 11));
min(3, 8, 4) // 3
    console.log('min', min(3, 8, 4));