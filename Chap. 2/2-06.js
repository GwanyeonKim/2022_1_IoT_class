// 2-6
// 함수 선언의 호이스팅 (2) - 호이스팅을 마친 상태

// a 함수의 실행 컨텍스트 --> 변수명과 함수 선언의 정보를 위로 올림
// 순서대로 변수명과 함수 선언을 위로 올림


function a () {
    var b;
    function b () { }

    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);

}

a();