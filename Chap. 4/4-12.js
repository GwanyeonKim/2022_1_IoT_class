// 4-12
// 콜백 지옥 예시 (1-1)


// 콜백함수를 인자로 넘겨서 비동기 시스템을 만들 때 이런 문제가 발생한다.
// 콜백 함수를 중첩해서 사용하기 때문에 들여쓰기를 계속 사용하게 됨
// 따라서 가독성이 매우 떨어지는 문제가 발생한다.

// 이를 해결하기 위해 Promise 또는 async/await을 이용한다. 

setTimeout(
    function(name) {
      var coffeeList = name;
      console.log(coffeeList);
  
      setTimeout(
        function(name) {
          coffeeList += ', ' + name;
          console.log(coffeeList);
  
          setTimeout(
            function(name) {
              coffeeList += ', ' + name;
              console.log(coffeeList);
  
              setTimeout(
                function(name) {
                  coffeeList += ', ' + name;
                  console.log(coffeeList);
                },
                500,
                '카페라떼'
              );
            },
            500,
            '카페모카'
          );
        },
        500,
        '아메리카노'
      );
    },
    500,
    '에스프레소'
  );