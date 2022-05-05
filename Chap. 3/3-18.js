// 3-18
// call/aplly 매서드의 활용 1-2) arguments.NodeList에 배열 메서드를 적용



function a() {
    var argy = Array.prototype.slice.call(arguments);
    argv.forEach(function (arg) {
        console.log(arg);
    });
}

a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';

var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);

nodeArr.forEach(function (node) {
    console.log(node);
});


