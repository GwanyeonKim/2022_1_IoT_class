// 3-24
// call/aplly 매서드의 활용 3-3) ES6의 펼치기 연산자 활용

// spread 연산자
// 배열을 펼쳐준다.
// 이 연산자의 결과는 배열/object가 아니다.
// 따라서 함수의 인자로 받을때만 사용된다

var numbers = [10, 20, 3, 16, 45];

var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log(max, min);
console.log(...numbers);