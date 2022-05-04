// 2-12
//상대적으로 함수 표현식이 안전하다.

// 동일 변수명의 함수 표현식이 새로 나오기 전까지는
// 이전에 선언된 함수가 실행됨 



//console.log(sum(3,4));  // 이 부부에서 에러가 발생


//---- sum 함수가 이 부분을 가리킴
var sum = function (x, y) {
    return x + y;
}


var a = sum(1,2);
console.log(a);


//---- 이 라인 이후부터 sum 함수가 아래 부분을 가리킴
var sum = function (x, y) {
    return x + '+' + y + '=' + (x+y);
}

var c = sum(1,2);
console.log(c);
