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


//----------------------------------------------------------------------------------------
//Menu------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

function menu(){
  let mensajeMenu=("Ingrese la opcion que desea \n 1-Calculadora de 2 numeros \n 2-Cantidad n de numeros primos \n 3-Area y perímetro de un circulo \n 4-Calcular distancia entre 2 puntos \n 5-Ingresar n numeros y multiplicarlos entre si, saber maximo minimo y promedio de estos \n 6-Ingrese n numeros y mostrar solo los mayores a 10 \n 7-Ingresar n numeros desordenados y que se ordenen \n 8-Ingrese n numeros y busque la posición de uno específico \n 0-Para salir esta ventana");
  let opcion = prompt(mensajeMenu);
  //Repetimos hasta que se ingresa "ESC"
  while(opcion != "0" ){
    switch (opcion) {
        case "1":
              calculadoraControlada();
              break;
          case "2":
              numerosPrimos();
              break;
          case "3":
            areaYPerimetroCirculo();
            break;
          case "4":
            distancia2Puntos();
            break;    
          case "5":
            productoriaMayorMenorPromArray();
            break;  
          case "6":
            mayoresQueX();
            break;  
          case "7":
            ordenarArrayNumeros();
            break;  
          case "8":
            buscarPosNunmero();
            break; 
        default:
            alert("Ingrese una opción valida")
            break;
    }
    opcion = prompt(mensajeMenu);
  }
  window.close();
}

//----------------------------------------------------------------------------------------
//Programa Principal----------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// let salida=false;
// if (login(salida)==true){
//   menu();
// }


//DOM
// const div = document.getElementById('1'),
// ache1=document.getElementsByTagName('h1');

// console.log(ache1[1]);

// ache1[1].innerText='Chorizo';

// div.className='Nombre De la clase a agrewgarle a ese div o elemento que se desee';


// botonLogin.addEventListener("click",()=>{
//   console.log("Chorizo");
// })

// botonLogin.onclick =()=>{
//   console.log('chorizo');
// }


iniciarPrograma();
