//A function which returns total sum of a range

function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    };    
    return sum;    
}

// за допомогою методів масивів
/*
function sumRange(start, end) {
     let arr = [];
     for (let i = start; i <= end; i++) {
        arr.push(i);  // console.log(arr)
     }; 
     console.log('array:', arr);

 // метод 1
    let totalSum = arr.reduce(function(prevResult, current) {
        return prevResult + current
    }); 
    console.log('totalSum', totalSum);
    return totalSum;
}


// метод 2

    let totalSum = 0;
    arr.forEach(function(item, i, arr) {
        totalSum = totalSum + item;
    });
    console.log('totalSum', totalSum);
    return totalSum;


// метод 3
   
    let totalSum = 0;
     arr.map(function(item) {
        totalSum = totalSum + item;
      });
    console.log('totalSum', totalSum);
    return totalSum;

*/

sumRange(2, 4); // 9 
sumRange(-1, 3); // 5
sumRange(-2, 5);
