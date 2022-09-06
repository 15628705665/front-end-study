/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 14:04:44
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\05.[ 面试题 10.01 ] 合并排序的数组.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：合并排序的数组
 * * 题目地址：https://leetcode-cn.com/problems/sorted-merge-lcci
 */

// * 思路：
var merge = function (A, m, B, n) {
    let Alen = A.length
    let zeroNum = Alen - m
    A.push(...B)
    A.sort((a, b) => a - b)
    while (zeroNum--) {
        A.splice(A.indexOf(0), 1)
    }

};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');