// 6-03
// constructor 프로퍼티



/*

인스턴스의 --protp__가 생성자 함수의 prototype 프러퍼티를 참조  
__proto__가 생략 가능 -->  인스턴스에서 직접 constructor에 접근 가능  
읽기 전용인 경우를 제외하고 값 변경 가능  

*/



var arr = [1, 2];
Array.prototype.constructor === Array; // true
arr.__proto__.constructor === Array; // true
arr.constructor === Array; // true

var arr2 = new arr.constructor(3, 4);
console.log(arr2); // [3, 4]