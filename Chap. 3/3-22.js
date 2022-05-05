// 3-22
// call/aplly 매서드의 활용 3-1) 최대/최솟값을 구하는 코드를 직접 구현

// 최대/최소를 구하는 코드임
// JS에서 이렇게 길게 코딩할 필요 없음
// 다음 예제 참고 바람

var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0];

numbers.forEach(function(number) {
    if (number > max) {
        max = number;
    }

    if (number < min) {
        min = number;
    }
});

console.log(max, min);