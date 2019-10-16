import $ from 'jquery'

import './index.css'
import './index.less'
import './index.scss'

//ES6 语法
class Person {
    //静态属性： 通过类名访问
    //实例属性： 通过对象访问
    static info = { name: 'zs', age: 28 };
}


var p1 = new Person();
console.log(Person.info);


$(function() {

    $('li:odd').css('backgroundColor', 'green');
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634';
    });



});
//////////////////////////////////////////////////////

function Animal(name) {
    this.name = name;
}

Animal.info = 123;
var a1 = new Animal('dahuang');
console.log(a1.name);


////////////////////////////////////////////////////////////////////////////

import Vue from 'vue'

//webpack 功能不完整,只有runtime-only方式

//import Vue from './node_modules/vue/vue.js'

//import Vue from './node_modules/vue/vue.js'

//var vue=require('vue')

import router from './router.js'

import app from './App.vue'

var login = {
    template: '<h1>login组件</h1>'
}




var vm = new Vue({

    el: '#app',
    data: {
        msg: '123'
    },
    /* components: {
         login,
         login1,
         app,
         account,
         goodslist
     },*/
    /*render:function(createElements){
    	return createElements(login1)
    },*/
    /*render: c=>c(login),   */ //整个容器都会清空
    router,
    render: c => c(app)

});