// 1-20
// 자동으로 undefined를 부여하는 경우

// 빈 배열에는 undefined 조차 할당되지 않음


var arr1 = [];
arr1.length = 3;
console.log(arr1);   // [...]   이렇게 나오는데...?

var arr2 = new Array(3);
console.log(arr2);   // [...]   이렇게 나오는데...?

var arr3 = [undefined, undefined, undefined];
console.log(arr3);   // [undefined, undefined, undefined]