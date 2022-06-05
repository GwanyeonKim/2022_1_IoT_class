// 4-16
// 비동기 작업의 동기적 표현(3) - generator

// 일반 함수는 하나의 값만 반환 가능
// 여러 개의 값을 필요에 따라 하나씩 반환 할 수 있음

// yield와 return을 통해서 하나씩 순서대로 반환함
// return까지 가면 다음 순서에는 data가 나오지 않음


var addCoffee = function(prevName, name) {
    setTimeout(function() {
      coffeeMaker.next(prevName ? prevName + ', ' + name : name);
    }, 500);
};


var coffeeGenerator = function*() {
  var espresso = yield addCoffee('', '에스프레소');
  console.log(espresso);
  var americano = yield addCoffee(espresso, '아메리카노');
  console.log(americano);
  var mocha = yield addCoffee(americano, '카페모카');
  console.log(mocha);
  var latte = yield addCoffee(mocha, '카페라떼');
  console.log(latte);
};


var coffeeMaker = coffeeGenerator();
coffeeMaker.next();