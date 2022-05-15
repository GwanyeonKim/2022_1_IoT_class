// 4-04
// 콜백 함수 예제 (2-2) Array.prototype.map - 인자의 순서를 임의로 바꾸어 사용한 경우


// .map을 사용하기 위한 콜백 함수 프로토콜 
// array.prototype.map(callback[, thisArg])
// callback: function(currentValue, index, array)

// currentValue, index 이름을 바꿔서 사용한다고 달라지지 않음
// Just 인자의 이름일 뿐 임


var newArr2 = [10, 20, 30].map(function (index, currentValue) {
    console.log(this);
    console.log(index, currentValue);
    return currentValue + 5;
});

console.log(newArr2);

