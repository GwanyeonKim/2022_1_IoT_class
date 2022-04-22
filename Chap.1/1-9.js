// 1-9
// 변수 복사 이후 값 변경 결과 비교 (2) 갹체 자체를 변경했을 때

// 참조형 데이터 -- (1) 내부 성질을 바꿀 경우 --> 가변값 (복사해서 바꾸면 다 바뀜)
//              -- (2) 객체 자체를 바꿀 경우 --> 불변겂


var a =10;   // 선언
var b = a;   // 복사


var obj1 = {  // 선언
    c: 10,
    d: 'ddd'
};
var obj2 = obj1;  // 복사

//------------------------

b = 15;      // 재할당
obj2 = {     // 재선언
    c: 20,
    d: 'ddd'
};


console.log(a)
console.log(b)

console.log(obj1)
console.log(obj2)

