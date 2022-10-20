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

//----------------------------------------------------------------------------------------
//LOGIN-----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

function login(salida){
  let i=0;
  salida=false;
  for (let i=1 ; i<=intentos;i++){
    let usuario=prompt("Ingrese su usuario (Santiago para true)");
    let contrasenia=prompt("Ingrese su contraseña (1234 para true)");
    if ((usuario==(login1.nickname))&&(contrasenia==(login1.password))||(usuario==(login2.nickname))&&(contrasenia==(login2.password))){ //No lo paso a uppercase porque ya que es un inicio de sesión debe ser igual hasta en las mayusculas
      alert("Buen dia "+ usuario + " usted está en calidad de "+ login1.rol);
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
  alert("El area de la circunferencia es: "+areaCirculo(radio).toFixed(3)+" "+unidad+"²\nEl perímetro de la circunferencia es: "+perimetroCirculo(radio).toFixed(3)+" "+unidad);
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
//Funcion constructora de puntos (OBJETOS)
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
//Ceración array numeros------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function crearArray(){
  const arrayNumeros=[];
  let ingreso=prompt("Ingrese el primer numero, para salir ingrese EXIT");
  while (ingreso.toUpperCase()!="EXIT") {
    if (!isNaN(ingreso) && !ingreso.toUpperCase()!="EXIT"){
      arrayNumeros.push(parseInt(ingreso));
    }
    else{
      alert("Ingrese solamente numeros");
    }
    ingreso=prompt("Ingrese otro numero, para salir ingrese EXIT");
  }
  return arrayNumeros;
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
function productoriaMayorMenorPromArray(){
  const arrayNumeros=crearArray();
  alert("El resultado de la productoria es: "+calculoProductoria(arrayNumeros));
  mayorMenorPromedioArray(arrayNumeros);
}



//----------------------------------------------------------------------------------------
//Mayor menor promedio--------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function calcularMayorArray(arrayNumeros){
  let mayor=0;
  for (let i = 0; i<arrayNumeros.length; i++){
    if (arrayNumeros[i]>mayor){
      mayor=arrayNumeros[i];
    }
  }
  return mayor;
}

function calcularMenorArray(arrayNumeros){
  let menor=9000000000;
  for (let i = 0; i<arrayNumeros.length; i++){
    if (arrayNumeros[i]<menor){
      menor=arrayNumeros[i];
    }
  }
  return menor;
}

function calcularPromedioArray(arrayNumeros){
  let sumatoria=0;
  for (let i = 0; i<arrayNumeros.length; i++){
      sumatoria=sumatoria+arrayNumeros[i];
  }
  return sumatoria/arrayNumeros.length;
}

function mayorMenorPromedioArray(arrayNumeros){
  alert("El mayor de los numeros ingresados es: "+ calcularMayorArray(arrayNumeros));
  alert("El menor de los numeros ingresados es: " + calcularMenorArray(arrayNumeros));
  alert("El promedio de los numeros ingresados es: "+ calcularPromedioArray(arrayNumeros));
}
//----------------------------------------------------------------------------------------
//Ingrese n numeros en cualquier orden y que se listen ordenados--------------------------
//----------------------------------------------------------------------------------------
function ordenarArrayNumeros(){
  const arrayNumeros=crearArray();
  const arrayNumerosOrdenado=arrayNumeros.sort((x,y)=>x>y ? 1 : -1)
  alert(arrayNumerosOrdenado);
}

//----------------------------------------------------------------------------------------
//Ingrese n numeros y que liste solo los mayores a x--------------------------------------
//----------------------------------------------------------------------------------------
function mayoresQueX(){
  let x=10;
  const arrayNumeros=crearArray();
  const resultado=arrayNumeros.filter(item => item>x);
  if (resultado.length!=0) {
  alert("Los valores ingresados mayores a 10 son: "+resultado);
  }
  else{
    alert("Todos los valores ingresados son mejores o iguales a 10");
  }
}

//----------------------------------------------------------------------------------------
//Ingrese n numeros, encuentre el numero que desea en que posición está------------------- (busqueda)
//----------------------------------------------------------------------------------------
function buscarPosNunmero(){
  const arrayNumeros=crearArray();
  let x = parseInt(prompt("Ingrese el valor que desea saber su posición"));
  alert(arrayNumeros.indexOf(x));
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
const div = document.getElementById('1'),
ache1=document.getElementsByTagName('h1');

console.log(ache1[1]);

ache1[1].innerText='Chorizo';

// div.className='Nombre De la clase a agrewgarle a ese div o elemento que se desee';

