//  Promise 지원 비동기 함수 사용 II: async ~ await
const {asyncFn02} = require('./async-fns');

const fn = async function(param) {
    try {
        const result = await asyncFn02(param);
        console.log(result);
    } catch(error) {
        console.log(error);
    }
};

// test: success
fn('params~');

// test: fail
fn(null);

console.log('wait....');
