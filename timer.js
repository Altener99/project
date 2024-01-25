let x = () => console.log("Delayed function execution!");

let a = setInterval(x,2000);

setTimeout(() => {
    clearInterval(a);
}, 5000);

console.log(a);
