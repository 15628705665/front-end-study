/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 23:36:39
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-30 15:31:19
 * @FilePath: \front-end-study\leetcode-js-roadmap\src\4.数组\06.[ 121 ] 买卖股票的最佳时机.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * * 题目名称：买卖股票的最佳时机
 * * 题目地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 */

// * 思路：动态规划 化繁为简 从小入手

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length <= 1)
        return 0
    let min = prices[0], max = 0;
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return max;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');