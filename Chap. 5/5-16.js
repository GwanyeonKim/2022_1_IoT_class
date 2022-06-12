// 5-16
// 부분 적용 함수 - 디바운스

/*
 디바운스에 대한 예제  

 클로저 변수: timeout, eventName, timeoutId, wait  

 디바운스를 실행하면 클로저 변수가 묶여 있는 상수 함수가 리턴됨  

 
*/


var debounce = function(eventName, func, wait) {
  var timeoutId = null;
  return function(event) {
    var self = this;
    console.log(eventName, 'event 발생');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(self, event), wait);
  };
};

var moveHandler = function(e) {
  console.log('move event 처리');
};
var wheelHandler = function(e) {
  console.log('wheel event 처리');
};
document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener(
  'mousewheel',
  debounce('wheel', wheelHandler, 700)
);