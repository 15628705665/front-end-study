/**
 * * 题目名称：合并两个有序数组
 * * 题目地址：https://leetcode-cn.com/problems/merge-sorted-array
 */

// * 思路：
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m)
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b)
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');