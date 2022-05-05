// 3-4
// 전역 변수와 전역 객체 (2)

// ????
// 출력 값이 이상하다 (앞에 예제와 같은 문제 발생)

// var a = 1 과 같이 전역 변수를 선언하게 되면 다음과 같은 프로퍼티가 생김
// update: false, delete: false
// 윈도우  접근 방식으로는 업데이트 삭제 불가능

// ------------------------------------
var a = 1;
global.b = 2;

console.log(a, global.a, this.a);  // 1 undefined undefined  // 앞에 예제와 같은 문제 발생
console.log(b, global.b, this.b);  // 2 2 undefined


global.a = 3;
b = 4;

console.log(a, global.a, this.a);  // 1 3 undefined
console.log(b, global.b, this.b);  // 4 4 undefined

// ------------------------------------
// var a = 1;

// window.b = 2;

// console.log(a, window.a, this.a);
// console.log(a, window.b, this.b);


// wondow.a = 3;
// b = 4;

// console.log(a, window.a, this.a);
// console.log(a, window.b, this.b);