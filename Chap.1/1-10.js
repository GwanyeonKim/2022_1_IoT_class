// 1-10
// 객체의 가변성에 따른 문제점

// 참조 데이터의 가변성 때문에 기존 데이터도 변경됨 

var user = {     // 참조형 데이터 선언
    name: 'CSTL',
    gender: 'lab'
};

console.log(user);

var changeName = function (user, newName) {   // 함수 선언
    var newUser = user;
    newUser.name = newName;

    return newUser;
};


var user2 = changeName(user, 'Jung');


if (user !== user2){
    console.log('변경됨');
}

console.log(user.name, user2.name);
console.log(user == user2);
