/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 16:38:56
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\08.[ 283 ] 移动零.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：移动零
 * * 题目地址：https://leetcode-cn.com/problems/move-zeroes
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (i == index) {
                index++
                continue
            }
            let temp = nums[i]
            nums[i] = nums[index]
            nums[index] = temp
            index++
        }
    }

};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');