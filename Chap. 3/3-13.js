// 3-13
// 생성자 함수

// JS는 함수에 생성자로서의 역할을 함께 부여
// new 명령어와 함께 함수를 호출하면
// 해당 함수가 생성자로 동작


var Cat = function (name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};

var choco = new Cat('초코', 7);
var nabi  = new Cat('나비', 5);


console.log(choco);
console.log(nabi);
