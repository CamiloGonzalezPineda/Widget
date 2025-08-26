// Guardamos el icono en una variable para luego utilizarlo mas adelante
const moon = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-moon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644
                     -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758
                      -1.653h-.266l-.068 -.006l-.06 -.002z" />
            </svg> ` 
const headerr = document.querySelector('header') // Seleccionamos el header

const header = document.createElement('div') // Creamos un div para mostrar el icono
header.innerHTML = moon  // Se muestra el icono mendiante inerHtml
header.classList.add('dere') // Creamos unna clase 
headerr.appendChild(header) // Lo agregamos en el header 

// Selecionamos las clases para poderlas manejar mediante el DOM
const moom = document.querySelector('.icon') 
const main = document.querySelector('main') 
const noche = document.querySelector('.noche') 
const contenedor = document.querySelector('.contenedor') 
const bbl = document.querySelector('.bbl') 

// Creamos un evento de click para activar el modo Nocturno
moom.addEventListener('click',()=>{
    main.classList.toggle('noche') // Se agrega la clase mediante toggle
    header.classList.toggle('bbl')// Se agrega la clase mediante toggle
 

})