console.log("======= [01] 기본타입, primitive type =======");
var u;
var i = 10;
var s = "hello";
var b = true;

console.log("u:" + typeof(u)); // undefined
console.log("i:" + typeof(i)); // number
console.log("s:" + typeof(s)); // string
console.log("b:" + typeof(b)); // boolean

console.log("======= [02] 객체타입, object type =======");
var i = new Number(10);
var s = new String("hello");
var b = new Boolean(true);
var o = {};
var a = [];
var n = null;

console.log("i:" + typeof(i)); // object
console.log("s:" + typeof(s)); // object    
console.log("b:" + typeof(b)); // object
console.log("o:" + typeof(o)); // object
console.log("a:" + typeof(a)); // object
console.log("n:" + typeof(n)); // object

console.log("======= [03] 함수타입, function type =======");
var f1 = function() {};
function f2() {}
var f3 = new Function();

console.log("f1:" + typeof(f1)); // function
console.log("f2:" + typeof(f2)); // function
console.log("f3:" + typeof(f3)); // function
