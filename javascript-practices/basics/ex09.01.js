/**
 * string 기본 타입 & String.prototype.*
 * 
 */

console.log("============[01] 배열처럼 접근이 가능");
var str1 = "hello world";
for(var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

console.log("============[02] 문자열 합치기 연산 (+)");
var str2 = "hello";
var str3 = "world";
var str4 = str2 + " " + str3;
console.log(str4);

console.log("============[03] casting");
var str5 = 4 + "4";
console.log(str5);

var str6 = "boolean: " + true;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2"); // 8
console.log(index);

var index = str7.indexOf("string4"); // -1
console.log(index);

var str8 = str7.substring(10 /*first index*/, 13 /* lastindex - 1 */);
console.log(str8);

var a = str7.split(" ");
console.log(a);

var a = str7.split(":");
console.log(a);