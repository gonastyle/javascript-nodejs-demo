import React, { Component } from 'react';

//暴露组件给import
export default class BindInputEvent extends Component {

    constructor() {
        super();
        this.state = {
            msg: '哈哈哈'
        }
    }

    render() {
        return <div>
            BindEvent 组件
            <hr />

            <h3>{this.state.msg}</h3>

            <input type='text' style={{ width: '100%' }} value={this.state.msg} onChange={(e)=>{this.myclickHandler(e)}} ref='txt'></input>


        </div>
    }


    myclickHandler=(e) =>{

        //第一种：获取文本框的值
        console.log(this.refs.txt.value);
        console.log(e.target.value);

        //第二种：获取文本框的值  e.target.value
        this.setState({
            msg:e.target.value
        });
    }

}