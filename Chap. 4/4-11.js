// 4-11
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법 (2) - bind 메서드 활용


// 앞에 예제 복습 + 응용


var obj1 = {
    name: 'obj1',
    func: function () {
        console.log(this.name);
    }
};

setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = {name: 'obj2'};
setTimeout(obj1.func.bind(obj2), 1500);