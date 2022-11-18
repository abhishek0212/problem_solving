//[1,2,3].forEach(i => setTimeout(()=>console.log(i), 1000*i))

async function example() {
    for (let i= 1;i<4;i++) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), 1000)
        });
      let result = await promise; // wait until the promise resolves (*)
      console.log(result); // "done!"
    }
}

example();