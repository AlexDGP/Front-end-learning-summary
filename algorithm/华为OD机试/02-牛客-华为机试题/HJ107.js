/* question:
描述
计算一个浮点数的立方根，不使用库函数。
保留一位小数。

数据范围：
∣val∣≤20

输入描述：
待求解参数，为double类型（一个实数）

输出描述：
输出参数的立方根。保留一位小数。

示例1
输入：
19.9
输出：
2.7

示例2
输入：
2.7
输出：
1.4
*/

// time:

const readline = require("readline").createInterface(process.stdin);
let result;
readline
  .on("line", function (line) {
    result = getCubeRoot(parseFloat(line));
    readline.close();
  })
  .on("close", function () {
    console.log(result);
  });

function getCubeRoot(n) {
  let step = 0.001;
  return Math.cbrt(n).toFixed(1);
}
