/* question:
描述
找出给定字符串中大写字符(即'A'-'Z')的个数。
数据范围：字符串长度：

1≤∣s∣≤250
字符串中可能包含空格或其他字符
进阶：时间复杂度：O(n) ，空间复杂度：O(n)
输入描述：
对于每组样例，输入一行，代表待统计的字符串

输出描述：
输出一个整数，代表字符串中大写字母的个数

示例1
输入：
A 1 0 1 1150175017(&^%&$vabovbaoadd 123#$%#%#O
输出：
2
*/

// time: 2分43秒

const readline = require("readline").createInterface(process.stdin);
let res;
readline
  .on("line", function (line) {
    res = line.match(/[A-Z]/g)?.length;
    readline.close();
  })
  .on("close", function () {
    console.log(res);
  });
