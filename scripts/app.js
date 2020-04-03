
let userList = [];
//Array con los usuarios registrados

const createUser = (ev)=>{
    ev.preventDefault(); //No enviar info si está vacío
    let user = {
        username : document.getElementById("username").value,
        password : document.getElementById("password").value,
        remember : document.getElementById("remember").value 
    }; //Objeto usuario

    if (username.value.length < 1) return;
    userList.push(user);
    document.querySelector('form').reset(); //Push objeto user al array

    console.warn('added' , {userList} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(userList, '\t', 2); //Imprimir temporalmente cada array en pantalla

    localStorage.setItem('myUsers', JSON.stringify(userList) );
}

document.addEventListener('DOMContentLoaded', ()=>{ //DomContentLoaded - ya cargó todo
    document.getElementById('btnCrear').addEventListener('click', createUser); //Cunado de click al botón accionar createUser
}); // 





