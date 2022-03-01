// find first repeating word
const firstRepeatWord = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                console.log("j", arr[i])
                console.log("j", arr[j])
            }
        }
    }
}

// elephant
console.log(firstRepeatWord(['lion', 'elephant', 'leopard', 'elephant', 'lion', 'zebra', 'leopard', "cat"]));