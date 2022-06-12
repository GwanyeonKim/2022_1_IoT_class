// 5-17
// 커링 함수 (1)

/*
커리: 함수를 변형하는 과정을 말함   
함수의 전달 인자 중 몇 개를 미리 채움으로써 더 간단한 함수를 만드는 방법  

사용하는 이유: 어떤 함수를 호출할 때 대부분의 매개 변수가 비슷하면 커링 사용  

커링은 한 번에 하나의 인자만 전달
중간 과정 중에는 함수를 실행한 결과 --> 그 다음 인자를 받기 위해 오로지 대기
마지막 인자가 전달되기 전 --> 원본 함수 실행 안됨
*/



var curry3 = function(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8)); // 10
console.log(getMaxWith10(25)); // 25

var getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8)); // 8
console.log(getMinWith10(25)); // 10