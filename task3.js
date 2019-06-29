//task3
//A function which prints the stair picture of size n

function printStairs(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str = str + '#';
        console.log(str);       
    }; 
}

printStairs(4);
