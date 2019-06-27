//A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…

function fibonacci(n) { 
    let a = [1, 1];

    for (let i = 2; i < n; i++) {
        a.push(a[i-1] + a[i-2]);      
    }; 
    console.log(a);

    console.log('n-e число:', a[n-1]);
    return a[n-1];
}

fibonacci(3) // 2
fibonacci(5) // 5
fibonacci(7) // 13
