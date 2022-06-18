// 7-11
// 클래스 상속 및 추상화 방법 - 완성본(1) - 인스턴스 생성 후 프로퍼티 제거
/*

해당 코드는 7-8에 
SubClass.prototype.consturctor = SubClass;
위 구문을 추가함 


앞선 예제는 상속을 구현했지만 문제가 있음
subClass 인스턴스의 contructor는 여전히 superClass를 가리킴

해결법: subCalss.prototype.constructor가 원래의 subclass를 바라보도록 해주면 됨


*/


var extendClass1 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass();
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }

  SubClass.prototype.consturctor = SubClass;
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Objec
  t.freeze(SubClass.prototype);
  return SubClass;
};