
//----------------------------------------------------------------------------------------
//CALCULADORA-----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

function calculadoraControlada(){
    let num1=parseFloat(document.getElementById("numero1Calculadora").value);
    let operador=document.getElementById("operadorCalculadora").value;
    let num2=parseFloat(document.getElementById("numero2Calculadora").value);
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
function llamarCalculadora(){
    let botonCalculadora=document.getElementById("btnCalculadora");
    botonCalculadora.addEventListener("click",(e)=>{
        e.preventDefault();
        calculadoraControlada();
    })
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
    let n = parseInt(document.getElementById("numerosPrimosn").value);
    listarNumerosPrimos(n);
}

function llamarNumerosPrimos(){
    let botonPrimos=document.getElementById("btnPrimos");
    botonPrimos.addEventListener("click",(e)=>{
        e.preventDefault();
        numerosPrimos();
    })
}



//----------------------------------------------------------------------------------------
//ÁREA CIRCULO----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function areaYPerimetroCirculo(){
    let radio=parseFloat(document.getElementById("radioCirculo").value);
    if (radio>0){
    let unidad=document.getElementById("unidadCirculo").value;
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

function llamarAyPCirculo(){
    let botonCircunferencia=document.getElementById("btnCircunferencia");
    botonCircunferencia.addEventListener("click",(e)=>{
        e.preventDefault();
        areaYPerimetroCirculo();
    })
}


//----------------------------------------------------------------------------------------
//Distancia entre 2 puntos----------------------------------------------------------------
//----------------------------------------------------------------------------------------
function Punto(x,y){
    this.x=x;
    this.y=y;
  }
  function calculoDistancia2Puntos(punto1, punto2){
    return Math.sqrt(Math.pow((punto2.x-punto1.x),2)+Math.pow((punto2.y-punto1.y),2))
  }
  
  function distancia2Puntos(){
    x1=document.getElementById("x1Punto").value;
    y1=document.getElementById("y1Punto").value;
    x2=document.getElementById("x2Punto").value;
    y2=document.getElementById("y2Punto").value;
    const punto1=new Punto(x1,y1);
    const punto2=new Punto(x2,y2);
    resultado=calculoDistancia2Puntos(punto1,punto2);
    alert(resultado);
  }

function llamarDistancia2Puntos(){
    let botonDistancia2Puntos=document.getElementById("btnDistancia2Puntos");
    botonDistancia2Puntos.addEventListener("click",(e)=>{
        e.preventDefault();
        distancia2Puntos();
    })
}



//----------------------------------------------------------------------------------------
//Productoria, mayor, menor y promedio con array------------------------------------------
//----------------------------------------------------------------------------------------

function crearArray(){
  const arrayNumeros=[];
  let stringNumeros=document.getElementById("stringNumeros").value;
  const arrayAuxiliar=stringNumeros.split(' ');
  for (let i=0;i<arrayAuxiliar.length;i++){
    arrayNumeros.push(parseFloat(arrayAuxiliar[i]));
  }
  return arrayNumeros;
}

function calculoProductoria(arrayNumeros){
  let productoria=1;
  for (let i = 0; i<arrayNumeros.length; i++){
    productoria=productoria*arrayNumeros[i];
  }
  return productoria;
}

function productoriaMayorMenorPromArray(){
  const arrayNumeros=crearArray();
  console.log("El resultado de la productoria es: "+calculoProductoria(arrayNumeros));
  mayorMenorPromedioArray(arrayNumeros);
  console.log(arrayNumeros);
}


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
  console.log("El mayor de los numeros ingresados es: "+ calcularMayorArray(arrayNumeros));
  console.log("El menor de los numeros ingresados es: " + calcularMenorArray(arrayNumeros));
  console.log("El promedio de los numeros ingresados es: "+ calcularPromedioArray(arrayNumeros));
}

function llamarProductoria(){
  let botonProductoria=document.getElementById("btnProductoria");
  botonProductoria.addEventListener("click",(e)=>{
      e.preventDefault();
      productoriaMayorMenorPromArray();
  })
}


//----------------------------------------------------------------------------------------
//Ingrese n numeros en cualquier orden y que se listen ordenados--------------------------
//----------------------------------------------------------------------------------------

function ordenarArrayNumeros(){
  const arrayNumeros=crearArray();
  const arrayNumerosOrdenado=arrayNumeros.sort((x,y)=>x>y ? 1 : -1)
  return arrayNumerosOrdenado;
}

function llamarOrdenador(){
  let botonProductoria=document.getElementById("btnOrdenador");
  botonProductoria.addEventListener("click",(e)=>{
      e.preventDefault();
      let ordenadoSinComa='';
      const ordenadoConComa=ordenarArrayNumeros();
      for (let i=0;i<ordenarArrayNumeros().length;i++){
        if (i==0){
          ordenadoSinComa=ordenadoSinComa+(ordenadoConComa[i]);
        }else{
          ordenadoSinComa=ordenadoSinComa+' '+(ordenadoConComa[i]);
        }
      }
      document.getElementById("stringNumeros").value=ordenadoSinComa;
  })
}

//----------------------------------------------------------------------------------------
//Ingrese n numeros y que liste solo los mayores a x--------------------------------------
//----------------------------------------------------------------------------------------
function mayoresQueX(){
  let x=parseFloat(document.getElementById("inputMayoresQueX").value);
  const arrayNumeros=crearArray();
  const resultado=arrayNumeros.filter(item => item>x);
  const arrayConComa=([...resultado]);
  let arraySinComa='';
  for (let i=0;i<arrayConComa.length;i++){
    if (i==0){
      arraySinComa=arraySinComa+(arrayConComa[i]);
    }else{
      arraySinComa=arraySinComa+' '+(arrayConComa[i]);
    }
  }
  document.getElementById("stringNumeros").value=arraySinComa;
}



function llamarMayoresQueX(){
  let botonProductoria=document.getElementById("btnMayoresQueX");
  botonProductoria.addEventListener("click",(e)=>{
      e.preventDefault();
      mayoresQueX();
  })
}

//----------------------------------------------------------------------------------------
//Ingrese n numeros y que liste solo los menores a x--------------------------------------
//----------------------------------------------------------------------------------------
function menoresQueX(){
  let x=parseFloat(document.getElementById("inputMayoresQueX").value);
  const arrayNumeros=crearArray();
  const resultado=arrayNumeros.filter(item => item<x);
  const arrayConComa=([...resultado]);
  let arraySinComa='';
  for (let i=0;i<arrayConComa.length;i++){
    if (i==0){
      arraySinComa=arraySinComa+(arrayConComa[i]);
    }else{
      arraySinComa=arraySinComa+' '+(arrayConComa[i]);
    }
  }
  document.getElementById("stringNumeros").value=arraySinComa;
}



function llamarMenoresQueX(){
  let botonProductoria=document.getElementById("btnMenorQueX");
  botonProductoria.addEventListener("click",(e)=>{
      e.preventDefault();
      menoresQueX();
  })
}
//----------------------------------------------------------------------------------------
//Ingrese n numeros, encuentre el numero que desea en que posición está------------------- (busqueda)
//----------------------------------------------------------------------------------------
function buscarPosNunmero(){
  const arrayNumeros=crearArray();
  let x = parseFloat(document.getElementById("inputMayoresQueX").value);
  if (arrayNumeros.indexOf(x)==-1){
    alert("No se encuentra en el array");
  }else{
    alert(arrayNumeros.indexOf(x));
  }
}

function llamarBuscarPosNumero(){
  let botonProductoria=document.getElementById("btnBuscarPosX");
  botonProductoria.addEventListener("click",(e)=>{
      e.preventDefault();
      buscarPosNunmero();
  })
}



//----------------------------------------------------------------------------------------
//Llamado a las funciones-----------------------------------------------------------------
//----------------------------------------------------------------------------------------


llamarCalculadora();
llamarNumerosPrimos();
llamarAyPCirculo();
llamarDistancia2Puntos();
llamarProductoria();
llamarOrdenador();
llamarMayoresQueX();
llamarMenoresQueX();
llamarBuscarPosNumero();