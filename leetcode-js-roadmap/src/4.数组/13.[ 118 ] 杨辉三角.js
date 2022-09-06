/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-07-01 10:20:33
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\13.[ 118 ] 杨辉三角.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：杨辉三角
 * * 题目地址：https://leetcode-cn.com/problems/pascals-triangle
 */

// * 思路：
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let pascalTriangle = [[1]]
    if (numRows == 1)
        return pascalTriangle
    pascalTriangle[1] = [1, 1]
    if (numRows == 2)
        return pascalTriangle
    let currentArr = []
    for (let i = 3; i <= numRows; i++) {
        for (let c = 0; c < i; c++) {
            let beforArr = pascalTriangle[i - 2] //上一层
            c == 0 || c === i - 1 ? currentArr.push(1) : currentArr.push(beforArr[c - 1] + beforArr[c])
        }
        pascalTriangle[i - 1] = currentArr
        currentArr = []
    }
    return pascalTriangle
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');