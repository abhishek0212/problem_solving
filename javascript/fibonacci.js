//0 1 1 2 3 5 8 13

let limit = 10;
let n1 = 0;
let n2 = 1;
let n3 = 0
for (let i = 0; i< limit; i++)
{
    console.log(n1)
	n3 = n1 + n2
    n1 = n2
    n2 = n3
}