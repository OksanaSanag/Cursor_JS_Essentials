//A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.

function toUppercase(str) { 
   let str2 = '';
   for (let i = 0; i < str.length; i++) {
      str2 = str2 + String.fromCharCode(str.charCodeAt(i) - 32);
   };
   
   console.log(str2);
   return str2;
} 

toUppercase('abc') // 'ABC' 