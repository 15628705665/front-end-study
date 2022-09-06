/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 16:20:53
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\07.[ 53 ] 最大子序和.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：最大子序和
 * * 题目地址：https://leetcode-cn.com/problems/maximum-subarray
 */

// * 思路：动态规划 当前子数组为负数时 不宜再作为子数组开头应该重新开始
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length <= 1)
        return nums[0]
    let maxValue = nums[0]
    let currentValue = 0
    for (let i = 0; i < nums.length; ++i) {
        if (currentValue < 0) {
            currentValue = nums[i]
        } else {
            currentValue += nums[i]
        }
        maxValue = Math.max(maxValue, currentValue)
    }
    return maxValue
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');