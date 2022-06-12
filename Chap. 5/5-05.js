// 5-05
// 클로저의 메모리 관리


/*
클로저 변수는 데이터 영역에 저장된다  -->  메모리  
클로저 변수가 많다 --> 메모리를 많이 먹는다  

참조 카운트를 0으로 만든다 --> 가비지 데이터가 된다  -->  가비지 콜렉터가 수거한다  
*/


// (1) return에 의한 클로저의 메모리 해제
var outer = (function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };

  return inner;
})();

console.log(outer());
console.log(outer());
outer = null; // outer 식별자의 inner 함수 참조를 끊음



// (2) setInterval에 의한 클로저의 메모리 해제
(function() {
  var a = 0;
  var intervalId = null;
  
  var inner = function() {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null; // inner 식별자의 함수 참조를 끊음
    }

    console.log(a);
  };

  intervalId = setInterval(inner, 1000);
})();



// (3) eventListener에 의한 클로저의 메모리 해제
(function() {
  var count = 0;
  var button = document.createElement('button');
  button.innerText = 'click';

  var clickHandler = function() {
    console.log(++count, 'times clicked');

    if (count >= 10) {
      button.removeEventListener('click', clickHandler);
      clickHandler = null; // clickHandler 식별자의 함수 참조를 끊음
    }
  };


  button.addEventListener('click', clickHandler);
  document.body.appendChild(button);
})();