let fruits = ["apple", "banana", "orange", "grape"];

console.log(fruits[0]);
console.log(fruits[2]);

fruits.push("anything");
console.log(fruits);

fruits.unshift("anything1");
console.log(fruits);

let x = fruits.pop();
console.log(fruits);

fruits.shift();      

for(let i = 0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

console.log(fruits.slice(1,1));

fruits.splice(1,2,"pear","melon");

let morefruits = ["grapefruit", "pineapple"];

let nyanfruits = fruits.concat(morefruits);

console.log(fruits);

console.log(nyanfruits);

console.log(x);