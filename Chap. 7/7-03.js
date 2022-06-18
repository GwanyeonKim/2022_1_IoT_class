// 7-03
// length 프로퍼티를 삭제한 경우



/*
Grade의 __proto__: []

g.this = [0]: 100, [1]:80, length:2

g는 push가 없음 -->  __proto__에도 push가 없음  -->  Array.prototype에 push가 있음


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
//---------

g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { 0: 70, 1: 80, 2: 90, length: 1 }