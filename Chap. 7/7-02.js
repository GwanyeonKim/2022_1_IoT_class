// 7-02
// 6-2-4절의 Grade 생성자 함수 및 인스턴스


/*

6-2-4절의 내용이 클래스 상속의 핵심

JS에서 클래스 상속을 구현했다 == 프로퍼티 타입 체이닝을 잘 연결한 것이다.


*/


var Grade = function() {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100, 80);