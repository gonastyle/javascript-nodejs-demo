class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        console.log(' 你好吗 ');
    }
}

class American extends Person{

    constructor(name,age){
        super(name,age);
    }
   
}

var a1=new American('sds',345);
console.log(a1);
a1.sayHello();

class Chinese extends Person{

    constructor(name,age,id){
        super(name,age);
        //这个必须在super之后
        this.id=id;
    }

    show(){
        console.log('握手');
    }
}

var a2=new Chinese('sds',322,'33434434');
console.log(a2);
a2.sayHello();
a2.show();