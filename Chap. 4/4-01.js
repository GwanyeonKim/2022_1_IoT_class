// 4-01
// 콜백 함수 예제 (1-1) setInterval

// 콜백 함수는 함수 또는 메서드를 인자로 넘겨줌
// 인자로 들어간 함수 또는 메서드의 제어권은 위임 받음 함수에 있음


// 이 예제에 있는 setInterval를 web API라고 생각하자.  ( clearInterval도 )


var cout = 0;
var timer = setInterval(function () {
    console.log(cout);
    if (++cout > 4) clearInterval(timer);
}, 300);
