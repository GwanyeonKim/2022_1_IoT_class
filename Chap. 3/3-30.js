// 3-30
// thisArg를 받는 경우 예시 - forEach 메서드

var report = {
    sum: 0,
    count: 0,
    add: function () {
        var args = Array.prototype.slice.call(arguments);
        args.forEach(function (entry) {
            this.sum += entry;
            ++this.count;
        }, this);
    },
    average: function () {
        return this.sum / this.count;
    }
};

report.add(60, 85, 95);

console.log(report.sum);
console.log(report.count);
console.log(report.average());