/* Given a sentence, reverse each word in the sentence while maintaining the word order. */

const s1 = 'My pudding is trapped forever.'
const s2 = 'In this house, we obey the laws of thermodynamics!';

const reverseWords = (sentence) => {
	sentence = sentence.split(" ")
	for (let i = 0; i < sentence.length; i++) {
		sentence[i] = sentence[i].split("").reverse().join("")
	}
	return sentence.join(" ");
};

// yM gniddup si deppart .reverof
console.log(reverseWords(s1));

// nI siht ,esuoh ew yebo eht swal fo !scimanydomreht
console.log(reverseWords(s2));


// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user


const result = reverseString("hello world");
console.log(result);