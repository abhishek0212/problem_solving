/* Given an array of integers, write a function to move all zeroes to the end of it while maintaining the relative order of the non-zero elements. */

const list1 = [0, 1, 0, 3, 12];
const list2 = [1, 7, 0, 0, 8, 0, 10, 12, 0, 4];

const moveZeroes = (nums) => {
	let cnt = nums.length;
	let j = 0;
	for (let i = 0; i < cnt; i++) {
		if (nums[i] != 0) {
			nums[j++] = nums[i];
		}
	}
	while (nums.length - j != 0) {
		nums[j++] = 0;
	}
	return nums;
};

// [1, 3, 12, 0, 0]
console.log(moveZeroes(list1));
// [1, 7, 8, 10, 12, 4, 0, 0, 0, 0]
console.log(moveZeroes(list2));