// 3-16
// apply method

// call: 첫 번째 인자 제외하고 뒤에 모든 인자는 호출할 함수의 매개변수
// apply: 호출할 함수의 매개변수를 배열로 받음



var func = function (a, b, c) {
    console.log(this, a, b, c);
};

func.apply({x:1}, [4 ,5, 6]);  // this --> {x:1}   // 함수의 매개변수 --> [4, 5, 6]


// ----
var obj = {
    a: 1,
    method: function (x,y) {
        console.log(this.a, x, y)
    }
};

obj.method.apply({a: 4}, [5, 6]);    // this --> {a:4}   // 함수의 매개변수 --> [5, 6]
