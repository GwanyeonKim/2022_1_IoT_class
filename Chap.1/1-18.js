// 1-18
// JSON을 활용한 간단한 깉은 복사

// JSON: 깊은 복사 방법 중에 하나 
//함수, 숨겨진 프로퍼티 등은 JSON 문법은로 변경할 수 없어 무시함


var copyObjectViaJSON = function(target) {
    return JSON.parse(JSON.stringify(target));
};


//----------------------------
var obj = {
    a: 1,
    b: {
        c: null,
        d: [1,2],
        func1 : function () {
            console.log(3);
        }
    },
    func2: function () {
        console.log(4);
    }
};


var obj2 = copyObjectViaJSON(obj);  // function 복사 안됨

obj2.a      = 3;    // 수정
obj2.b.c    = 4;
obj2.b.d[1] = 10;

console.log('수정 후');
console.log(obj);
console.log(obj2);

console.log(obj.b);
console.log(obj2.b);

console.log(obj.b.d);
console.log(obj2.b.d);