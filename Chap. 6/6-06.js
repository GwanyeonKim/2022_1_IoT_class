// 6-06
// 메서드 오버라이드

/*
Person.prototype    
- getName  

iu  
name: 지금  
getName  


iu.getName의 this는 iu 
iu에 getName 함수가 있으면 그거 실행
없으면 __proto__의 getName 실행
*/



var Person = function(name) {
  this.name = name;
};
Person.prototype.getName = function() {
  return this.name;
};

var iu = new Person('지금');
iu.getName = function() {
  return '바로 ' + this.name;
};
console.log(iu.getName()); // 바로 지금