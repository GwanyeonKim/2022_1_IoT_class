// 5-04
// return 없이도 클로저가 발생하는 다양한 경우


/*
함수에 다시 ()로 덮은거  
== 즉시 실행 함수  
즉시 실행 함수: 정의하고 실행이 바로 됨  

그 자리에서 바로 함수 실행  
함수가 바로 실행되니까 이름을 붙힐 필요가 없음 -->  ()표시 +()실행  --> (function(){})()  
*/


// (1) setInterval/setTimeout
(function() {
  var a = 0;
  var intervalId = null;
  var inner = function() {
    if (++a >= 10) {
      clearInterval(intervalId);
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();



// (2) eventListener
(function() {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';
  button.addEventListener('click', function() {
    console.log(++count, 'times clicked');
  });
  document.body.appendChild(button);
})();