
function isPrime(n) {
	var i = 1;

	// corner cases
	if (n == 0 || n == 1) {
	  return false;
	}

	// Checking Prime
	if (n == i) return true;

	// base cases
	if (n % i == 0) {
	  return false;
	}
	i++;
	return isPrime(n);
}

// program to print prime numbers between the two numbers

const lowerNumber = 2;
const higherNumber = 100;

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}