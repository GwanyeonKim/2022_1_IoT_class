// 2-1
// 실행 컨텍스트와 콜 스택

// 전역 컨텍스트 --  outer  --  inner

// Stack 1

var a = 1;  //  선언

function outer() {
    function inner() {
        console.log(a);  // undefined
        var a = 3;
    }

    inner();  // Stack 3
    console.log(a);  // 1
}

outer();  // Stack 2
console.log(a);  // 1
