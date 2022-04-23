// 1-13
// copyObject를 이용한 객체 복사

// 얕은 복사를 한 객체는 기존 객체와 다르다고 나옴
// 하지만 각각의 프로퍼티를 비교하면 같다.


var copyObject = function (target) {  // 복사 함수 선언
    var result = {};

    for (var prop in target) {   // for/in문 --> 객체의 내부 프로퍼티를 나열
        result[prop] = target[prop]; // 기본형 데이터
    }

    return result;
};


//---------------------------
var user = {     // 참조형 데이터 선언
    name: 'CSTL',
    gender: 'lab'
};


var user2 = copyObject(user);  // 얕은 복사
user2.name = 'control';        // 수정


if (user !== user2){
    console.log('변경됨');
}

console.log(user);
console.log(user2);
console.log(user == user2);
console.log(user.name == user2.name);
console.log(user.gender == user2.gender);

