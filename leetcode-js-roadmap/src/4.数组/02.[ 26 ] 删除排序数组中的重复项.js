/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 11:17:51
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\02.[ 26 ] 删除排序数组中的重复项.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：删除排序数组中的重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 */

// * 思路：
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[index]) {
            nums[index + 1] = nums[i];
            index++;
        }
    }
    nums.splice(index, nums.length - index - 1)
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');