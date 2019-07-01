//A function which removes duplication of letters in string. The function must be case-insensitive.

function removeDuplicationLetters(str) {
// Метод 1 array
/*
    const arr = str.toLowerCase().split(''); 
    console.log('arr:', arr);

    const newArr = arr.filter(function(letter, i, arr) {
        return ((arr.indexOf(letter) == i ) || (letter === ' '))
    });
    console.log('newArr:', newArr);

    return newArr.join('');
*/

    return str.toLowerCase().split('').filter(function(letter, i, arr) {
        return ((arr.indexOf(letter) == i ) || (letter === ' '))
    }).join('');

}

removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn '


/*
// Метод 2 string

function removeDuplicationLetters(str) {
    str = str.toLowerCase(); console.log('input string:', str);
    let str2 = str[0];

    for (let i = 0; i < str.length; i++) {
        (str[i] == ' ') ? (str2 = str2 + str[i]) : 
                        ( str2.indexOf(str[i]) == -1 ) ? (str2 = str2 + str[i]): str2;
    }
    
    console.log('output string:', str2);
    return str2;
}

removeDuplicationLetters('Hello I am Iron Man') // 'Helo I am rn ' */
