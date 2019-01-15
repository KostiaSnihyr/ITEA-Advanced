// Задание 2:
//     Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
//     Если в localStorage есть записть На страниче вывести "Привет {username}", если нет - вывести окно
//     логина.

function isUserExist(name, pass) {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    if(users) {
        for (var i = 0; i < users.length; i++) {
            if(users[i].name === name && users[i].pass === pass) return true;
        }
    }
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    const name =  document.getElementById('name');
    const pass =  document.getElementById('pass');
    const btn =  document.getElementById('create');
    
    btn.addEventListener('click', () => {
        let nameVal = name.value;
        let passVal = pass.value;

        if(isUserExist(nameVal, passVal)) {
            let curNode = document.getElementById('hello');
            if(curNode) curNode.remove();
            
            let node = document.createElement('div');
                node.id = 'hello';
                node.innerHTML = `<h1>Hello ${nameVal}</h1>`;
            document.body.appendChild(node);
        } else {
            let data = JSON.parse(localStorage.getItem('users'));
            if(data === null) data = [];
            data.push({name: nameVal, pass: passVal});
            localStorage.setItem('users', JSON.stringify(data));
        }
    });
});
