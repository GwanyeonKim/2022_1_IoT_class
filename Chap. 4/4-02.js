// 4-02
// 콜백 함수 예제 (1-2) setInterval

// 4-01 예제와 같다.
// 차이점은 콜백 함수를 cb로 정의하고 인자로 넘겨줌

// 이 예제에 있는 setInterval를 web API라고 생각하자.  ( clearInterval도 )

// 콜백 함수는 web API가 요구하는 속성에 따라 만들어야함


var cout = 0;

var cbF = function () {  // 콜백 함수
    console.log(cout);
    if (++cout > 4) clearInterval(timer);
};


var timer = setInterval(cb, 300);

