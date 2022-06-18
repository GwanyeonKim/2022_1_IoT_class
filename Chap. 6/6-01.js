// 6-01
// Person.prototype

/*

- 어떤 생성자 함수(constructor)를 new 연산자와 함께 호출하면  
- constructor에서 정의된 내용을 바탕으로 새로운 인스턴스가 생성됨  
- 이때 인스턴스에는 __proto__라는 프로퍼티가 자동 부여  
- 이 프로퍼티는 constructor의 prototype이라는 프로퍼티 참조  
  
  
suzi.__proto__.getName(); 실행 결과가 Suzi가 아닌 undefined인 이유  
this가 suzi.__proto__임  -->  _name 없음  

suzi.getName = suzi.__proto__.getName
*/

var Person = function(name) { // constructor
  this._name = name;
};



Person.prototype.getName = function() {
  return this._name;
};


var suzi = new Person('Suzi');
suzi.__proto__.getName();  // undefined


Person.prototype === suzi.__proto__ // true

var suzi = new Person('Suzi');
suzi.__proto__._name = 'SUZI__PROTO__';
suzi.__proto__.getName(); // SUZI_proto__