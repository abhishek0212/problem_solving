
const sortZeroOne = (arr) => {
	let arrLen = arr.length
	let j = 0
    for (let i = 0; i < arrLen; i++) {
		if (arr[i] == 1) {
			arr[j++] = arr[i]
		}
    }
	while (arrLen - j != 0) {
		arr[j++] = 0
	}
	return arr;
  };

// [1, 1, 1, 1, 0, 0, 0, 0]
console.log(sortZeroOne([1,0,0,1,1,0,1,0]));
