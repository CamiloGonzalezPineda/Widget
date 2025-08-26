const moon = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-moon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
            </svg> `
const headerr = document.querySelector('header')

const header = document.createElement('div')
header.innerHTML = moon
header.classList.add('dere')
headerr.appendChild(header)

const moom = document.querySelector('.icon') 
const main = document.querySelector('main') 
const noche = document.querySelector('.noche') 
const contenedor = document.querySelector('.contenedor') 
const bbl = document.querySelector('.bbl') 


moom.addEventListener('click',()=>{
    main.classList.toggle('noche')
    header.classList.toggle('bbl')

})