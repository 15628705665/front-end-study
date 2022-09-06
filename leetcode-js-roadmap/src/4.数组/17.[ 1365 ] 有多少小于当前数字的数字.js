/**
 * * 题目名称：有多少小于当前数字的数字
 * * 题目地址：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let originalArray = [...nums]
    nums.sort((a, b) => a - b)
    let res = []
    originalArray.map((item, index) => {
        res[index] = nums.indexOf(item)
    })
    return res
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');