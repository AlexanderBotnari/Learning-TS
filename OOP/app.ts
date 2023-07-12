class User{
    name: string;
    age: number;

    //constructor overloading
    constructor();
    constructor(name:string);
    constructor(age: number);
    constructor(name: string, age:number);
    constructor(nameOrAge?: string | number, age?: number){
        if(typeof nameOrAge === 'string'){
            this.name = nameOrAge;
        }else if(typeof nameOrAge === 'number'){
            this.age = nameOrAge;
        }

        if(typeof age === 'number'){
            this.age = age;
        }
    }
}

const user = new User('Alex');
console.log(user);
user.name = 'Ion';
console.log(user);

class Admin{
    // "strictPropertyInitialization": false, 
    role: number;
}

const admin = new Admin();
admin.role = 1;

const u1 = new User();
const u2 = new User('Bob');
const u3 = new User(34);
const u4 = new User('Bob', 20);