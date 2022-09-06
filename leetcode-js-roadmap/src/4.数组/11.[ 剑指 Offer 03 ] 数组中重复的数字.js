/**
 * * 题目名称：数组中重复的数字
 * * 题目地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let res = null
    nums.some((item, index) => {
        let loc = nums.indexOf(item)
        if (loc != -1 && loc != index) {
            res = item
            return true
        }
    })
    return res
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');