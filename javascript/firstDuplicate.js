function firstDuplicate(arr) {
    let elementSet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (elementSet.has(arr[i])) return arr[i];
        elementSet.add(arr[i]);
    }

    return "No duplicates here!";
}


const firstDuplicate = arr => {
	for(let i = 0; i < arr.length; i++){
	   if(arr.lastIndexOf(arr[i]) !== i){
		  return i
	   }
	}
	return -1
 }
 console.log(firstDuplicate([3, 5, 6, 8, 5, 3])); // 0
 console.log(firstDuplicate([0, 1, 2, 3, 4, 4, 5])); // 4
 console.log(firstDuplicate([0, 1, 1, 2, 3, 4, 4, 5])); // 1
 console.log(firstDuplicate([0, 1, 2, 3, 4, 9, 5])); // -1


abacbdc
d
abacbecd
e
//first non-repeating char in the string

function test() {
    for (let i =0; i< str.length; i++) {
        let hasDuplicate = false
        for (let j =0; j<str.length; j++) {
            if (str[i] == str[j] && i != j) {
                hasDuplicate = true
                break
            }
        }
        if (!hasDuplicate) {
            console.log(str[i])
            return;

        }
    }
}

function firstRepeating(str)
{

    // Creates an empty hashset
    let h = new Set();

    // Traverse the input array from left to right
    for(let i = 0; i <= str.length - 1; i++)
    {
        let c = str[i];

        // If element is already in hash
        // set, update x and then break
        if (h.has(c))
            return c;

        // Else add element to hash set
        else
            h.add(c);
    }
    return '\0';
}