// 5-06
// 콜백 함수와 클로저

/*
(A): 외부 함수
(B): 내부 함수

클로저 변수: fruit  -->  데이터 영역

*/



var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul'); // (공통 코드)

fruits.forEach(function(fruit) {
  // (A)
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', function() {
    // (B)
    alert('your choice is ' + fruit);
  });
  $ul.appendChild($li);
});
document.body.appendChild($ul);
