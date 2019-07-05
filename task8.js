//A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.

function cursorCheck(str) { 
    str = str.toLowerCase();
    return (str.indexOf("ironman") !== -1) || 
        (str.indexOf("cursor") !== -1) || 
        (str.indexOf("ostap") !== -1);
};

cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here curso') // false


