// 7-04
// 요소가 있는 배열을 prototype에 매칭한 경우


/*
Grade의 __proto__: [0]:a, [1]:b, [2]:c, [3]:d, length:4

g.this = [0]: 100, [1]:80, length:2

g는 push가 없음 -->  __proto__에도 push가 없음  -->  Array.prototype에 push가 있음

push: length 자리에 인자를 넣어라 (ex) length:4 --> [4]번 인덱스에 추가

g의 length를 지움
g.push(70);를 실행함
g는 length가 없기 때문에 __proto__의 length로 실행됨
따라서 [4]번 인덱스에 70이 추가됨
__proto__의 length는 5로 증가

*/


var Grade = function() {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};
Grade.prototype = ['a', 'b', 'c', 'd'];
var g = new Grade(100, 80);

g.push(90);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { 0: 100, 1: 80, 2: 90, ___ 4: 70, length: 5 }