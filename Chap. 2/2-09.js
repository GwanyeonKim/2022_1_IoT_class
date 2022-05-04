// 2-9
// 함수 선언문과 함수 표현식 (1) - 원본 코드

//


// console.log(sum(1,2));
// console.log(multiply(3,4));


function sum (a,b) { // 함수 선언
    return a + b;
}

var multiply = function (a, b) { // 험수 표현식
    return a * b;
}


console.log(sum(1,2));
console.log(multiply(3,4));
