
console.log("==========[01] undefined");
var myVar1;              // 암시적으로 undefined가 대입
var myVar2 = undefined;  // 명시적으로 undefined를 대입
var myVar3 = null;

console.log(myVar1, myVar2, myVar3);

console.log("==========[02] var");
// x; //Reference Error: x is not defined
y = 10; // 변수 정의(var 생략)
var x;  // 변수 정의(var 사용)

console.log("==========[02] undefined, null 동치(equals)");
console.log(myVar1 == myVar3);   // 값비교
console.log(myVar1 === myVar3);  // 타입비교 + (값비교, 동일성)

// == : equality, 값의 동치성, 형변환
console.log(4 == "4");
console.log(false == 0);
console.log(4 == new String("4"));

// ===
// 1. 타입의 동일성
// 2. 타입이 동일한 경우
//    2-1. 기본 타입: 값의 동일성
//    2-2. 객체(object, function) 타입: 객체의 동일성
console.log(4 === "4");  
console.log(false === 0);
console.log(4 === new String("4"));
console.log(4 === 5 - 2);
console.log(new Number(4) === new Number(4));