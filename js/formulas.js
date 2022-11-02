async function formulas(botonElegido){
    const response=await fetch('../jsons/formulas.json')
    const datos=await response.json()
    Swal.fire({
        title: datos[botonElegido].nombre,
        text: datos[botonElegido].descripcion,
        imageUrl: datos[botonElegido].imagen,
        imageWidth: datos[botonElegido].ancho,
        imageHeight: datos[botonElegido].alto,
        imageAlt: datos[botonElegido].altImg,
      })
}

const btnResolvente = document.getElementById('btnFormulaResolvente');
btnResolvente.addEventListener('click',()=>{
    formulas(0); 
});

const btnPitagoras = document.getElementById('btnFormulaPitagoras');
btnPitagoras.addEventListener('click',()=>{
    formulas(1); 
});

const btnEuler = document.getElementById('btnFormulaEuler');
btnEuler.addEventListener('click',()=>{
    formulas(2); 
});

const btnAritmeticas = document.getElementById('btnFormulasAritmeticas');
btnAritmeticas.addEventListener('click',()=>{
    formulas(3); 
});

const btnExponentes = document.getElementById('btnFormulasExponentes');
btnExponentes.addEventListener('click',()=>{
    formulas(4); 
});

const btnBasicasCociente = document.getElementById('btnFormulasBasicasCociente');
btnBasicasCociente.addEventListener('click',()=>{
    formulas(5); 
});

const btnRadicales = document.getElementById('btnFormulasRadicales');
btnRadicales.addEventListener('click',()=>{
    formulas(6); 
});

const btnVA = document.getElementById('btnFormulasVA');
btnVA.addEventListener('click',()=>{
    formulas(7); 
});

const btnProductosNotables = document.getElementById('btnFormulasProductosNotables');
btnProductosNotables.addEventListener('click',()=>{
    formulas(8); 
});

const btnFormulasLogaritmos = document.getElementById('btnFormulasLogaritmos');
btnFormulasLogaritmos.addEventListener('click',()=>{
    formulas(9); 
});

const btnFactorizacion = document.getElementById('btnFormulasFactorizacion');
btnFactorizacion.addEventListener('click',()=>{
    formulas(10); 
});




