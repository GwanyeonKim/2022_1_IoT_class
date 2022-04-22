// 1-6_1
// 1-6에서 재할당

var obj1 = {  // 참조형 데이터 obj1 선언
    x: 3,
    arr: [3, 4, 5]
};

console.log(obj1)
console.log(obj1.x)
console.log(obj1.arr)
console.log(obj1.arr[0])
console.log(obj1.arr[1])
console.log(obj1.arr[2])

obj1.arr = 'str'     // 재할당
console.log(obj1.arr)
