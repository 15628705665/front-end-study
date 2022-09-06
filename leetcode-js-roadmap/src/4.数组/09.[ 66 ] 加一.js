/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 17:18:37
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\09.[ 66 ] 加一.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：加一
 * * 题目地址：https://leetcode-cn.com/problems/plus-one
 */

// * 思路：

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let flag = true
    for (let i = digits.length - 1; i >= 0; i--) {
        if (flag) {
            if (digits[i] != 9)
                digits[i] += 1
            else
                digits[i] = 0
            flag = digits[i] === 0 ? true : false
            if (flag && i === 0)
                digits.unshift(1)
        }
    }
    return digits
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');