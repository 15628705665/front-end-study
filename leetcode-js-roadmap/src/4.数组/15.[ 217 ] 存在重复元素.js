/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate
 */

// * 思路：

var containsDuplicate = function (nums) {
    let s2 = Array.from(new Set(nums))
    return nums.length !== s2.length
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');