import React, { Component } from 'react';

//暴露组件给import
export default class BindEvent extends Component {

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
            <button onClick={
                (arg1, arg2) => {
                    console.log('按钮被调用')

                    //react推荐这种改值
                    this.setState({
                        msg: '值改了'
                    },function(){
                        console.log(this.state.msg);
                    });

                }}>按钮</button>
            <h3>{this.state.msg}</h3>
        </div>
    }


    myclickHandler() {
        console.log('按钮被调用')

        //this.state.msg='改了';
        this.setState({
            msg: '值改了'
        });

    }

}