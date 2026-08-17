const str = "Hello World".toLowerCase();
let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        vowels++;
    } else if (str[i] >= 'a' && str[i] <= 'z') {
        consonants++;
    }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);