/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 22:56:58
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-29 23:19:13
 * @FilePath: \front-end-learning\LeetCode\leetcode-js-roadmap\src\4.数组\01.[ 1 ] 两数之和.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
 */

// * 思路：耗时五分钟
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = []
    nums.some((item, index) => {
        if (nums.indexOf(target - item) != -1 && nums.indexOf(target - item) != index) {
            result = [index, nums.indexOf(target - item)]
            return true
        }

    })
    return result
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');