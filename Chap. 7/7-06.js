// 7-06
// Square 클래스 변형

/*

이렇게 고치고 나면 Square 함수가 Rectangle 함수의 하위 클래스로 들어갈 수 있겠다는 생각을 할 수 있음.

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

//----------------

var Square = function(width) {
  this.width = width;
  this.height = width;
};

Square.prototype.getArea = function() {
  return this.width * this.height;
};

var sq = new Square(5);
console.log(sq.getArea()); // 25