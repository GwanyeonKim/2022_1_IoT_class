// 4-10
// 예제 4-8의 func 함수 재활용


// 앞에 예제 복습 + 응용


var obj1 = {
    name: 'obj1',
    func: function () {
        var self = this;
        return function () {
            console.log(self.name);
        };
    }
};

// ----------
var obj2 = {
    name: 'obj2',
    func: obj1.func
    
};

var callback2 = obj2.func();  // obj2   // obj1.func를 불러온 애는 obj2이기 때문
setTimeout(callback2, 1500);


var obj3 = {name:'obj3'};
var callback3 = obj1.func.call(obj3); // call: 임의의 객체로 설정
setTimeout(callback3, 2000);
