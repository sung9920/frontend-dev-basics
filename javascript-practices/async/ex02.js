//  Promise 지원 비동기 함수 사용 I: ~ then ~ catch
const {asyncFn02} = require('./async-fns');

// test: success
asyncFn02('params~')
    .then(function(result){
        console.log(result);        
    })
    .catch(function(error){
        console.log(error);
    });


// test: fail
asyncFn02(null)
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    });


console.log('wait....');
