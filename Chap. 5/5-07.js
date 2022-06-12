// 5-07
// 콜백 함수와 클로저 (2)

/*
5-06 예제에서 (A)가 실행될 때마다 (B)를 계속 만들지 말고 한 번만 만들자 --> 5-07

*/


var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function(fruit) {
  alert('your choice is ' + fruit);
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit);
  $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);