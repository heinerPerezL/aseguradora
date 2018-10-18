class Seguro{
    constructor(modelo,anio,tipo){

        this.modelo = modelo;
        this.anio = anio;
        this.tipo = tipo;
    }

    calcularMonto(infoSeguro){
        /* americano = 1.15
           asiatico = 1.05
           europeo = 1.35
           */
          

           const montoBase = 2000;
           let cantidad;
           let modelo = infoSeguro.modelo;

           switch (modelo) {
               case 'Americano':
                   cantidad = montoBase * 1.15;
                   break;
               case 'Asiático':
                   cantidad = montoBase * 1.05;
                   break;
               case 'Europeo':
                   cantidad = montoBase * 1.35;
                   break;
           
               default:
                   break;

           }

           //calcular diferencia de los anios, se le resta le diferencia por un 3%

           let anioSeleccionado = infoSeguro.anio;
           let diferenciaAnio = new Date().getFullYear() - anioSeleccionado;

           cantidad -= ((diferenciaAnio*3) * cantidad) / 100;

           //calcular segun el tipo de seguro

           let tipo = infoSeguro.tipo;

           switch (tipo) {
               case 'Básico':
                    cantidad += cantidad * 0.30;
                   break;
               case 'Completo':
                    cantidad += cantidad * 0.50;
                   break;
           
               default:
                   break;
           }



           return(cantidad);
    }

    
}

class Interfaz{

    error(tipo){
        let div = document.getElementById('div-mensaje');
        

            if (tipo == 'error') {
                div.classList.add('block');
                div.classList.remove('none');

            }

            setTimeout(function(){

                div.classList.remove('block');
                div.classList.add('none');

 
            },3000);


    }

    imprimirCotizacion(pseguro,pcantidad){
       
      const divResultado = document.querySelector('.resultado');
      divResultado.innerHTML= `El automóvil modelo  ${pseguro.modelo},
                               año ${pseguro.anio}, paga un total de ${pcantidad} dólares por
                               el seguro de tipo ${pseguro.tipo}. `;

      const img = document.querySelector('.img');                         

      if (pseguro) {
          img.classList.remove('none');
        divResultado.classList.add('none');

      }  
      
      setTimeout(function(){
        img.classList.add('none');
        divResultado.classList.remove('none');
        
      },3000)


    }

}