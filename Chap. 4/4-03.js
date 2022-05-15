// 4-03
// 콜백 함수 예제 (2-1) Array.prototype.map


// map: array.prototype 안에 있는 속성 중에 하나 
// array.prototype: array instance가 활용할 수 있는 methods가 있음

// .map을 사용하기 위한 콜백 함수 프로토콜 
// array.prototype.map(callback[, thisArg])
// callback: function(currentValue, index, array)




var newArr = [10, 20, 30].map(function (currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});

console.log(newArr);

