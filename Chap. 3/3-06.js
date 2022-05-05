// 3-6
// 함수로서 호출, 메서드로서 호출

// 다른 언어
// function: 단독으로 사용되는 함수
// method:   object 안에 있는 함수

// JS에서는 좀 다름 (컴파일 타임에서는 다른 언어와 같음, 런타임에서는 전혀 다름)

// 단독으로 사용될 때, func를 부른 것은 전역이므로 this는 전역
// obj 안에서 호출될 때, func를 부른 것은 obj이므로 this는 obj 


var func = function (x) {
    console.log(this, x);
};

func(1);  // func를 부른 것은 전역이므로 this는 전역


var obj = {
    met: func
};


obj.met(2); // func를 부른 것은 obj이므로 this는 obj 