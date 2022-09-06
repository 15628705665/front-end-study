/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-07-01 10:23:45
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\14.[ 面试题 01.01 ] 判定字符是否唯一.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：判定字符是否唯一
 * * 题目地址：https://leetcode-cn.com/problems/is-unique-lcci
 */

// * 思路：

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    let s = astr.split('')
    let s2 = Array.from(new Set(s))
    return s.length === s2.length
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');