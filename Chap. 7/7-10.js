// 7-10
// 클래스 상속 및 추상화 방법(3) - Object.create 활용

/*

Object 클래스 사용
간단한게 장점

subClass의 prototype의 __proto__가 SuperClass의 prototype을 바라봄
단, SuperClass의 인스턴스가 되지는 않음

따라서 앞선 두 예제보다 간단하고 안전하다.

*/

var extendClass3 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype);
  SubClass.prototype.constructor = SubClass;
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass;
};
//-----------------------------

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};

//----------------------------

var Square = function(width) {
  Rectangle.call(this, width, width);
};

Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);

var sq = new Square(5);
console.log(sq.getArea()); // 25