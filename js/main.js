const intentos=2;

//USUARIOS
const usuario1 ={
  nickname: "Santiago",
  password: "1234",
  mail:'santiagobasso@hotmail.com',
  rol: "Administrador",
}

const usuario2 ={
  nickname: "2",
  password: "1234",
  mail:'santiagobasso2@hotmail.com',
  rol: "Usuario Basico",
}


const login1=JSON.stringify(usuario1);
const login2=JSON.stringify(usuario2);

localStorage.setItem('login1',login1);
localStorage.setItem('login2',login2);

spanError=document.getElementById('spanErrorLogin');

//----------------------------------------------------------------------------------------
//LOGIN con local storage & JSON----------------------------------------------------------
//----------------------------------------------------------------------------------------
let intentosActuales=0;
function login(){

  salida=false;
    let usuario=document.getElementById("user").value;
    let contrasenia=document.getElementById("password").value;
    if ((usuario==(JSON.parse(localStorage.getItem('login1')).nickname))&&(contrasenia==JSON.parse(localStorage.getItem('login1')).password)){ //No lo paso a uppercase porque ya que es un inicio de sesión debe ser igual hasta en las mayusculas
      spanError.innerText='Inicio exitoso';
      salida=true;
      return salida;
    }else if ((usuario==(JSON.parse(localStorage.getItem('login2')).nickname))&&(contrasenia==(JSON.parse(localStorage.getItem('login2')).password))){
      spanError.innerText='Inicio exitoso';
      salida=true;
      return salida;
      }else{
      spanError.innerText='Usuario o contraseña equivocados, le quedan '+(intentos-intentosActuales)+' intentos';
      intentosActuales++;

    }
    if (intentosActuales==intentos+1){
      document.getElementById('spanErrorLogin').innerText='Alcanzó el limite de intentos, vuelva mas tarde';
      return salida;
  }
}
function iniciarPrograma(){
  const botonLogin=document.querySelector("#btnLogin");
  botonLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    if (intentosActuales!=3){
      if (login()==true){
        window.open("../pages/menuOpciones.html")
      }
    }
  })
}



iniciarPrograma();
