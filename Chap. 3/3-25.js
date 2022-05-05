// 3-25
// bind 메서드 - this 지정과 부분 적용 함수 구현

// bind method: 즉시 적용되는 부분과 나중에 적용되는 부분으로 나뉨
// 함수 선언 당시에 인자 몇 개를 주고
// 나중에 인자를 주면 이어서 인자를 받음

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

var bindFunc1 = func.bind({x:1});  // this 인자를 먼저 줌
bindFunc1(5, 6, 7, 8); // 매개변수 이어서 받음

var bindFunc2 = func.bind({x:1}, 4 ,5); // this와 두 개의 인자를 받음

bindFunc2(6, 7);  // 나머지 인자를 받음
bindFunc2(8, 9);  // 나머지 인자를 받음