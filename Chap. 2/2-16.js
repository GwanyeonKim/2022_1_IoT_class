// 2-16
// 스코프 체인 확인(3)


var a = 1;

var outer = function () {
    var b = 2;
    var inner = function () {
        console.dir(inner);
        debugger;
    };
    inner();
};

outer();
