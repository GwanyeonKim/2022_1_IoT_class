// 2-2
// 매개변수와 변수에 대한 호이스팅(1) - 원본코드

// 전역 컨텍스트 -- a
// 자바스크입트 엔진을 이해하지 못한 경우: 1, undefined, 2

// a(1)에서 var x = 1이 실행되었다. 이때 x는 1을 가리킨다.
// var x 실행 시, 이미 x가 있으므로 의미가 없는 줄이다.
// var x 실행 시, 1을 가리키고 있던 것이 2를 가리킨다.

// var a ---참조--->  function a (...) {....} 




function a (x) {
    console.log(x); // 1

    var x;
    console.log(x); // 1

    var x = 2;
    console.log(x); // 2
}

a(1);