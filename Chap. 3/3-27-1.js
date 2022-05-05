// 3-27-1
// 내부함수에 this 전달 - call vs. bind

// 내부함수에 this 전달 --> call인 경우 ( 앞에 예제에서 했음 )

var obj = {
    outer: function () {
        console.log(this);  // obj
        var innerFunc = function () {
            console.log(this);
        };

        innerFunc.call(this); // obj
    }
};

obj.outer();

