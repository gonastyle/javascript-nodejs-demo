import React, { Component } from 'react';

import style from '@/style.js'


//这个样式是全局的
import cssobj  from '@/cmtitem.scss'

//评论项组件

export default function CmtItem(props){
    return  <div style={style.item}>
    <h1 id={cssobj.cmTitle}>评论人：{props.user}</h1>
    <p>评论内容：{props.cotent}</p> 
</div>
}

