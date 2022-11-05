function isPrime(n) {
for (let i=2; i<n; i++){
    if(n % i == 0) {
        return false
    }
}
return true
}
let primes =[]

for(let i=2; i<250001; i++){
    if(isPrime(i)){
        primes.push(i)
    }
}
console.log(primes.length)
isPrime();