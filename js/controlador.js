//cargar anios al select

const max = new Date().getFullYear();
const min = max - 25;

const selectAnio = document.querySelector('#anio');

for (let i = max; i > min; i--) {
    
    let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectAnio.appendChild(option);
    
}

// leer formulario

const btnCotizar = document.getElementById('formulario').addEventListener('submit', cotizar);


function cotizar(e){
    e.preventDefault();
    const modelo = document.getElementById('modelo').value;
    const anio = selectAnio.value;
    const tipo = document.querySelector('input[name = "tipo"]:checked').value;
    const interfaz = new Interfaz();

    if ((modelo == '--Selecciona--') || (anio == '--Selecciona--')) {
        interfaz.error( 'error');
    } else {
        const seguro = new Seguro(modelo,anio,tipo);

        const cantidad = seguro.calcularMonto(seguro);
        interfaz.imprimirCotizacion(seguro,cantidad);
        
    }
    
          
}

