// 5-14
// 부분 적용 함수 구현 (1)

/*
5-13은 this가 null이 됨  

5-14는 클로저를 이용해서 5-13 구현  


클로저 변수: originalPartialArgs, func


slice: 어레이를 받는 함수
originalPartialArgs--> slice-like 함수
따라서 slice 함수의 인자로 slice-like 인자를 주기 위해 slice.call을 이용
*/

//--------------------
var partial = function() {
  var originalPartialArgs = arguments;
  var func = originalPartialArgs[0];

  if (typeof func !== 'function') {
    throw new Error('첫 번째 인자가 함수가 아닙니다.');
  }

  return function() {
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    var restArgs = Array.prototype.slice.call(arguments);
    return func.apply(this, partialArgs.concat(restArgs));
  };
};

//--------------------
var add = function() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
};

//--------------------
var addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); // 55

var dog = {
  name: '강아지',

  greet: partial(function(prefix, suffix) {
    return prefix + this.name + suffix;
  }, '왈왈, '),

};


dog.greet('입니다!'); // 왈왈, 강아지입니다.