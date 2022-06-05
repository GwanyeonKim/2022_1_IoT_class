// 4-17
// 비동기 작업의 동기적 표현(4) - promise + async/await


// async/awit --> 가독성이 뛰어남
// 비동기 작업을 수행하고자 하는 함수 앞에 async 표기
// 함수 내부에서 비동기 작업이 필요한 위치마다 await 표기
// 뒤의 내용을 promise 자동 전환
// 그 내용이 resolve된 이후에 다음 코드 진행


// promise의 then과 유사하다.

var addCoffee = function(name) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(name);
      }, 500);
    });
  };

var coffeeMaker = async function() {
  var coffeeList = '';
  var _addCoffee = async function(name) {
    coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name));
  };

  await _addCoffee('에스프레소');
  console.log(coffeeList);
  await _addCoffee('아메리카노');
  console.log(coffeeList);
  await _addCoffee('카페모카');
  console.log(coffeeList);
  await _addCoffee('카페라떼');
  console.log(coffeeList);
};

coffeeMaker();