// 6-02
// prototype과 __propto__


/*

constructor.prototype  
- method1
- property1  
- constructor  

instance  
- __proto__  

옅은색: innumerable
짙은색: enumerable
*/


var Constructor = function(name) {
  this.name = name;
};
Constructor.prototype.method1 = function() {};
Constructor.prototype.property1 = 'Constructor Prototype Property';


var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);