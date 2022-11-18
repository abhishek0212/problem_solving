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


hi
abba
naman


function test1(str)
{
let str2 = ""

let strlen = Math.floor(str.length/2)
    for(let i = strlen; i < 0; i--) {
        str2 += str[i]
    }
    str2 += subString(str.length-strlen ,str.length)
    //console.log( str2)
    if (str2 == str) {
    console.log("String is palindrome")
    }
    else {
    console.log("String is not palindrome")}
}


test1("hi")
test1("abba")
test1("abba")