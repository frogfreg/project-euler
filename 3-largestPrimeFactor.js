function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false
        }
    }
    return true;
}
//this works but is suuuper slow and ineffective
function largestPrimeFactor(num) {
    const primesArray = [];
    let currMax = 2;
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            primesArray.push(i);
        }

    }
    primesArray.reverse();
    for (let number of primesArray) {
        if (num % number === 0) {
            return number;
        }
    }
}
console.log(largestPrimeFactor(14751));