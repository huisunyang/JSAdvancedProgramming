# JSAdvancedProgramming
js高级第四版学习打卡
#### 2021.7.19 事件
事件分为三个阶段：事件捕获、到达目标、事件冒泡
```js
注册事件： addEventListener()
移除事件：removeEventListener()
```
事件对象：event 对象是传给事件处理程序的唯一参数。不管以哪种方式（DOM0或 DOM2）指定事件处理程序，都会传入这个 event 对象

属性/方法|类 型|读/写|说明
--|:--:|:--:|--
bubbles|布尔值|只读|表示事件是否冒泡
cancelable|布尔值|只读|表示是否可以取消事件的默认行为
currentTarget|元素|只读|当前事件处理程序所在的元素
defaultPrevented|布尔值|只读|true 表示已经调用 preventDefault()方法（DOM3 Events 中新增）
detail|整数|只读|事件相关的其他信息
eventPhase|整数|只读|表示调用事件处理程序的阶段：1 代表捕获阶段，2 代表到达目标，3 代表冒泡阶段
preventDefault()|函数|只读|用于取消事件的默认行为。只有 cancelable 为 true 才可以调用这个方法
stopImmediatePropagation()|函数|只读|用于取消所有后续事件捕获或事件冒泡，并阻止调用任何后续事件处理程序（DOM3 Events 中新增）
stopPropagation()|函数|只读|用于取消所有后续事件捕获或事件冒泡。只有 bubbles为 true 才可以调用这个方法
target|元素|只读|事件目标
trusted|布尔值|只读|true 表示事件是由浏览器生成的。false 表示事件是开
type|字符串|只读|被触发的事件类型
View|AbstractView|只读|与事件相关的抽象视图。等于事件所发生的 window 对象

鼠标事件注意mouseenter和mouseover的区别 mouseenter是在捕获阶段触发 mouseover是在事件冒泡阶段触发 所以mouseenter不存在事件代理 如果需要事件代理 只能使用mouseover


