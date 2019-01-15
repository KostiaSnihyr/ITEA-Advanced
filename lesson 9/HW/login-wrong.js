// Задание 2:
//     Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
//     Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
//     логина.

let myObj = [];

// console.log('myObj', myObj);


class User {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
        
        myObj.push(this);
        // console.log(myObj);
    }
    
    render() {
        let node = document.createElement('div');
        node.innerHTML = `
        <h1> Hello ${this.name}</h1>`;
        
        document.body.appendChild(node);
    }
}

let localUsers = localStorage.getItem('users');
myObj = localUsers !== null ? JSON.parse(localUsers).map(item => new User(item.name, item.age)) : [];

console.log(myObj[0]);
console.log(localStorage.getItem('users'));
let localStorageUsers = localStorage.getItem('users');
var a = JSON.parse(localStorageUsers);
console.log('a', a[0]);


myObj.map(item => item.render());

document.addEventListener('DOMContentLoaded', () => {
    const name =  document.getElementById('name');
    const pass =  document.getElementById('pass');
    const btn =  document.getElementById('create');
    
    btn.addEventListener('click', () => {
        let nameVal = name.value;
        let passVal = pass.value;
        
        new User(nameVal, passVal);
        localStorage.setItem('users', JSON.stringify(myObj));
    });
});








// for(i = 0; i <= myObj.length; i++) {

//     // console.log('myObj end', myObj[i].name);
//     myObj.forEach(function(element) {
//         // console.log('element', element.name);
        
//         if(myObj[i].name === element.name) {
//             console.log('repeat');
//         }
//     });
// }

