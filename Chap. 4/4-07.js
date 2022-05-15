// 4-07
// 매서드를 콜백 함수로 전달한 경우


// logValues - obj의 method


var obj = {
    vals: [1, 2, 3],
    logValues: function(v, i) {
        console.log(this, v ,i);
    }
};


obj.logValues(1, 2);   // this는 obj
[4,5,6].forEach(obj.logValues);  // forEach가 제어권을 가지고 있다  
                                 // forEach의 콜백함수의 this는 window