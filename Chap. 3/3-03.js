// 3-3
// 전역 변수와 전역 객체 (1)

// 전역 변수를 선언하면 JS엔진은 이를 전역객체의 프로퍼티로 할당

// 출력 값이 이상하다


var a = 1;

console.log(a);
//console.log(window.a);
console.log(global.a);   // undefined로 나온다...
console.log(this.a);     // undefined로 나온다...

console.log(this);
console.log(global);