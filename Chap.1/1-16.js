// 1-16
// 객체의 깊은 복사를 수행하는 범용 함수

// typeof: 변수의 데이터 타입 반환


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


