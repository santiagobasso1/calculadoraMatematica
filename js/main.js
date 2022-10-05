const intentos=3;

//USUARIOS
const login1 ={
  nickname: "Santiago",
  password: "1234",
  rol: "Administrador",
}

const login2 ={
  nickname: "2",
  password: "1234",
  rol: "Usuario Basico",
}


function login(salida){
  let i=0;
  salida=false;
  for (let i=1 ; i<=intentos;i++){
    let usuario=prompt("Ingrese su usuario (Santiago para true)");
    let contrasenia=prompt("Ingrese su contraseña (1234 para true)");
    if ((usuario==(login1.nickname))&&(contrasenia==(login1.password))){ //No lo paso a uppercase porque ya que es un inicio de sesión debe ser igual hasta en las mayusculas
      alert("Buen dia "+ usuario + "ustede está en calidad de "+ login1.rol);
      salida=true;
      return salida;
      break;
    }else{
      alert("Ingrese un usuario valido, le quedan "+(intentos-i)+" intentos");

    }
    if (i==intentos){
      alert("Ha alcanzado el limite de intentos");
      window.close(); //Para que se cierre la pagina ya que intentó demasiado (solo para simular)
      return salida;
    }
  }
}

//----------------------------------------------------------------------------------------
//CALCULADORA-----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function calculadoraControlada(){
  let num1=parseFloat(prompt("Ingrese el primer valor"));
  let operador=prompt("Ingrese el operador (+,-,*,/)");
  let num2=parseFloat(prompt("Ingrese el segundo valor"));
  if (operador=="/" && num2==0){
    alert("No está definida la división por 0");
  }
  else{
  alert("El valor de su operación es: "+calculadora(num1,num2,operador));
  }
}



function calculadora(num1,num2,operador){
  switch (operador){
    case "+":
      return num1+num2;
      break;
    case "-":
      return num1-num2;
      break;
    case "*":
      return num1*num2;
      break;
    case "/":
      return num1/num2;
      break;
  }
}

//----------------------------------------------------------------------------------------
//NUMEROS PRIMOS--------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function esPrimo(numero){
  if (numero!=0){
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }
  else{
    return false;
  }
}

function listarNumerosPrimos(n){
  let concatenados="";
  let contadorPrimos=0;
  let j=0;
  for (let i=0; i!=n;i++){
    while(contadorPrimos!=n){
      if (esPrimo(j)){
        contadorPrimos++;
        concatenados=concatenados+" "+j;
      }
      j++;
    }
  }
  alert(concatenados);
}

function numerosPrimos(){
  let n = prompt("Ingrese cuantos numeros primos desea ver");
  listarNumerosPrimos(n);
}


//----------------------------------------------------------------------------------------
//ÁREA CIRCULO----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function areaYPerimetroCirculo(){
  let radio=parseFloat(prompt("Ingrese el radio de la circunferencia"));
  if (radio>0){
  let unidad=prompt("Ingrese la unidad de medida utilizada");
  alert("El area de la circunferencia es: "+areaCirculo(radio).toFixed(3)+" "+unidad+"²\nEl parímetro de la circunferencia es: "+perimetroCirculo(radio).toFixed(3)+" "+unidad);
  }
  else{
    alert("Ingrese un NUMERO mayor que 0");
  }
}

function areaCirculo(radio){
  return Math.pow(radio,2)*Math.PI;
}

function perimetroCirculo(radio){
  return 2*Math.PI*radio
}


//----------------------------------------------------------------------------------------
//Distancia entre 2 puntos----------------------------------------------------------------
//----------------------------------------------------------------------------------------
//Funcion constructora de puntos
function Punto(x,y){
  this.x=x;
  this.y=y;
}
function calculoDistancia2Puntos(punto1, punto2){
  return Math.sqrt(Math.pow((punto2.x-punto1.x),2)+Math.pow((punto2.y-punto1.y),2))
}

function distancia2Puntos(){
  x1=prompt("Ingrese el valor de x del punto 1");
  y1=prompt("Ingrese el valor de y del punto 1");
  x2=prompt("Ingrese el valor de x del punto 2");
  y2=prompt("Ingrese el valor de y del punto 2");
  const punto1=new Punto(x1,y1);
  const punto2=new Punto(x2,y2);
  resultado=calculoDistancia2Puntos(punto1,punto2);
  alert(resultado);
}


//----------------------------------------------------------------------------------------
//Productoria con array-------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function calculoProductoria(arrayNumeros){
  let productoria=1;
  for (let i = 0; i<arrayNumeros.length; i++){
    productoria=productoria*arrayNumeros[i];
  }
  return productoria;
}
function productoria(){
  const arrayNumeros=[];
  let ingreso=prompt("Ingrese un valor a multiplicar, para salir ingrese EXIT");
  while (ingreso.toUpperCase()!="EXIT") {
    if (!isNaN(ingreso) && !ingreso.toUpperCase()!="EXIT"){
      arrayNumeros.push(parseInt(ingreso));
    }
    else{
      alert("Ingrese solamente numeros");
    }
    ingreso=prompt("Ingrese un valor a multiplicar, para salir ingrese EXIT");
  }
  alert(calculoProductoria(arrayNumeros));
}




//----------------------------------------------------------------------------------------
//Menu------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

function menu(){
  let opcion = prompt("Ingrese la opcion que desea \n 1-Calculadora de 2 numeros \n 2-Cantidad n de numeros primos \n 3-Area y perímetro de un circulo \n 4-Calcular distancia entre 2 puntos \n 5-Ingresar n numeros y multiplicarlos entre si \n 0-Para salir esta ventana");
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
            productoria();
            break;  
        default:
            alert("Ingrese una opción valida")
            break;
    }
    opcion = prompt("Ingrese la opcion que desea \n 1-Calculadora de 2 numeros \n 2-Cantidad n de numeros primos \n 3-Area y perímetro de un circulo \n 0-para cerrar esta ventana");
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

menu();
























//OBJETOS
// const persona={
//   nombre:"Santiago",
//   apellido:"Basso",
//   edad:23,
// };

// function auto(modelo,marca,anio,color){
//   this.modelo = modelo;
//   this.marca = marca;
//   this.anio = anio;
//   this.color = color;
//   this.arrancar=function(){
//     console.log("Encendido");
//   }
// }

// const auto1 = new auto("golf","audi","2010","black"); 

// console.log(auto1);
// auto1.arrancar();


class Producto{
  constructor(nombre,precio,stock){
    this.nombre=nombre;
    this.precio=parseInt(precio);
    this.stock=stock;
    this.sumarIva= ()=>{
      this.precio=this.precio*1.21;
    }
  }
}
