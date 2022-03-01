/*
	There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

	Example
	s = "abcac"
	n = 10

	The substring we consider is abcacabcac, the first  10 characters of the infinite string. There are 4 occurrences of 'a' in the substring.
*/

function repeatedString(s, n) {

    let strLen = s.length
    let count = checkCharCnt("a", s, strLen)
    let rem = n % strLen

    count *= (n - rem)/strLen
    if(rem != 0) {
        count += checkCharCnt("a", s, rem)
    }
    return count
}
function checkCharCnt(char, str, n) {
    let count = 0;
    for(let i = 0; i < n; i++) {
        if (char == str[i]) {
           count++
        }
    }
    return count
}