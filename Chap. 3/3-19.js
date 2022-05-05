// 3-19
// call/aplly 매서드의 활용 1-3) 문자열에 배열 메서드 적용 예시

// 문자열도 array-like이다.
// read only --> 내용을 바꾸는건 안됨 (원본 유지해야함)

// concat은 대상이 반드시 배열이어야함 
// 에러는 없지만 결과가 이상할 수 있음

// reduce: transform (바꾼다)

var str = 'abc def';

//Array.prototype.push.call(str, ', pushed string'); // --> 내용을 바꾸는건 안됨 error

//
a1 = Array.prototype.concat.call(str, 'string'); // concat은 대상이 반드시 배열이어야함 
                                                 // 에러는 없지만 결과가 이상할 수 있음
console.log(a1);
console.log(a1[0]);

console.log('-----');
//
a2 = Array.prototype.every.call(str, function(char) { return char !== '';});
console.log(a2); // true 나오는데..

console.log('-----');
//
a3 = Array.prototype.some.call(str, function(char) { return char === '';});
console.log(a3); // false 나오는데..

console.log('-----');
//
var newArr = Array.prototype.map.call(str, function(char) {return char + '!';});

console.log(newArr);

console.log('-----');
//
var newStr = Array.prototype.reduce.apply(str, [
    function(string, char, i) {return string + char + i;},
    ''
]);

console.log(newStr);
