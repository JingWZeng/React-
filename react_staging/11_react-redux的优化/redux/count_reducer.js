/*
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(actions)
*/

import {INCREMENT,DECREMENT} from './constant'
const initState =100
export  default function countReducer(preState=initState, action) {
    console.log(preState,action) // undefined/200 {type: '@@redux/INITh.5.0.c.5.a'}
    const {type,data} = action // 从action对象中获取type，data
    switch (type){
        case INCREMENT:
            console.log('@')
            return preState + data
        case DECREMENT:
            return preState - data
        default:  // 不加也不减的时候，就是这种情况，也就是初始化的时候，这里求和的时候preState本来是undefined，但是这里要为0
            return preState
    }

}