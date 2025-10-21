/**
 * Array's Iteration Functions
 * 
 * - forEach
 * - map
 * - filter
 * - find
 * - findIndex
 * - every
 * - some
 * - reduce
 * - reduceRight
 * 
 */

const a = [1, 2, 3, 4, 5];

console.log("==========[01: forEach]")
a.forEach((e, i) => console.log(i + ":" + e));

console.log("==========[02: map]")
const a2 = a.map(e => e*e);
console.log(a2);

console.log("==========[03: filter]")
const a3 = a.filter(e => e % 2 === 0);
console.log(a3);


console.log("==========[04: find]")
const value = a.find(e => e % 2 === 0);
console.log(value);


console.log("==========[05: findIndex]")
const index = a.findIndex(e => e % 3 === 0);
console.log(index);


console.log("==========[06: every]")
const result1 = a.every(e => e < 10);
console.log(result1);


console.log("==========[07: some]")
const result2 = a.some(e => e % 6 === 0);
console.log(result2);


console.log("==========[08: reduce]");
let sum = 0;
a.forEach(e => sum += e);
console.log(sum);

sum = a.reduce((a, e) => {
    a += e;
    return a;
}, 0);
console.log(sum);


console.log("==========[09: reduceRight]");
const result3 = a.reduceRight(function(a, e){
    a.push(e * e);
    return a;
}, []);
console.log(result3);