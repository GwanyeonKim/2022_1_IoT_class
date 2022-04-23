// 1-15
// 중첩된 객체에 대한 깊은 복사

// 참조형 프로퍼티가 있는 경우, 해당 프로퍼티까지 얕은(copyObject) 복사 실행 --> 깊은 복사


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
    urls: {      // 참조형 데이터 안에 참조형 데이터 선언
        hompage: 'https://www.cstlab-cau.com/',
        google: 'https://www.google.com/',
    }
};


var user2 = copyObject(user);        // 얕은 복사
user2.urls = copyObject(user.urls);  // 깊은 복사

user2.name = 'control';        // 수정
console.log(user.name === user2.name);  // false


user.urls.hompage = 'cstlab.cau.ac.kr';
console.log(user.urls.hompage === user2.urls.hompage);  // false


user.urls.google = '';
console.log(user.urls.google === user2.urls.google);  // false