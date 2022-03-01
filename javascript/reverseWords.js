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