// 3-10
// 내부함수에서의 this를 우회하는 방법



var obj = {
    outer: function () {
        console.log(this);  // this --> obj
        var innerFunc1 = function () {
            console.log(this);
        };
        innerFunc1();  // this --> global

        var self = this;  // this --> obj  // outer를 부른 놈이 obj이기 때문이다.
        var innerFunc2 = function () {
            console.log(self);
        };
        innerFunc2();  // this --> obj
    }
};

obj.outer();
