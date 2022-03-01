
const bubbleSort = (arr) => {
	let tmp = undefined
    for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
			}
		}
    }
	return arr;
  };

// [ -4, 1, 2, 66, 70, 93 ]
console.log(bubbleSort([-4,1,66,93,2,70]));

// [-1,  0,  1, 66, 70, 89, 89]
console.log(bubbleSort([89,1,66,-1,89,70,0]));

// [ 2, 4, 66, 70, 83, 93 ]
console.log(bubbleSort([4,83,66,93,2,70]));

// [ 1, 4, 66, 70, 85, 93 ]
console.log(bubbleSort([4,1,66,93,85,70]));