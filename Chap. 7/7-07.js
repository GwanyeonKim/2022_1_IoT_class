// 7-07
// Rectangle을 상속하는 Sqaure 클래스

/*

부모 클래스와 자식 클래스를 흉내내보자

Square 함수 안에 Rectangle 함수가 들어가 있음

*/

var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

var rect = new Rectangle(3, 4);
console.log(rect.getArea()); // 12
  
//--------

var Square = function(width) {
    Rectangle.call(this, width, width);
  };

Square.prototype = new Rectangle();
  
var sq = new Square(5);
console.log(sq.getArea()); // 25