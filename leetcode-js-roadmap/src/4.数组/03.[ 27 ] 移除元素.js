/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 13:31:01
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\03.[ 27 ] 移除元素.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：移除元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-element
 */

// * 思路：
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    while (nums.indexOf(val) != -1) {
        nums.splice(nums.indexOf(val), 1)
    }
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');