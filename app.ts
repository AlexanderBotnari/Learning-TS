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


enum StatusCodes{
    SUCCESS = 1,
    IN_PROCCESS = 'p',
    FAILURE = 'f'
}

const api = StatusCodes.SUCCESS;
console.log(api);

const enum Roles{
    ADMIN,
    USER
}

console.log(Roles.ADMIN);