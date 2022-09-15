function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}

// take input from the user
const limit = parseInt(prompt("Enter the numeric limit under which to find all prime numbers: "));
const finds = [];


for (let i =3; i <=limit; i++){
    if(isPrime(i)){
      finds.push(i)
    }
    i++;
}
console.log(`Here are all the prime numbers under ${limit}:`)
finds.forEach(f =>{
  console.log(f);
})
