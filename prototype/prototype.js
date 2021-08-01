// 在js中万物皆对象 函数也是对象的一种
// 函数和构造函数的区别 所有的函数都可以成为构造函数 但不是所有的函数都可以叫做构造函数 只有通过new 关键字调用了之后的函数才可以被称为构造函数


// __proto__ prototype constructor
// __proto__ 和 constructor是对象特有的
// prototype是函数特有的 由于函数也是对象的一种 所以函数也有__proto__ 和 constructor

// prototype属性可以看作是一块特殊的空间 存放了属性和方法 
// __proto__属性是作为通往prototype空间的桥梁
// 实例对象可以通过__proto__这个桥梁去往prototype这个空间 prototype即为该实例对象的原型对象
//__proto__通常称为隐式原型，prototype通常称为显式原型，那我们可以说一个对象的隐式原型指向了该对象的构造函数的显式原型
// constructor的作用是从一个对象指向一个函数 这个函数就是该对象的构造函数