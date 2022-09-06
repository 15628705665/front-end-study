/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-07-01 10:32:48
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\12.[ 169 ] 多数元素.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element
 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    return nums[Math.floor(nums.length / 2)]
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');