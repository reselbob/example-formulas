
function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

// take input from the user
const startingNumber = parseInt(prompt("Enter a starting  number: "));
//const startingNumber = 24;
let b = false;
let thePrime = startingNumber + 1;


while (!b){
    if(isPrime(thePrime)){
        console.log(`The first prime number after ${startingNumber} is ${thePrime}`)
        b = true;
    }
    thePrime++;
}
