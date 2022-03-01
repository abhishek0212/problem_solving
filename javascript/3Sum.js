/*
	Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

	Notice that the solution set must not contain duplicate triplets.

	Example 1:
	Input: nums = [-1,0,1,2,-1,-4]
	Output: [[-1,-1,2],[-1,0,1]]

	Example 2:
	Input: nums = []
	Output: []

	Example 3:
	Input: nums = [0]
	Output: []
 */
	var threeSum = function(nums) {
		for(let i=0) {

		}
	}


	// function solve(ar) {
	// 	// Write your code here
	// 	let sum = 0

	// 	for (let i=0; i<ar.length; i++) {
	// 		 let count = 0;
	// 		for (let j=i+1;j<ar.length; j++){
	// 			if(ar[i] == ar[j]) {
	// 				count++
	// 			}
	// 			if (count > 2) {
	// 				 console.log(ar[j])
	// 				break
	// 			}
	// 		}
	// 		 if(count < 2) {
	// 			  console.log(ar[i])
	// 				sum += ar[i]
	// 			}
	// 	}
	// 	console.log(sum)
	// 	return sum;
	// }


	// Interview questions
	// (function(){
	// 	var a = b = 3;
	//   })();

	//   console.log("a defined? " + (typeof a !== 'undefined'));
	//   console.log("b defined? " + (typeof b !== 'undefined'));



	//   var myObject = {
	// 	  foo: "bar",
	// 	  func: function() {
	// 		  var self = this;
	// 		  console.log("outer func:  this.foo = " + this.foo);
	// 		  console.log("outer func:  self.foo = " + self.foo);
	// 		  (function() {
	// 			  console.log("inner func:  this.foo = " + this.foo);
	// 			  console.log("inner func:  self.foo = " + self.foo);
	// 		  }());
	// 	  }
	//   };
	//   myObject.func();