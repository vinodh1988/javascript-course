a=30;

function fun(){
    var a=30; //var represents function scope
    {
        //var a=50;//not block level still function level
        let a=50;
        console.log("inner",a);
    }
    console.log(a);
}
fun();
console.log(a);