// 7-01
// 스태틱 메서드, 프로토타입 메서드

/*

JS는 프로토입 기반 언어라서 '상속' 개념이 존재하지 않음
클래스 비슷하게 동자하게끔 흉내내는 기법들이 탄생함  -->  ES6에 클래스 문법이 추가됨

이 책은 클래스가 없는 ES5 체제에서 클래스를 흉내내는 기법을 배움


6장에서 배운 내용을 바탕으로 클래스와 유사하게 만듬


스태틱 메서드: 인스턴스에서 직접 접근할 수 없는 메서드
*/

var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};


Rectangle.prototype.getArea = function() { // 메서드
  return this.width * this.height;
};


Rectangle.isRectangle = function(instance) {  // 스태틱 메서드
  return (
    instance instanceof Rectangle && instance.width > 0 && instance.height > 0
  );
};

var rect1 = new Rectangle(3, 4);
console.log(rect1.getArea()); // 12 (O)
console.log(rect1.isRectangle(rect1)); // Error (X)
console.log(Rectangle.isRectangle(rect1)); // true