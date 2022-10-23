const registro = document.querySelector('.signUp'),
user = document.getElementById('userSignUp'),
pass = document.getElementById('passwordSignUp'),
email = document.getElementById('mailSignUp'),
btnRegistro = document.getElementById('btnSignUp'),
mensaje=document.getElementById('spanErrorSignUp');



let usuarios;



if (localStorage.getItem('usuarios')){
    usuarios=JSON.parse(localStorage.getItem('usuarios'))
}else{
    usuarios=[];
}




class Usuario{
    constructor(user,pass,email){
        this.user=user;
        this.pass=pass;
        this.email=email;
        this.rol='Usuario Basico';
    }
}
function limpiarCampos(){
    user.value='';
    pass.value='';
    email.value='';
}

function borrarArrayStorage(){ //FUNCION PARA BORRAR LOS USUARIOS, EN CASO DE QUERER ELIMINARLOS DEL STORAGE EJECUTARLA
    usuarios=[];
    guardarEnStorage(usuarios);
}


function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

function guardarEnStorage(usuarios){
    return localStorage.setItem('usuarios',JSON.stringify(usuarios));
}

user.addEventListener('click',()=>{
    mensaje.innerText='';
})
email.addEventListener('click',()=>{
    mensaje.innerText='';
})
pass.addEventListener('click',()=>{
    mensaje.innerText='';
})

btnRegistro.addEventListener('click',(e)=>{
    e.preventDefault();
    if (user.value==''){
        mensaje.innerText='Debe ingresar un usuario';
    }else if (pass.value==''){

        mensaje.innerText='Debe ingresar una contraseña';
    }else if ((email.value=='')){
        mensaje.innerText='Debe ingresar un email';
    }else{
    let nuevoUsuario=new Usuario(user.value, pass.value, email.value);
    guardarUsuario(nuevoUsuario);
    guardarEnStorage(usuarios);
    mensaje.innerText='Agregado Exitosamente';
    limpiarCampos();
    }

})

