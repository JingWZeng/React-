import React, {Component} from 'react';
import qs from 'querystring'

// name=zeng&age=19 key=value&key=value   urlencoded

let obj = {name:'zeng', age:90}
console.log(qs.stringify(obj)) // name=zeng&age=90
console.log(qs.parse('name=zeng&age=90')) // {name: 'zeng', age: '90'}

const dataContent = [
    {
        id:1,
        content:'aaaa'
    },
    {
        id:2,
        content:'bbbb'
    },
    {
        id:3,
        content:'cccc'
    }
]
class Detail extends Component {
    render() {

        console.log(this.props)
      //  接受params
      // const {id,title} = this.props.match.params;

      //  接受search参数
      //   const {search} = this.props.location
      //   // console.log(qs.parse(search)) //{?id: '2', title: '消息2'}
      //   const {id,title} = qs.parse(search.slice(1))

        // 接受state参数
        const {id ,title}= this.props.location.state || {}

      const findRes = dataContent.find(item=>{
          return item.id === +id
      })|| {}
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{findRes.content}</li>
            </ul>
        );
    }
}

export default Detail;