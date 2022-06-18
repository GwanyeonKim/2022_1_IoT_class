// 7-15
// ES5와 ES6의 클래스 문법 비교
/*

1. class라는 명령어 뒤에 바로 {}가 등장
2. constructor라는 이름 뒤에 바로 () {가 등장
3. 메서드와 다음 메서드 사이에는 ','로 구분하지 않음
4. static이라는 키워드 뒤에 staticMethod라는 이름 등장. 이후에 (){가 등장
5 .method라는 이름 등장

*/


var ES5 = function(name) {
  this.name = name;
};
ES5.staticMethod = function() {
  return this.name + ' staticMethod';
};
ES5.prototype.method = function() {
  return this.name + ' method';
};
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod()); // es5 staticMethod
console.log(es5Instance.method()); // es5 method

var ES6 = class {
  constructor(name) {
    this.name = name;
  }
  static staticMethod() {
    return this.name + ' staticMethod';
  }
  method() {
    return this.name + ' method';
  }
};
var es6Instance = new ES6('es6');
console.log(ES6.staticMethod()); // es6 staticMethod
console.log(es6Instance.method()); // es6 method