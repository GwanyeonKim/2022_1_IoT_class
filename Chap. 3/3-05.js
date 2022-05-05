// 3-5
// 전역 변수와 전역 객체 (3)

// ????
// 출력 값이 이상하다 (앞에 예제와 같은 문제 발생)

// var a = 1 과 같이 전역 변수를 선언하게 되면 다음과 같은 프로퍼티가 생김
// update: false, delete: false
// 윈도우 접근 방식으로는 업데이트 및 삭제 불가능

// global.a = 1;로 해야 업데이트 및 삭제



var a = 1;
delete global.a;

console.log(a, global.a, this.a);  // 1 undefined undefined // global로 할당 안됨 (이상한 출력)
// --
var b = 2;
delete b;

console.log(b, global.b, this.b);  // 2 undefined undefined // global로 할당 안됨 (이상한 출력)
// --
global.c = 3;
delete global.c;

console.log(c, global.c, this.c);  // c 가 없어서 오류 
// --
global.d = 4;
delete d;
console.log(d, global.d, this.d);  // d 가 없어서 오류 


// ------------------------------------
// var a = 1;
// delete window.a;

// console.log(a, window.a, this.a);
// // --
// var b = 2;
// delete b;

// console.log(b, window.b, this.b);
// // --
// window.c = 3;
// delete window.c;

// console.log(c, window.c, this.c);
// // --
// window.d = 4;
// delete d;
// console.log(d, window.d, this.d);