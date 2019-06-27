//Task 2
//A function which returns reversed string.

function reverse(str) {

    /* let arr = str.split('');     console.log(arr);
       arr.reverse();               console.log(arr);
       str = arr.join('');          console.log(str); 
    */
    
    str = str.split('').reverse().join('');
    console.log(str);
    return str;

};

reverse('abc'); // 'cba'

