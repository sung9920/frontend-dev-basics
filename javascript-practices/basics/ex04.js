console.log("====[01] 생성방법1: 생성자 함수");
var o1 = new Object();
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.name = "마이콜";
o1.another.age = 30;
console.log(o1);

console.log("====[02] 생성방법2: 리터럴 {}");
var o2 = {};
o2.name = "둘리";
o2.age = 10;
o2.another = {};
o2.another.name = "마이콜";
o2.another.age = 30;
console.log(o2);

console.log("====[03] 생성방법3: JSON(JavaScript Object Notation");
var o3 = {
    name: "둘리",
    age: 10,
    another: {
        name: "마이콜",
        age: 30
    }
};


console.log("====[참고] JSON 포맷은 데이터 통신(AJAX): XmlHttpRequest");
var responseBody = "{name: '둘리', age: 10, email: 'dooly@gmail.com'}";
var response = eval("(" + responseBody + ")");

console.log(response.name);