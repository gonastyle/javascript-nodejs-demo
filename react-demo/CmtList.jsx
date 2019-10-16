import React, { Component } from 'react';


//这个样式是全局的
import cssobj  from '@/cmtlist.scss'
console.log(cssobj);

//导入评论项组件
import CmtItem from '@/CmtItem.jsx'




//评论列表组件
export default class CmtList extends Component {

    constructor() {
        super()
        this.state = {
            commentlist: [
                { id: 1, user: 'dfd', cotent: 'bc' },
                { id: 2, user: 'dfd', cotent: 'df' },
                { id: 3, user: 'vc', cotent: 'gd' },
                { id: 4, user: 'xv', cotent: 'dfgd' },
            ]
        }
    }

    render() {
        return <div>
            <h1 className={[cssobj.title,'test'].join(' ')}>这是评论组件</h1>
            {
                this.state.commentlist.map(item => 
                    //通过展开运算符，传递属性值
                   <CmtItem {...item} key={item.id}></CmtItem>
                 )
            }
        </div>
    }
}


