// 3-15
// call 메서드 (2)

//

var obj = {
    a: 1,
    method: function (x,y) {
        console.log(this.a, x, y);
    }
};

obj.method(2,3);
obj.method.call({a:4}, 5, 6); // obj.method의 this를 a:4로 해라
