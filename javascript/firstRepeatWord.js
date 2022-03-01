// find first repeating word
const firstRepeatWord = (arr) => {
    let index = -1
    for (let i = 0; i < animals.length; i++) {
        for (let j = i + 1; j < animals.length; j++) {
            if (animals[i] != animals[j]) {
                if (j + 1 == animals.length) {
                    // console.log("i", i)
                    console.log("j", j)
                    index = i
                    console.log(i)
                    return;
                }
            }
        }
    }
}

// elephant
console.log(firstRepeatWord(['lion', 'elephant', 'leopard', 'elephant', 'lion', 'zebra', 'leopard', "cat"]));