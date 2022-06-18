// 7-08
// 클래스 상속 및 추상화 방법(1) - 인스턴스 생성 후 프로퍼티 제거

/*

클래스는  구체적인 데이터를 지니지 않음
이를 구현하기 위해 프로퍼티들을 일일이 지움

SubClass는 SuperClass를 상속
SubClass에 있는 프로퍼티를 반복문을 통해 지움

*/



var extendClass1 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass();
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop];
    }
  }

  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method];
    }
  }

  Object.freeze(SubClass.prototype);
  return SubClass;
};
//-----------------------------------

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
//-----------------------------------

var Square = extendClass1(Rectangle, function(width) {
  Rectangle.call(this, width, width);  // subMethods는 현재 없음
});

var sq = new Square(5);
console.log(sq.getArea()); // 25