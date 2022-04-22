// 1-11
// 객체의 가변성에 따른 문제점 해결 방법 

// 함수의 리턴 값을 데이터(객체) 형태로 만듬 
// (1) 바뀐 부분은 입력 받은 값으로
// (2) 바뀌지 않는 부분은 기존의 참조형 데이터 사용
// --> 좀 귀찮은 방법

var user = {     // 참조형 데이터 선언
    name: 'CSTL',
    gender: 'lab'
};

console.log(user);

var changeName = function (user, newName) {   // 함수 선언
    return {
        name: newName,
        gender: user.gender
    };
};


var user2 = changeName(user, 'Jung');


if (user !== user2){
    console.log('변경됨');
}

console.log(user.name, user2.name);
console.log(user == user2);
