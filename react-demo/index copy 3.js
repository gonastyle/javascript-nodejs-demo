import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class CmtList extends Component {

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
            <h1>这是评论组件</h1>
            {
                this.state.commentlist.map(item => 
                    <div key={item.id}>
                        <h1>评论人：{item.user}</h1>
                        <p>评论内容：{item.cotent}</p> 
                    </div>
                 )
            }
        </div>
    }
}

ReactDOM.render(
    <div>

        <CmtList></CmtList>
    </div>
    , document.getElementById('app'));
