// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// a函数的返回值作为状态传递给了UI组件，而且返回值必须是一个对象，取值的时候利用this.props.xx来取的，value就是状态---状态
// function a (state){
//     return {count:state} // return {n:900}相当于<Count/ n={900}> 但是这里不能这样写
// }
//
// // value是函数，就是操作状态的方法---操作状态的方法
// function b(dispatch){
//     return {
//         add:(data)=>{
//             // 通知redux执行加法
//             console.log(data)
//             dispatch(createIncrementAction(data))
//         }
//     }
//
// }

/*
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
function mapStateToProps(state){
    return {count:state}
}

/*
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch){
    return {
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}


//使用connect()()创建并暴露一个Count的容器组件
// connect第一次调用必须传递两个参数，而且是函数
export default  connect(mapStateToProps,mapDispatchToProps)(CountUI)


