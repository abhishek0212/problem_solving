
//12345678990
//output single digit
let num = "-123456-78990"
let result=0
// console.log(num)
// num = Math.abs(num)
//console.log(num)

while(String(num).length > 0)
{
    let sum = 0
    //num = String(num)
     for (let i=0; i < num.length; i++) {

            if(num[i] != '-' || num[i] != '+') {
                sum += parseInt(num[i])
            }
            else {
                sum += num[i]
            }

            console.log(sum)
            //return
    }
    //console.log(sum)
    num = sum
}

console.log(num)
