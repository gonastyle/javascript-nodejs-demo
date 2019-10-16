import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Movie extends Component {

    //this 表示当前实例
    render() {
        super()

        //组件的私有数据，相当于vue中的data(){return {}}
        this.state = {
            msg: 'hello'
        }

        return <div>
            这是Movie组件{this.props.name}
            <h3>{this.state.msg}</h3>
        </div>
    }
}

var user = {
    name: 'sds',
    age: 28
}

ReactDOM.render(
    <div>
        {

        }
        <Movie name={user.name}></Movie>
    </div>
    , document.getElementById('app'));
