# 阅读代码备注

## js/keypad.js
获取键盘输入

## 存档同步
localStorage中的以com.endrift.gbajs.为前缀的，是由gbajs生成的存档
所以，可以将localStorage中的数据传输到服务器中，然后再从服务器中恢复数据
```js
/**
 * 将localStorage中的以com.endrift.gbajs.的数据传输到服务器中
 **/
function saveGBAData() {
    var prefix = 'com.endrift.gbajs.';
    var data = localStorage;
    var res = {};
    for (var i in data) 
        if (i.indexOf(prefix) == 0) 
            res[i] = data[i];
    console.log(res);
    console.log(JSON.stringify(res));
    // 对结果进行处理
    // pass
}

/**
 * 从服务器中恢复数据
 **/
function loadGBAData() {
    loadData('./data.json', function (res) {
        console.log(res);
        var prefix = 'com.endrift.gbajs.';
        for (var i in res) 
            if (i.indexOf(prefix) == 0) localStorage.setItem(i, res[i]);
    })
}
```
但localStorage的数据会有10M大小的限制，**目前还不清楚存档的存储机制**


## 新特性
1. 登录
> 用户输入用户名和密码，点击登录按钮，登录成功后，自动存档同步，然后跳转到游戏选择页面（主页）
> 用户表（用户名，密码，id）
2. 注册
> 用户输入用户名，密码，再次输入密码，点击注册后，进入游戏主页
3. 存档同步(自动)
> 将localStorage中的以com.endrift.gbajs.为前缀的，是由gbajs生成的存档
> 
4. 游戏存储在云端
5. 手柄支持
6. 虚拟按键