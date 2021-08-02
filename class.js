class Test{
    a=20;
    
    constructor(){
        this.a=20;
    }

    fun(){
       /* callitback(function(a){
            this.a=a
        }.bind(this))*/

        callitback(a=>this.a=a)
    }

    display(){
        console.log(this.a+" is the value");
    }
}

function callitback(fun){
   console.log("Going to set the value");
   fun(50);
}

a=new Test();
a.display();
a.fun();
a.display();