// 5-09
// 콜백 함수와 클로저 (4)


/*
5-08의 alertFruit 대신에 alertFruitBuilder 함수로 작성  

alertFruitBuilder 함수 내부에서 익명 함수 반환 --> 익명함수는 기존의 alertFruit  

alertFruitBuilder의 실행 결과로 반환된 함수에는 클로저가 있음  
*/


var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruitBuilder = function(fruit) {
  return function() {
    alert('your choice is ' + fruit);
  };
};
fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder(fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);