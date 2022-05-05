// 3-14
// call 메서드 (1)

// call을 사용하여 임의의 객체를 this를 지정할 수 있다.


var func = function (a, b, c) {
    console.log(this, a,b ,c);
};

func(1, 2, 30);  // this --> global
func.call( {x:1}, 4, 5, 6 );  // call의 첫 번째 인자는 this 지정 // 이후 인자는 func의 입력 변수
