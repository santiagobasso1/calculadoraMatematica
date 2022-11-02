async function cargadoBotones(botonElegido){
    const response=await fetch('../jsons/formulas.json');
    const datos=await response.json();

    const contenedorMain=document.getElementById('main');
    contenedorMain.innerHTML=``;

    datos.forEach((formula)=>{
        let divContenedor = document.createElement('div');
        divContenedor.className='centrarBotonesFormulas'
        divContenedor.innerHTML = `
        <button id="${formula.boton}">${formula.nombre}</button>
        `;
        contenedorMain.append(divContenedor);
        const button = document.getElementById(formula.boton);
        button.addEventListener('click',()=>{
            formulasFuncionamiento(formula.id); 
        })
    });
}

cargadoBotones();

async function formulasFuncionamiento(botonElegido){
    const response=await fetch('../jsons/formulas.json')
    const datos=await response.json()
    Swal.fire({
        title: datos[botonElegido].nombre,
        text: datos[botonElegido].descripcion,
        imageUrl: datos[botonElegido].imagen,
        imageWidth: datos[botonElegido].ancho,
        imageHeight: datos[botonElegido].alto,
        imageAlt: datos[botonElegido].altImg,
      });
}


