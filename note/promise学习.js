/*
 * @Author: zhaowenhao zhaowenhao@riverroad.cn
 * @Date: 2022-06-29 16:27:32
 * @LastEditors: zhaowenhao zhaowenhao@riverroad.cn
 * @LastEditTime: 2022-06-29 17:36:01
 * @FilePath: \front-end-learning\note\promise学习.js
 * @Description: 
 * 
 * Copyright (c) 2022 by zhaowenhao zhaowenhao@riverroad.cn, All Rights Reserved. 
 */
/**
 * @description: promise.all 学习
 * @return {*}
 */
let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('----p1----')
            resolve(1)
        }, 3 * 1000);
    })
}
let p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('----p2----')
            resolve(2)
        }, 4 * 1000);
    })
}

let startTime = new Date().getTime()
Promise.all([p1(), p2()]).then((e) => {
    let endTime = new Date().getTime()
    console.log('all运行时间===>', endTime - startTime, '毫秒', e)
}).catch((err) => {
    console.log('err', err)
})
