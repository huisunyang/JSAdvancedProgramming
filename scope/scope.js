// es6 对于作用域的一个典型的面试题就是关于let和var
for(var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
      console.log(i)
  },i * 1000)
}
 //打印5个6
for(var i = 1; i<= 5; i++){
  (function(){
      setTimeout(function timer(){
          console.log(i)
      },i*1000)
  })()
}
 //打印5个6
for(var i = 1;i <= 5;i++) {
  (function () {
      var j = i
      setTimeout(function timer() {
          console.log(j)
      }, j*1000)
  })()
}
//打印1 2 3 4 5
for(var i = 1;i <= 5; i++) {
  (function (j) {
      setTimeout(function timer(){
          console.log(j)
      },j*1000)
  })(i)
}
//打印1 2 3 4 5
for(var i = 1; i <= 5; i++) {
  let j = i
  setTimeout(function timer() {
      console.log(j)
  },j * 1000)
}
//打印1 2 3 4 5
for(let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
      console.log(i)
  },i * 1000)
}
//打印1 2 3 4 5