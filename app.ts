// function getFullName(userEntity: {firstname: string, surname: string}): string{
//     return `${userEntity.firstname} ${userEntity.surname}`;
// }

// const user = {
//     firstname: 'Ion',
//     surname: 'Vasilevici',
//     age: 20,
//     city: 'Kisinew',
//     skills: {
//         dev: true,
//         devops: true,
//     }
// }

// console.log(getFullName(user));

// const arr: string[] = ['Ion', 'Alex', 'Felix'];

// for (const item of arr) {
//     console.log(item);
// }

// const res = arr
//                 .filter((i: string) => i !== 'Alex')
//                 .map(i => i + '! ')
//                 .reduce((a, b) => a + b);
            
// console.log(res);

// const user: [number, string] = [1, 'User1'];

// const [id, username] = user;

// console.log(id, username);

// const arr: [number, string, ...boolean[]] = [1, 'name', true, false];

// const skill: readonly string[] = ["designer", "dev"];

// const skills: ReadonlyArray<string> = ['devops', 'dev'];

// skills.push('value');


// enum StatusCodes{
//     SUCCESS = 1,
//     IN_PROCCESS = 'p',
//     FAILURE = 'f'
// }

// const api = StatusCodes.SUCCESS;
// console.log(api);

// const enum Roles{
//     ADMIN,
//     USER
// }

// console.log(Roles.ADMIN);


//Union///////
// function logId(id: string | number){
//     if(typeof id === 'string'){
//         console.log(id.toLowerCase());
//     }else{
//         console.log(id);
//     }
// }

// function logObject(obj: {a: number} | {b: number}){
//     if('a' in obj){
//         console.log(obj.a);
//     }else{
//         console.log(obj.b)
//     }
// }

// function logMultipleIds(a: string | number, b:string | boolean){
//     if(a === b){
//         console.log(a.toLowerCase());
//     }else{
//         console.log(b);
//     }
// }


//literal types

//type alias
// type httpMethod = 'post' | "get"; //union

// type myString = string;
// /////////

// function fetchWithAuth(url: string, method: httpMethod): 1 | -1{
//     return -1;
// }

// fetchWithAuth('/login', 'post');

// let method = 'post'

// fetchWithAuth('signin', method as 'post');
//////////

////////////type alias////////////////////////
// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// }

// type Role = {
//     name: string,
//     id: number
// }

// // type UserWithRole = User & Role; //intersection
// type UserWithRole = {
//     user: User,
//     role: Role,
// }

// let user: UserWithRole = {
//     name: 'Alex',
//     age: 20,
//     skills: ['dev', 'design'],
//     id: 1,
// }

// let user: UserWithRole = {
//     user: {
//         name: 'Jake',
//         age: 2,
//         skills: ['designer']
//     },
//     role: {
//         name: 'Simple User',
//         id: 1,
//     }
// }
//////////////////////////////////////////

//////////interfaces///////////
// interface User{
//     name: string,
//     age: number,
//     skills: string[]

//     log:(id: string) => string;
// }

// interface Role{
//     roleId: number;
// }

// interface UserWithRole extends User, Role{

// }

// type User2 = {
//     name: string,
//     age: number,
//     skills: string[]

//     log:(id: string) => string;
// }

// let u1: UserWithRole = {
//     name: 'Ivan',
//     age: 40,
//     skills: ["killer"],
//     roleId: 2,

//     log(id){
//         return '';
//     }
// }
////////////////////////////////////

/////////Optional/////////////////
// interface User{
//     username: string;
//     password?: string;
// }

// const user:User = {
//     username: 's@a.ru',
// }

// function multiply(first: number, second?:number):number{
//     if(!second){
//         return first*first;
//     }
//     return first * second;
// }

// multiply(5);

// interface UserPro{
//     username: string;
//     password?: {
//         type: 'primary' | 'secondary';
//     }
// }

// const userpro: UserPro = {
//     username: 'Alex',
// }

// function testPass(user: UserPro){
//     return user.password?.type;//optional chaining
// }

// //Nullish coalising
// function test(param?: number){
//     const t = param ?? multiply(5);//if param===undefined or null to t=multiply(5)
// }



