
//----------------------------------------------------------------------------------------
//CALCULADORA-----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

function calculadoraControlada(){
    let num1=document.getElementById('numero1Calculadora');
    let operador=document.getElementById('operadorCalculadora');
    let num2=document.getElementById('numero2Calculadora');
    const mensaje=document.getElementById('resultadoCalculadora');
    if (num1.value!=''&&num2.value!=''&&operador!=''){
      if (operador.value=='/' && parseFloat(num2.value)==0){
        mensaje.innerText='No está definida la división por 0';
      }
      else{
        mensaje.innerText='El valor de su operación es: '+calculadora(parseFloat(num1.value),parseFloat(num2.value),operador.value);
      }
    }else{
        mensaje.innerText='Debe ingresar los 3 valores para operar';
    }

  }
  
  function calculadora(num1,num2,operador){
    switch (operador){
      case '+':
        return num1+num2;
        break;
      case '-':
        return num1-num2;
        break;
      case '*':
        return num1*num2;
        break;
      case '/':
        return num1/num2;
        break;
    }
  }
function llamarCalculadora(){
    let botonCalculadora=document.getElementById('btnCalculadora');
    botonCalculadora.addEventListener('click',(e)=>{
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
    let concatenados='';
    let contadorPrimos=0;
    let j=0;
    const mensaje=document.getElementById('resultadosPrimos');
    for (let i=0; i!=n;i++){
      while(contadorPrimos!=n){
        if (esPrimo(j)){
          contadorPrimos++;
          concatenados=concatenados+' '+j;
        }
        j++;
      }
    }
    mensaje.innerText=concatenados;
}
  
function numerosPrimos(){
    const mensaje=document.getElementById('resultadosPrimos');
    let inputPrimos = document.getElementById('numerosPrimosn');
    if (inputPrimos.value!=''){
      let n=parseInt(inputPrimos.value);
      listarNumerosPrimos(n);
    }else{
      mensaje.innerText='Ingrese un valor valido';
    }
}

function llamarNumerosPrimos(){
    let botonPrimos=document.getElementById('btnPrimos');
    botonPrimos.addEventListener('click',(e)=>{
        e.preventDefault();
        numerosPrimos();
    })
}



//----------------------------------------------------------------------------------------
//ÁREA CIRCULO----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function areaYPerimetroCirculo(){
  const mensaje=document.getElementById('resultadoAyPCirculo');
    let radio=parseFloat(document.getElementById('radioCirculo').value);
    if (radio>0){
    let unidad=document.getElementById('unidadCirculo').value;
    mensaje.innerText='El area de la circunferencia es: '+areaCirculo(radio).toFixed(3)+' '+unidad+'²\nEl perímetro de la circunferencia es: '+perimetroCirculo(radio).toFixed(3)+' '+unidad;
    }
    else{
      mensaje.innerText='Ingrese un NUMERO mayor que 0';
    }
}
  
function areaCirculo(radio){
    return Math.pow(radio,2)*Math.PI;
}
  
function perimetroCirculo(radio){
    return 2*Math.PI*radio
}

function llamarAyPCirculo(){
    let botonCircunferencia=document.getElementById('btnCircunferencia');
    botonCircunferencia.addEventListener('click',(e)=>{
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
    const mensaje=document.getElementById('resultado2Puntos');
    x1=document.getElementById('x1Punto');
    y1=document.getElementById('y1Punto');
    x2=document.getElementById('x2Punto');
    y2=document.getElementById('y2Punto');
    if (x1.value!=''&&x2.value!=''&&y1.value!=''&&y2.value!=''){
      const punto1=new Punto(x1.value,y1.value);
      const punto2=new Punto(x2.value,y2.value);
      resultado=calculoDistancia2Puntos(punto1,punto2);
      mensaje.innerText=resultado;
    }else{
      mensaje.innerText='Ingrese todos los valores primero';
    }

  }

function llamarDistancia2Puntos(){
    let botonDistancia2Puntos=document.getElementById('btnDistancia2Puntos');
    botonDistancia2Puntos.addEventListener('click',(e)=>{
        e.preventDefault();
        distancia2Puntos();
    })
}



//----------------------------------------------------------------------------------------
//Productoria, mayor, menor y promedio con array------------------------------------------
//----------------------------------------------------------------------------------------
const mensajeProductoria=document.getElementById('resultadoProductoria');

function crearArray(){
  const arrayNumeros=[];
  const stringNumeros=document.getElementById('stringNumeros');
  if (stringNumeros.value!=''){
    const arrayAuxiliar=stringNumeros.value.split(' ');
    for (let i=0;i<arrayAuxiliar.length;i++){
      arrayNumeros.push(parseFloat(arrayAuxiliar[i]));
    }
    return arrayNumeros;
  }else{
    mensajeProductoria.innerText='El campo está vacio';
  }
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
  mensajeProductoria.innerText='El resultado de la productoria es: ' +calculoProductoria(arrayNumeros);
  mayorMenorPromedioArray(arrayNumeros);
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
  mensajeProductoria.innerText=mensajeProductoria.innerHTML+'\nEl mayor de los numeros ingresados es: ' + calcularMayorArray(arrayNumeros) + '\nEl menor de los numeros ingresados es: ' + calcularMenorArray(arrayNumeros) + '\nEl promedio de los numeros ingresados es: '+ calcularPromedioArray(arrayNumeros);
}

function llamarProductoria(){
  const botonProductoria=document.getElementById('btnProductoria');
  const stringNumeros=document.getElementById('stringNumeros');
  botonProductoria.addEventListener('click',(e)=>{
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
  const resultadoOrdenamiento=document.getElementById('resultadoOrdenamiento');
  const stringNumeros=document.getElementById('stringNumeros');
  const botonProductoria=document.getElementById('btnOrdenador');


  botonProductoria.addEventListener('click',(e)=>{
      e.preventDefault();
      if (stringNumeros.value!=''){
      let ordenadoSinComa='';
      const ordenadoConComa=ordenarArrayNumeros();
      for (let i=0;i<ordenarArrayNumeros().length;i++){
        if (i==0){
          ordenadoSinComa=ordenadoSinComa+(ordenadoConComa[i]);
        }else{
          ordenadoSinComa=ordenadoSinComa+' '+(ordenadoConComa[i]);
        }
      }
      document.getElementById('stringNumeros').value=ordenadoSinComa;
      resultadoOrdenamiento.innerText='Se han ordenado los numeros';
    }else{
      resultadoOrdenamiento.innerText='No hay elementos a ordenar';
    }
  })
}


//----------------------------------------------------------------------------------------
//Ingrese n numeros y que liste solo los mayores a x--------------------------------------
//----------------------------------------------------------------------------------------
function mayoresQueX(){
  const mensaje=document.getElementById('resultadoMayorQueX');
  const x=document.getElementById('inputX');

  x.addEventListener('click',()=>{
    mensaje.innerText='';
  })

  if (x.value!=''&&crearArray()!=undefined){
    const arrayNumeros=crearArray();
    const resultado=arrayNumeros.filter(item => item>parseFloat(x.value));
    const arrayConComa=([...resultado]);
    let arraySinComa='';
    for (let i=0;i<arrayConComa.length;i++){
      if (i==0){
        arraySinComa=arraySinComa+(arrayConComa[i]);
      }else{
        arraySinComa=arraySinComa+' '+(arrayConComa[i]);
      }
    }
    mensaje.innerText=arraySinComa;
  }else if (x.value==''&&crearArray()!=undefined){
    mensaje.innerText='Ingrese el valor de x';
  }else if (x.value!=''&&crearArray()==undefined){
    mensaje.innerText='';
  }

}



function llamarMayoresQueX(){
  let botonProductoria=document.getElementById('btnMayoresQueX');
  botonProductoria.addEventListener('click',(e)=>{
      e.preventDefault();
      mayoresQueX();
  })
}

//----------------------------------------------------------------------------------------
//Ingrese n numeros y que liste solo los menores a x--------------------------------------
//----------------------------------------------------------------------------------------
function menoresQueX(){
  const mensaje=document.getElementById('resultadoMenorQueX');
  const x=document.getElementById('inputX');

  x.addEventListener('click',()=>{
    mensaje.innerText='';
  })

  if (x.value!=''&&crearArray()!=undefined){
    const arrayNumeros=crearArray();
    const resultado=arrayNumeros.filter(item => item<parseFloat(x.value));
    const arrayConComa=([...resultado]);
    let arraySinComa='';
    for (let i=0;i<arrayConComa.length;i++){
      if (i==0){
        arraySinComa=arraySinComa+(arrayConComa[i]);
      }else{
        arraySinComa=arraySinComa+' '+(arrayConComa[i]);
      }
    }
    mensaje.innerText=arraySinComa;
  }else if (x.value==''&&crearArray()!=undefined){
    mensaje.innerText='Ingrese el valor de x';
  }else if (x.value!=''&&crearArray()==undefined){
    mensaje.innerText='';
  }

}



function llamarMenoresQueX(){
  let botonProductoria=document.getElementById('btnMenorQueX');
  botonProductoria.addEventListener('click',(e)=>{
      e.preventDefault();
      menoresQueX();
  })
}
//----------------------------------------------------------------------------------------
//Ingrese n numeros, encuentre el numero que desea en que posición está------------------- (busqueda)
//----------------------------------------------------------------------------------------
function buscarPosNunmero(){
  const mensaje=document.getElementById('resultadoPosX');
  const x = document.getElementById('inputX');
  inputX.addEventListener('click',()=>{
    mensaje.innerText='';
  })
  if (x.value!=''&&crearArray()!=undefined){
    const arrayNumeros=crearArray();
    if (arrayNumeros.indexOf(parseFloat(x.value))==-1){
      mensaje.innerText='No existe en el array';
    }else{
      mensaje.innerText='Se encuentra en la posición: '+(arrayNumeros.indexOf(parseFloat(x.value))+1);
    }
  }else if (x.value==''&&crearArray()!=undefined){
    mensaje.innerText='Ingrese el valor de x';
  }

}

function llamarBuscarPosNumero(){
  let botonProductoria=document.getElementById('btnBuscarPosX');
  botonProductoria.addEventListener('click',(e)=>{
      e.preventDefault();
      buscarPosNunmero();
  })
}

function borrarAlTocar(){
  //CALCULADORA
  const numero1Calculadora=document.getElementById('numero1Calculadora');
  const operadorCalculadora=document.getElementById('operadorCalculadora');
  const numero2Calculadora=document.getElementById('numero2Calculadora');
  //NUMEROS PRIMOS
  const inputPrimos=document.getElementById('numerosPrimosn');
  const mensajeResultadoPrimos=document.getElementById('resultadosPrimos');
  //AyP DE UN CIRCULO
  const inputCirculoRadio=document.getElementById('radioCirculo');
  const inputCirculoMedida=document.getElementById('unidadCirculo');
  const mensajeCirculo=document.getElementById('resultadoAyPCirculo');
  //DISTANCIA 2 PUNTOS
  const inputDosPuntosX1=document.getElementById('x1Punto');
  const inputDosPuntosY1=document.getElementById('y1Punto');
  const inputDosPuntosX2=document.getElementById('x2Punto');
  const inputDosPuntosY2=document.getElementById('y2Punto');
  const mensaje2Puntos=document.getElementById('resultado2Puntos');

  //MAYOR,MENOR,PROMEDIO,POS
  const mensajeResultadoCalculadora=document.getElementById('resultadoCalculadora');
  const stringNumeros=document.getElementById('stringNumeros');
  const resultadoOrdenamiento=document.getElementById('resultadoOrdenamiento');
  const mensajeMayorQueX=document.getElementById('resultadoMayorQueX');
  const mensajeMenorQueX=document.getElementById('resultadoMenorQueX');
  const mensajePosX=document.getElementById('resultadoPosX');

  //EVENT LISTENERS
  //CALCULADORA
  numero1Calculadora.addEventListener('click',()=>{
    mensajeResultadoCalculadora.innerText='';
  })
  operadorCalculadora.addEventListener('click',()=>{
    mensajeResultadoCalculadora.innerText='';
  })
  numero2Calculadora.addEventListener('click',()=>{
    mensajeResultadoCalculadora.innerText='';
  })

  //NUMEROS PRIMOS
  inputPrimos.addEventListener('click',()=>{
    mensajeResultadoPrimos.innerText='';
  })

  //AyP DE UN CIRCULO
  inputCirculoRadio.addEventListener('click',()=>{
    mensajeCirculo.innerText='';
  })
  inputCirculoMedida.addEventListener('click',()=>{
    mensajeCirculo.innerText='';
  })

  //DISTANCIA 2 PUNTOS
  inputDosPuntosX1.addEventListener('click',()=>{
    mensaje2Puntos.innerText='';
  })
  inputDosPuntosY1.addEventListener('click',()=>{
    mensaje2Puntos.innerText='';
  })
  inputDosPuntosX2.addEventListener('click',()=>{
    mensaje2Puntos.innerText='';
  })
  inputDosPuntosY2.addEventListener('click',()=>{
    mensaje2Puntos.innerText='';
  })

  //MAYOR,MENOR,PROMEDIO,POS
  stringNumeros.addEventListener('click',()=>{
    mensajeProductoria.innerText='';
  })
  stringNumeros.addEventListener('click',()=>{
    resultadoOrdenamiento.innerText='';
  })
  stringNumeros.addEventListener('click',()=>{
    mensajeMayorQueX.innerText='';
  })
  stringNumeros.addEventListener('click',()=>{
    mensajeMenorQueX.innerText='';
  })
  stringNumeros.addEventListener('click',()=>{
    mensajePosX.innerText='';
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
borrarAlTocar();
