# ES6学习测试

本次测试一共有五道选择题、两道编程题。

填空题把正确答案填写在括号里，编程题把代码结果放到执行的位置和结果截图。

## 选择题

1. 1==true的返回值是true，这句话是否正确？（）
   1. 正确
   2. 错误

2. 以下代码执行的结果是什么?（）

    ```js
    for(var i=0;i<5;++i){
        setTimeout(function(){
            console.log(i+ ' ');
        },100);
    }
    ```

    1. 5 5 5 5 5
    2. 0 0 0 0 0
    3. 0 1 2 3 4
    4. 1 2 3 4 5
3. 下列哪个方法不能改变自身数组？（）
   1. splice
   2. concat
   3. sort
   4. pop
4. typeof [] 返回值为？ （）
   1. array
   2. Array
   3. object
   4. undefined
5. 下列代码输出的顺序是什么？（）

   ```js
    setTimeout(function () {
        console.log(1)
    }, 0);

    new Promise(function (resolve, reject) {
        console.log(2)
        for (var i = 0; i < 10000; i++) {
            if (i === 10) {
                console.log(10)
            }
            i == 9999 && resolve();
        }
    console.log(3)
    }).then(function () {
        console.log(4)
    })
    console.log(5);
   ```

   1. 2 10 3 5 4 1
   2. 2 5 3 10 4 1
   3. 2 10 5 3 4 1
   4. 2 5 10 3 4 1

## 编程题

1. 使用ES6的语法实现一个call函数（不借助bind和apply函数的辅助）

- 实现代码

```js

```

- 实现截图

1. 数据扁平化，给定一个下面这样的数据结果，然后实现数据扁平化

![](https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/code-images\202207221944120.png)

转变成下面这样

![](https://bugdr-project-1305152720.cos.ap-beijing.myqcloud.com/code-images\202207221945493.png)

- 实现代码

```js

```

- 实现截图