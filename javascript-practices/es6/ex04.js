/*
    Arrow Function
*/

// ex1
console.log("==============[ex1]");
const power = function(x) {
    const powerVal = x*x;
    return powerVal;
}

const nums = [1, 2, 3, 4, 5];

nums.forEach(function(e){
    console.log(`${e}:${power(e)}`);
});

// ex2
console.log("==============[ex2]");
nums.forEach(function(e) {
    // const result = (function(x) {
    //    return x * x;
    // })(e);
    // console.log(`${e}:${result}`);
 
    // const result = ((x) => {
    //    return x * x;
    // })(e);
    // console.log(`${e}:${result}`);

    // const result = (x => x*x)(e);
    // console.log(`${e}:${result}`);
    
    console.log(`${e}:${(x => x*x)(e)}`);
});

// ex3
console.log("==============[ex3]");
// nums.forEach(function(e) {
//    console.log(`${e}:${(x => x*x)(e)}`);
// });
nums.forEach(e => console.log(`${e}:${(x => x*x)(e)}`));


// ex4: this를 어휘에서(코드에서) 바인딩할 수 없다.
console.log("==============[ex4]");
const dooly = {
    name: "둘리",
    friends: ["마이콜", "또치", "도우너"],
    // printFriends: () => {
    //    this.friends.forEach(f => console.log(f));        
    // }
    printFriends: function() {
         this.friends.forEach(f => console.log(f));        
    }
};

dooly.printFriends();