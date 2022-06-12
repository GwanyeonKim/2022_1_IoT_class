// 5-08
// 콜백 함수와 클로저 (3)

/*
alertFruit --> 클로저가 없음
alertFruit에 fruit을 args로 넣어주고 새로운 function으로 return한다.
*/



var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function(fruit) {
  alert('your choice is ' + fruit);
};


fruits.forEach(function(fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit.bind(null, fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);