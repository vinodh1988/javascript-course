a=123
b=true
c=234.34
d='string'

console.log(a,b,c,d)
console.log(typeof(a),typeof(b),typeof(c),typeof(d))

e=[34,34,53,'Raj',true,23.34,[34,53,132],'Rahul',[a,b,c]]
/*
console.log(e.length)
console.log(e)
console.log(e[6][0])
console.log(e[6])*/

for(let x in  e){
    console.log(e[x])
}


for(let x of e){
    console.log(x)
}