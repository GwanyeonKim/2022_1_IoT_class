// 2-4
// 매개변수와 변수에 대한 호이스팅(3) - 호스팅을 마친 상태

// 호이스팅 --> 변수 선언에만 관심 있음, 할당은 나중에 할 일

function a () {
    var x;  // x선언
    var x;  // 중복 x가 있으므로 무시
    var x;  // 중복 x가 있으므로 무시

    x = 1;
    console.log(x); // 1을 받음

    console.log(x); // 1을 받음

    var x = 2;
    console.log(x); // 2를 받음
}

a(1);