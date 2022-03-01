
/*
    Find second maximun digit in array
*/
var arr = [5,4,92,8,1,10,92]
// var arr1 = []
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j< arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             /*let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;*/
//             arr1.push(arr[i])
//         }
//     }

// }
// console.log(arr)
// console.log(arr1[arr1.length-2])

var arr3 = arr.sort((a,b) => {
    return b -a
})
console.log(arr3)
// var num =5
// var result = 1;
// for (let i =num; i > 0; i --) {
//     result *= i;
// }
// console.log(result)