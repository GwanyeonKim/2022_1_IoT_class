// 1-8
// 변수 복사 이후 값 변경 결과 비교 (1) 갹체의 성질 변경 시

// 복사된 기본형 데이터를 변경하면 기존 기본형 데이터와 달라짐
// 복사된 참조형 데이터의 값을 변경하면 기존 참조형 데이터의 값도 바뀜

var a =10;   // 선언
var b = a;   // 복사


var obj1 = {  // 선언
    c: 10,
    d: 'ddd'
};
var obj2 = obj1;  // 복사


//------------------------

b = 15;      // 재할당
obj2.c = 20; // 재할당


console.log(a)
console.log(b)

console.log(obj1)
console.log(obj2)

