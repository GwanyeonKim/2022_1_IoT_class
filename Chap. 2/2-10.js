// 2-10
// 함수 선언문과 함수 표현식 (2) - 호이스팅을 마친 상태


// 함수 선언 -->  험수 선언 전체를 호이스팅
// 함수 표현식 --> 변수 선언부만 호이스팅


var sum = function sum (a,b) {  // 함수 선언 -->  험수 선언 전체를 호이스팅
    return a + b;  
}

var multiply;                   // 함수 표현식 --> 변수 선언부만 호이스팅

//-----

console.log(sum(1,2));
console.log(multiply(3,4));


multiply = function (a, b) {
    return a * b;
}