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

function iniciarSesion(usuarios){
    let encontrado=usuarios.find((usuario)=>{
        return usuario.user==user.value&&usuario.pass==pass.value
    });
    console.log(encontrado);
    if (encontrado){
        window.location.href='../calculadoraMatematica/pages/menuOpciones.html';
    }else{
        mensaje.innerText=('Usuario o contraseña incorrectos');
    }
}

function recuerdame(){
    // checkbox.setAttribute('checked', 'checked');
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
    }else{
        console.log(false);
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

