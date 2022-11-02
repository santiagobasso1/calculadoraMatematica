const login=document.querySelector('login'),
user=document.getElementById('userLogin'),
pass=document.getElementById('passLogin'),
checkbox=document.getElementById('recuerdameCheck'),
mensaje=document.getElementById('spanErrorLogin'),
btnLogin=document.getElementById('btnLogin');

let usuarios=recuperarLocalStorage();


function recuperarLocalStorage(){
    return JSON.parse(localStorage.getItem('usuarios'));
}

user.addEventListener('click',()=>{
    mensaje.innerText='';
})
pass.addEventListener('click',()=>{
    mensaje.innerText='';
})


const iniciarSesionPromesa=(respuesta)=>{
    return new Promise((resolve,reject)=>{
        if (respuesta){
            resolve('Login Exitoso');
        }else{
            reject('Login Fallido');
        }
    })
} 

function iniciarSesion(usuarios){
    let resultadoFinalLogin=false;
    if (usuarios!=null){
        let encontrado=usuarios.find((usuario)=>{
            return usuario.user==user.value&&usuario.pass==pass.value
        });
        if (encontrado){
            resultadoFinalLogin=encontrado;   
        }
    }
    iniciarSesionPromesa(resultadoFinalLogin).then((respuesta)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Has iniciado sesión',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(()=>{
            window.location.href='../pages/menuOpciones.html';
        },1500)

    }).catch((respuesta)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Usuario o contraseña incorrectos',
            showConfirmButton: false,
            timer: 1500
          })
    })

    


}

function recuerdame(){
    if (checkbox.checked){
        localStorage.setItem('recuerdame',JSON.stringify(user.value));
        localStorage.setItem('check',JSON.stringify(checkbox.value))
    }else{
        localStorage.setItem('recuerdame','');
        localStorage.setItem('check','');
    }
}

function rellenarCampoRecuerdame(){
    if (localStorage.getItem('check')&&localStorage.getItem('recuerdame')!=''){
        user.value=JSON.parse(localStorage.getItem('recuerdame'));
        checkbox.setAttribute('checked', 'checked');
    }
}

rellenarCampoRecuerdame();

checkbox.addEventListener('click',()=>{
    recuerdame();
})

btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    iniciarSesion(usuarios);
    recuerdame();
})



