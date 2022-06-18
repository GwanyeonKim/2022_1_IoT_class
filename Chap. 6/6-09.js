// 6-09
// Object.prototype에 추가한 메서드에의 접근


/*

객체란 이름(key 혹은 prop)과 값(value)으로 구성된 프로퍼드의 정렬되지 않은 집합이다.
Array, Function, Date, RegExp, Map, WeekMap, Set, WeakSet

프로퍼치의 값으로 함수가 올수 있음 --> 이러한 프로퍼티를 메소드(method)라고 함  

JS에서 숫자, 문자열, 불리언, undefined, null, Symbol 타입을 제외한 모든 것이 객체임

But, 숫자, 문자열, 불리언, undefine, null, Symbol 타입같은 원시 타입은 값이 정해진 객체로 취급
--> 객체로서의 특징도 함께 가지고 있음



객체가 아닌 데이터 타입은 오류가 나야하는데 프로토타입 체이닝을 통해 getEntries 메서드에 접근할 수 있어서 아래 코드가 오류 없이 동작
따라서, object.prototype이 아닌 object의 스택틱 메서드로 부여해야함
 
*/


Object.prototype.getEntries = function() {
  var res = [];
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      res.push([prop, this[prop]]);
    }
  }
  return res;
};


var data = [
  ['object', { a: 1, b: 2, c: 3 }], // [["a",1], ["b", 2], ["c",3]]
  ['number', 345], // []
  ['string', 'abc'], // [["0","a"], ["1","b"], ["2","c"]]
  ['boolean', false], // []
  ['func', function() {}], // []
  ['array', [1, 2, 3]], // [["0", 1], ["1", 2], ["2", 3]]
];


data.forEach(function(datum) {
  console.log(datum[1].getEntries());
});