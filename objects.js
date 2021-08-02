 student= {
    sno: 1,
    name: "Vinodh",
    city: "Chennai"
}

console.log(student)


console.log(JSON.stringify(student))

x=JSON.stringify(student);
x=JSON.parse(x);
console.log(x.name);

student.desig="manager"

console.log(student)

//person=student;

//person.age=23;
person={...student,desig:"Clerk",age:23}
//person.age=23;

console.log(person);
console.log(student);