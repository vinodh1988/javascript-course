function getValue(){
    return new Promise(function(resolve, reject){
        $.get("data.json",function(data){
            //console.log(data);
            resolve(data);
        })
    });

}
/*
function caller(){
    value=getValue();

    value.then(
    (data)=>console.log(data),
    (error)=>console.log(error)
    );

    console.log("Running...!!!")
}*/

async function caller(){
    let value= await getValue();
    console.log(value);
    console.log("Running...!!!")
}

caller();
console.log("Running out...!!!")