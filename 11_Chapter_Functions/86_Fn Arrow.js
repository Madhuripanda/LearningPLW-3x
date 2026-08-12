function greet(name){
    return `Hello, ${name}!`;
}

const greet1 = function (name1) {
    return `Hello, ${name1}!`;
}

const greet2 = (name1)=> `Hello, ${name1}!`

console.log(greet2("pramod"));
console.log(greet("Madhu"));
console.log(greet1("Vamsi"));