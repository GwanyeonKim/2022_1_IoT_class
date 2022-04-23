// 1-17
// 객체의 깊은 복사 결과 확인

// 


var copyObjectDeep = function(target) {  // 범용적인 깊은 복사 함수 
    var result = {};

    if (typeof target === 'object' && target !== null){  // 입력이 객체일 경우
        for (var prop in target) {   // 프로퍼티에 대해서
            result[prop] = copyObjectDeep(target[prop]);  // 프로퍼티 자체를 얕은 복사
        }
    }
    else {
        result = target;
    }

    return result;
};


//--------------------------------

var obj = {
    a: 1,
    b: {
        c: null,
        d: [1,2]
    }
};

var obj2 = copyObjectDeep(obj);  // 깊은 복사

console.log(obj);
console.log(obj2);

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