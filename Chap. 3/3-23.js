// 3-23
// call/aplly 매서드의 활용 3-2) 여러 인수를 받는 메서드 (Math.max/Math.min)에 apply를 적용

// 최대/최소를 구하는 코드
// 간단한 버전

// Math 함수를 사용하면 된다.
// Math 함수의 인자에는 배열을 줄 수 없음
// 따라서 this를 통해 배열 인자를 주면 된다.
// Math 함수는 this를 사용하지 않음


var numbers = [10, 20, 3, 16, 45];

var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);

console.log(max, min);