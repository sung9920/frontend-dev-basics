/**
 * URL 다루기
 * 
 * JavaScript(Fonrtend)에서 URL을 다루어야 하는 예
 * 
 * 1. 리다이렉트
 * 
 * location.href = url;
 * 
 * 2. ajax 통신
 * 
 * $.ajax(url)
 * fetch(url)
 * axios(url)
 * 
 */

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// 1. escape: URL 전체를 encoding, 사용(X), deprecated
var url1 = escape(url);
console.log(url1);

// 2. encodeURI: URL 전체중 파라미터 부분만 encoding, 사용(o), URL 전체를 encoding 해야 하는 경우
var url2 = encodeURI(url);
console.log(url2);


// 3. encodeURIComponent
// 사용예
// 만들어야 할 URL: http://www.mysite.com/user?name=둘리&email=dooly@gmail.com
var url = "http://www.mysite.com/user";
var formData = {
    name: "둘리",
    email: "dooly@g.com"
}

var toQueryString = function(o) {
    var qs = [];
    for(var props in o) {
        qs.push(props + "=" + encodeURIComponent(o[props]));
    }

    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));