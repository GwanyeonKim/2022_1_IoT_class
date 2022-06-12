// 5-18
// 커링 함수 (2)


/*
커링의 문제: 인자가 많아지면 가독성이 떨어짐

*/

var curry5 = function(func) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
          return function(e) {
            return func(a, b, c, d, e);
          };
        };
      };
    };
  };
};

var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));