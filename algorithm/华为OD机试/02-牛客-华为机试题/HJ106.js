/* question:
描述
将一个字符串str的内容颠倒过来，并输出。

数据范围：

1≤len(str)≤10000
输入描述：
输入一个字符串，可以有空格

输出描述：
输出逆序的字符串

示例1
输入：
I am a student
输出：
tneduts a ma I

示例2
输入：
nowcoder
输出：
redocwon

*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = [...line].reverse().join("");
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });
