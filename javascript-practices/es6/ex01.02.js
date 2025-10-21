/*
    let & const
*/

// 1. const의 블록 범위
try {
    if(true) {
        const NUM = 10;
    }

    console.log(NUM);

} catch(e) {
    console.log("error:" + e);
}


// 2. const의 상수화 : 대입(Assignment) 에러
try {
    const NUM = 10;
    NUM = 20;
} catch(e) {
    console.log("error:" + e);
}