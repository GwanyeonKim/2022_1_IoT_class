// 2-7
// 함수 선언의 호이스팅 (3) - 함수 선언문을 함수 표현식으로 바꾼 코드

// 편의를 위해 함수 선언에 var를 추가함
// var b가 함수를 가리킴
// 그 상태에서 b를 출력  -->  함수 출력
// b가 'bbb'를 가리킴
// 이후 b는 bbb를 출력



function a () {
    var b;
    var b = function b () { }

    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);

}

a();