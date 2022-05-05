// 3-7
// 메서드로서 호출 - 점 표기법, 대괄호 표기법

// obj.prop -->점 표기법
// obj[prop] --> 대괄호 표기법

var obj = {
    method: function (x) {
        console.log(this, x);
    }
};

obj.method(1);
obj['method'](2); // 위와 같음 // 표현만 다름
