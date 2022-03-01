const isPalindrome = (s) => {
	s = s.toLowerCase().split(" ")
	for (let i = 0; i < s.length; i++) {
		s[i] = s[i].split("").reverse().join("")
	}
	return s == s.join(" ");
};


// true
console.log(isPalindrome('racecar')); // raceecar
// true
console.log(isPalindrome('madam')); // madam
// false
console.log(isPalindrome('not a palindrome'));