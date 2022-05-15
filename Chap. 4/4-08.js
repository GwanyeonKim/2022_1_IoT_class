// 4-08
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법 (1) - 전통적인 방법


// self를 이용한 this 바인딩
// this를 다른 변수에 담아서 넘기기


var obj1 = {
    name: 'obj1',
    func: function () {
        var self = this;  // obj1
        return function () {
            console.log(self.name);
        };
    }
};

var callback = obj1.func();  // this = obj1
setTimeout(callback, 1000);  // this = obj1