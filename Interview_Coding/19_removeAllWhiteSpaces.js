//let str = "  Hello\tWorld \n Test  ";
let str = "Geeks For Geeks"
let whiteSpaces = str.replace(/\s+/g,'');
console.log(whiteSpaces);

// \s → matches whitespace characters.
// + → matches one or more consecutive whitespaces.
// g → replaces all occurrences in the string.
// '' → replaces matched whitespace with nothing (removes it).