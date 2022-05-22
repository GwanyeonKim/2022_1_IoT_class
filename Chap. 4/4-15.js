// 4-15
// 비동기 작업의 동기적 표현(2) - promise(2)

// promise를 사용하기 때문에 가독성이 좋아진다.
// 시간 지연에 구애 받지 않고 비동기 프로그래밍 가능


var addCoffee = function(name) {
    return function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var newName = prevName ? prevName + ', ' + name : name;
          console.log(newName);
          resolve(newName);
        }, 500);
      });
    };
  };
  addCoffee('에스프레소')()
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페모카'))
    .then(addCoffee('카페라떼'));