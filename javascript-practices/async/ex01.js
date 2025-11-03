//  콜백 지원 비동기 함수 사용
const {asyncFn01} = require('./async-fns');

// test: success
asyncFn01('params~', function(error, result){
    if(error) {
        console.log('error');
        return;
    }

    console.log(result);
});


// test: fail
asyncFn01(null, function(error, result){
    if(error) {
        console.log(error);
        return;
    }

    console.log(result);
});


console.log('wait....');
