function fun(a){
    console.log("Functionally right and running and to call back");
    a("First parameter");
    console.log("call back done and about to wrap the function call")
    a("second Parameter");
    console.log("Second time also finished")
}

fun(function(a){
   console.log("Callback function is working...!!!!",a);
});

fun(a=>console.log("Received  ",a))

// A function which is sent as parameter to another function
// it is always meant to be called back and
// such a function is called as callback
