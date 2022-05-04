// 2-5
// 함수 선언의 호이스팅 (1) - 원본 코드

// 전역 실행 컨텍스트 -- a





function a () {
    console.log(b);

    var b = 'bbb';
    console.log(b);

    function b () { }

    console.log(b);

}

a();