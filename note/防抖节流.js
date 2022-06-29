/*
 * @Author: your name
 * @Date: 2022-04-15 15:15:59
 * @LastEditTime: 2022-06-29 10:27:19
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEl
 * @FilePath: \front-end-learning\note\example.js
 */
// TODO: 防抖函数  英雄联盟的回城 调用函数等于被打断回城 打断后就需要重新执行回程
let debounceTimer = null
debounce = (delay, callback) => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
        clearTimeout(debounceTimer)
        callback()
    }, delay);
}
// TODO:节流函数    英雄联盟的平A  A多少次都是固定时间发出一次
let throttleTimer = null
throttle = (delay, callback) => {
    if (throttleTimer) return;
    throttleTimer = setTimeout(() => {
        clearTimeout(throttleTimer)
        callback();
    }, delay);
}