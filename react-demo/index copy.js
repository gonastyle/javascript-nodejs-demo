// console.log("hot");
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@/Hello'

//var myh=React.createElement('h1',{id:'myh1',title:'this is a h1'},'hello');
//var mydiv=React.createElement('div',null,'',myh)

// var mydiv=<div>JSX方式</div>

// ReactDOM.render(mydiv,document.getElementById('app'));



let array = [1, 2, 3, 4, 5];

let newArray = array.map((item) => {
    return item * item;
})

console.log(newArray);



var arrStr=['32','32','23'];

ReactDOM.render(
<div>
    {
        arrStr.map((item,i)=>{
            return <h5 key={i}>item</h5>;})
    }
     <Hello name={"传的参数"}></Hello>

</div>
,document.getElementById('app'));
