// 7-12
// 클래스 상속 및 추상화 방법 - 완성본(2) - 빈함수를 활용
/*

해당 코드는 7-9에 
SubClass.prototype.consturctor = SubClass;
와

if (subMethods) {
  for (var method in subMethods) {
    SubClass.prototype[method] = subMethods[method];
  }
}

위 구문을 추가함 


*/


var extendClass2 = (function() {
  var Bridge = function() {};
  return function(SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    SubClass.prototype.consturctor = SubClass;
    Bridge.prototype.constructor = SuperClass;

    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }

    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();