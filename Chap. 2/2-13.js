// 2-13
// 스코프 체인

// scope: 식별자에 대한 유효범위
// 전역 컨텍스트 -- outer -- inner

// 전역 컨텍스트 1. 외부: null
//              2. 내부: var a, var outer

// outer 컨텍스트 1. 외부: '전역 컨텍스트' 참조
//               2. 내부: var inner

// inner 컨텍스트 1. 외부: 'outer 컨텍스트' 참조
//               2. 내부: var a


var a = 1;

var outer = function () {
    var inner = function () {
        console.log(a);  // undefined
        var a = 3;
    };
    inner();
    console.log(a);   // 1,   내부에 var a가 없으므로 외부 포인터(전역 컨텍스트)로 가서 var a를 찾음
};

outer();

console.log(a);   // 1