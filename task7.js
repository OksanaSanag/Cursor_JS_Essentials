//function which transforms first and last letter to uppercase (use built in string’s method).


function firstAndLastToUpper(str) { 
    str = str[0].toUpperCase() + 
        str.substring(1, str.length-1) + 
        str[str.length-1].toUpperCase();
        
    console.log(str);
    return str;
}

firstAndLastToUpper('abc'); // 'AbC'
firstAndLastToUpper('danur');