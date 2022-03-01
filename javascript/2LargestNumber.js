const largestNum = (arr) => {
	let h1 = arr[0]
	let h2 = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > h1) {
			h2 = h1
			h1 = arr[i]
		}
		else if (arr[i] > h2 && h2 < h1) {
			h2 = arr[i]
		}
    }
	return h2;
  };

// 70
console.log(largestNum([4,1,66,93,2,70]));

// 89
console.log(largestNum([89,1,66,93,2,70]));

// 83
console.log(largestNum([4,83,66,93,2,70]));

// 85
console.log(largestNum([4,1,66,93,85,70]));
