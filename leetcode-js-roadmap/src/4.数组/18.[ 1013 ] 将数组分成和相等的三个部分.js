/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-07-01 13:36:45
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\18.[ 1013 ] 将数组分成和相等的三个部分.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：将数组分成和相等的三个部分
 * * 题目地址：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
 */

// * 思路：

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    let flag = false
    let sum = arr.reduce((a, b) => a + b)
    if (sum % 3) return flag
    let currentSum = 0
    let count = 0

    arr.some((item, index) => {
        currentSum += item
        if (currentSum === sum / 3) {
            currentSum = 0
            count++
            if (count == 2 && index != arr.length - 1) {
                flag = true
                return true
            }

        }
    })
    return flag


};

// 测试用例
let test = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]

console.time('执行用时');
console.log(canThreePartsEqualSum(test));
console.timeEnd('执行用时');