class Person {
    age = 0;

    constructor(name){
        this.name = name;
    }
}

let p1= new Person("Thais")
let p2= new Person("Müller")
let p3= new Person("Telma")

p1.age = 28;
p2.age = 32;
p3.age = 56;

console.log('P1 = ' + p1.name + ' tem ' + p1.age + ' anos.')
console.log('p2 = ' + p2.name + ' tem ' + p2.age + ' anos. ')
console.log('p3 = ' + p3.name + ' tem ' + p3.age + ' anos. ')