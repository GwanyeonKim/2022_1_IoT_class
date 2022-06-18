// 7-16
// ES6의 클래스 상속
/*

1. Square를 Retangle 클래스를 상속받는 subClass로 만들기 위해 class 명령어 뒤에 단순히 'extends Rectangle'이라는 내용 추가
2. constructor 내부에서는 super라는 키워드를 함수처럼 사용할 수 있음 - 이 함수는 superClass의 cinstructor를 실행
3. constructor 메서드를 제외한 다른 메서드에서는 super 키워드를 객체처럼 사용할 수 있음
이때 객체는 cuperClass.prototype을 바라봄
호출한 메서드의 this는 'super'가 아닌 원래의 this를 그래도 따름ㄴ


*/


var Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
};

var Square = class extends Rectangle {
  constructor(width) {
    super(width, width);
  }
  getArea() {
    console.log('size is :', super.getArea());
  }
};