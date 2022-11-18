const arr = ["war", "warrior", "some", "wars"]

function match(array, str) {
	let count = str[str.length - 1]

	for (let i = 0; i< arr.length; i++) {
	let matched = false
  let strLen = arr[i].length
  for (let j = 0; j<count; j++)
  {
  	if (str[j] == arr[i][j])
    {
    	matched = true
    }
  }
   if (matched) {
    	// for() {

      // }
    }

}

}

match(arr, "wa2") // output: ["warrior", "wars"]
match(arr, "wa1") // output: ["war", "warrior", "wars"]
