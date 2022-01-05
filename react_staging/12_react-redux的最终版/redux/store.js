// 该文件专门暴露store对象，整个应用只有一个store对象
import {applyMiddleware, createStore } from 'redux'

//引入汇总之后的reducer
import reducer from './reducers'

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


// 暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

