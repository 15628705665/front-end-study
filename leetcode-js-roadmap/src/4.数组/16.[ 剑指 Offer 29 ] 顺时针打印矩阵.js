/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-07-01 10:53:20
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\16.[ 剑指 Offer 29 ] 顺时针打印矩阵.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：顺时针打印矩阵
 * * 题目地址：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
 */

// * 思路：
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const lineNumber = matrix.length //行数
    const columnsNumber = matrix[0].length.toFixe //列数


};


// 测试用例
let test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.time('执行用时');
console.log(spiralOrder(test));
console.timeEnd('执行用时');