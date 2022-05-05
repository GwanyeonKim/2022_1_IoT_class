// 3-11
// this를 바인딩하지 않는 함수 (화살표 함수)

// arrow function: 자기만의 this가 없음
// scope chain을 따라가서 나오는 첫 번째 나오는 this를 사용



var obj = {
    outer: function () {
        console.log(this);  // this --> obj
        var innerFunc = () => {
            console.log(this);  // this --> obj  // scope chain을 따라가면 outer가 나옴
        };
        innerFunc();
    }
};

obj.outer();
