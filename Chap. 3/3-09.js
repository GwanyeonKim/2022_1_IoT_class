// 3-9
// 내부함수에서의 this

// this는 내부 함수와 전혀 상관없음
// 누가 불렀는지가 중요함


var obj1 = {
    outer: function () {
        console.log(this);  // this --> obj1
        var innerFunc = function () { // 내부 함수
            console.log(this);
        };
        innerFunc();  // innerFunc를 호출한 놈이 없음 // this --> global  // 함수 실행 시 "."이 없기 때문

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();  // this --> obj2
    }
};

obj1.outer();
