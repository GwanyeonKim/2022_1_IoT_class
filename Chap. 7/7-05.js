// 7-05
// Rectangle, Square 클래스


/*

this로 width, height를 만듬
Rectangle의 prototype에 getArea 함수를 만듬 --> 클래스 안에 함수 만드는 느낌으로
__proto__에 있는 getArea 실행

Square 함수도 비슷하게 만듬

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

//-----------

var Square = function(width) {
  this.width = width;
};

Square.prototype.getArea = function() {
  return this.width * this.width;
};

var sq = new Square(5);
console.log(sq.getArea()); // 25