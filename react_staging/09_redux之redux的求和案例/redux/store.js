// 该文件专门暴露store对象，整个应用只有一个store对象
import {applyMiddleware, createStore} from 'redux'

// 引入为Count组件服务的reducer
import countReducer  from './count_reducer'  // 默认暴露

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 暴露store
export default createStore(countReducer,applyMiddleware(thunk))

