// 7-09
// 클래스 상속 및 추상화 방법(2) - 빈 함수를 활용

/*

1. Bridge라는 빈 함수 생성
2. Bridge.prototype이 Rectangle.prototype을 참조하게 함
3. Square.prototype에 new Bridge()로 할당

인스턴스를 제외한 프로토 타입 체인 경로 상에 구체적인 데이터가 남지 않음


*/


var extendClass2 = (function() {
  var Bridge = function() {};
  return function(SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype;
    SubClass.prototype = new Bridge();
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
})();
//----------------------
var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
//----------------------
var Square = extendClass2(Rectangle, function(width) {
  Rectangle.call(this, width, width);
});


var sq = new Square(5);
console.log(sq.getArea()); // 25