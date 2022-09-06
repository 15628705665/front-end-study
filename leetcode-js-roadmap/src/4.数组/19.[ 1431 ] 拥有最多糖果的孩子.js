/**
 * * 题目名称：拥有最多糖果的孩子
 * * 题目地址：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies
 */

// * 思路：
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies)
    let res = []
    candies.some((item) => {
        item + extraCandies >= max ? res.push(true) : res.push(false)
    })
    return res
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');