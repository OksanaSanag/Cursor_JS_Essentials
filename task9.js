//A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.

function toUppercase(str) { 
   let str2 = '';
   for (let i = 0; i < str.length; i++) {
     if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
       str2 = str2 + String.fromCharCode(str.charCodeAt(i) - 32);
     }
     else str2 = str2 + str[i];
   };
   
   console.log(str2);
   return str2;
} 

toUppercase('abc');
toUppercase('abc 12щйф %^&*@#$!df fg 56h#$');
