// 2-3
// 매개변수와 변수에 대한 호이스팅(2) - 매개변수를 변수 선언/할당과 같다고 간주해서 변환한 상태




function a () {
    console.log(x); //  받은 인자 없음

    var x;
    console.log(x); //  인자 값이 없음

    var x = 2;
    console.log(x); //   인자 2를 받음
} 

a();