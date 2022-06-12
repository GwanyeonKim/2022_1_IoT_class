// 5-11
// 클로저로 변수를 보호한 자동차 객체 (1)

/*
클로저 변수: moved, fuel, power 

내부 변수(fuel, power, moved)에 접근 불가

moved: ReadOnly
*/


var createCar = function() {
  var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
  var power = Math.ceil(Math.random() * 3 + 2); // 연비(km / L)
  var moved = 0; // 총 이동거리

  return {
    get moved() {
      return moved;
    },

    run: function() {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;

      if (fuel < wasteFuel) {
        console.log('이동불가');
        return;
      }

      fuel -= wasteFuel;
      moved += km;
      console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
    },
  };
};

var car = createCar();