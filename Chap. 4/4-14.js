// 4-14
// 비동기 작업의 동기적 표현(1) - promise(1)

// promise의 resolve와 reject
// resolve - promise의 state를 pending에서 fulfilled로 바꾸고 value에 인자 값을 넣어줌
// reject - promise의 state를 pending에서 reject으로 바꾸고 value에 인자 값을 넣어줌
// 둘이 동시에 실행되게 하면 안됨

// then(onFulfilled, onRejected) : promise 객체 안에 있는 함수
// state가 fulfilled면 onFulfilled 실행, onRejected면 reject 실행 
// 만약 state가 pendding이면, chained[]이라는 배열에 onFulfilled와 onRejected를 저장

// resolve -- chained에 있는 onFulfilled를 차례대로 실행
// reject   --chained에 있는 onRejected를 차례대로 실행


new Promise(function(resolve) {
    setTimeout(function() {
      var name = '에스프레소';
      console.log(name);
      resolve(name);
    }, 500);
  })
    .then(function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var name = prevName + ', 아메리카노';
          console.log(name);
          resolve(name);
        }, 500);
      });
    })
    .then(function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var name = prevName + ', 카페모카';
          console.log(name);
          resolve(name);
        }, 500);
      });
    })
    .then(function(prevName) {
      return new Promise(function(resolve) {
        setTimeout(function() {
          var name = prevName + ', 카페라떼';
          console.log(name);
          resolve(name);
        }, 500);
      });
    });