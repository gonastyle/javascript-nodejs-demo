var Ext = Ext || {};
Ext.data = {};

function Connection(name) {
    this.name = name; //实例属性
    console.log("constructor::" + this); //this指的是Connection实例
    console.log(this);
}

Connection.age='28'; //静态属性
Connection.say=function(){//静态方法
    console.log(this.age);
}

Connection.prototype.show=function(){//实例方法
    console.log("__proto__::" + this); //this指的是Connection
    console.log(this);
};

Ext.data.Connection = Connection;


var conn = new Ext.data.Connection('meizs');
conn.show();
console.log(conn.name + '---'+Ext.data.Connection.age);
Connection.say();