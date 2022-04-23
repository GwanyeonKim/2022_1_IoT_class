// 1-19
// 자동으로 undefined를 부여하는 경우

// undefined --> JS engine이 자동으로 부여
// 1. 값을 대입하지 않은 변수
// 2. 객체 내부의 존재하지 않는 프로퍼티 접근
// 3. return문이 없거나 호출되지 않는 함수의 실행 결과


var a;
console.log(a);   // undefined

var obj = {
    a: 1
};

console.log(obj.a);   // 1
console.log(obj.b);   // undefined
// console.log(b);    // referenceError : b is not defined


var func = function() {
};
var c = func();
console.log(c);   // undefined