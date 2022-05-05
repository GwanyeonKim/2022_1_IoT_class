// 3-29
// 화살표 함수 내부에서의 this

// 화살표 함수는 실행 컨텍스트 생성 시, this를 바인딩하는 과정이 제외됨
// 함수 내부에 this가 없으면, 스코프 체인 상에서 가장 가까운 this로 접근

var obj = {
    outer: function () {
        console.log(this);
        var innerFunc = () => {
            console.log(this); // obj
        };

        innerFunc();
    }
};

obj.outer(); // obj
