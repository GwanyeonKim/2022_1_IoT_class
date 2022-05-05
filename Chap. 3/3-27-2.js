// 3-27-2
// 내부함수에 this 전달 - call vs. bind

// 내부함수에 this 전달 --> bind인 경우, 

var obj = {
    outer: function () {
        console.log(this); // obj
        var innerFunc = function () {
            console.log(this);
        }.bind(this); 

        innerFunc(); // obj
    }
};

obj.outer();

