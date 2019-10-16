import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props){
    console.log(props);
    return <div> hello 组件{props.name} </div>
}

/** 把组件暴露出去 **/
export default Hello