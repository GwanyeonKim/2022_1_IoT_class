// 2-11
// 함수 선언문의 위험성

// 동일한 변수명으로 여러 개의 함수를 함수 선언문으로 작성하면 
// 호이스팅으로 인해 맨 마지막 함수 선언문의 내용으로
// 모든 함수도 동일해짐


console.log(sum(3,4));



function sum (x, y) {
    return x + y;
}


var a = sum(1,2);
// console.log(a);

// -- 호이스팅으로 인해 위에 sum 함수도 문자열을 리턴함
function sum (x,y) {
    return x + '+' + y + '=' + (x+y);
}

var c = sum(1,2);
console.log(c);