// 5-03
// 외부 함수의 변수를 참조하는 내부 함수 (3)



/*
5-02와의 차이점: outer가 inner의 주소를 리턴함  




*/


var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner;
};

var outer2 = outer();

console.log(outer2()); // 2
console.log(outer2()); // 3