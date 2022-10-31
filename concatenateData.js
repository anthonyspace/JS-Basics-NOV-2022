function cocanateDate(input) {
let fname = input[0];
let lname = input[1];
let age = input[2];
let city = input[3];
let sum = `You are ${fname} ${lname}, a ${age}-years old person from ${city}.`
console.log(sum);
}
cocanateDate(["Anton","Ivanov", 28, "Gabrovo"])
