// 该文件专门为Count组件生成action对象

import {INCREMENT,DECREMENT} from '../constant'
// import store from "./store";
export const increment = data=>({type:INCREMENT,data})
export const decrement = data=>({type:DECREMENT,data})


//异步action，就是指action的值为函数,异步action中一般都会调用同步action，因为只有函数可以作为一个异步任务，所以返回的是函数，比如定时器
//异步action不是必须要用的。
export const incrementAsync =(data,time)=> {
    return (dispatch) => { // 因为return的整个函数是给store调用的，它会传它的dispatch过来
        setTimeout(()=>{
   /*        store.dispatch(createIncrementAction(data))*/
             dispatch(increment(data))
        },time)
    }
}