let person={
    name:'mosh',
    age:30
};

person.name='John';

let selection='name';
person['selection']='Mary';

console.log(person.name);

