
function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

// take input from the user
const num = parseInt(prompt("Enter a number to verify as prime: "));

let answer=`${num} is not prime.`;

if(isPrime(num)) answer=`${num} is prime.`;

console.log(answer);
