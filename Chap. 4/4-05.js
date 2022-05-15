// 4-05
// 콜백 함수 예제 (2-3) Array.prototype.map - 구현


// [10, 20, 30].map의 this는 [10, 20, 30]
// 콜백 함수의 this는 제어권이 있는 함수 마음이다.
// .map은 콜백 함수의 this를 window/global로 설정되어 있음 
// 즉, .map과 콜백함수의 this가 다름

// 이 예제는 Array.prototype.map이 어떻게 작성되어 있는지 보는 것임
// 실제로 이 코드와 동일한 것은 아님

// A||B  --> A가 없으면 B를 수행, A가 있으면 A를 실행


Array.prototype.map = function (callback, thisArg) {
    var mappedArr = [];
    for (var i=0; i<this.length; i++) {
        var mappedValue = callback.call(thisArg || window, this[i], i, this);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};


