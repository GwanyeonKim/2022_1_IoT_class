// 1-12
// 기존 정보를 복사해서 새로운 객체를 반환하는 함수 (얕은 복사) 

// for/in문 --> 객체의 내부 프로퍼티를 나열
// 얕은 복사 --> 각 프로퍼티의 기본형 데이터를 복사 
// 복사된 값이 기본형 데이터이므로 수정해도 기존 객체에 영향 x


var copyObject = function (target) {  // 복사 함수 선언
    var result = {};

    for (var prop in target) {   // for/in문 --> 객체의 내부 프로퍼티를 나열
        result[prop] = target[prop]; // 기본형 데이터
    }

    return result;
};

//--------------- for/in문 예시
var test = {
    lab: 'CSTL',
    major: 'control'
};

for (var prop in test) {
    console.log(prop);
};

