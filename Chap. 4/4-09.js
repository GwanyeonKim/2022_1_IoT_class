// 4-09
// 콜백 함수 내부에서 this를 사용하지 않는 경우


// name 자체를 넘겨서 this 사용하지 않고 하기


var obj1 = {
    name: 'obj1',
    func: function () {
        console.log(obj1.name);
    }
};

setTimeout(obj1.func, 1000);