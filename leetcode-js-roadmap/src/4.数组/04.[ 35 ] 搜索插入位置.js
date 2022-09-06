/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 13:43:43
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\04.[ 35 ] 搜索插入位置.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：搜索插入位置
 * * 题目地址：https://leetcode-cn.com/problems/search-insert-position
 */

// * 思路：
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let location = null
    if (nums.indexOf(target) != -1)
        location = nums.indexOf(target)
    else {
        nums.some((item, index) => {
            if (item > target) {
                location = index
                return true
            }
        })
    }
    return location == null ? nums.length : location
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');