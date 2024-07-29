function sumar(a, b){
    return a+b
}

const inputUno = document.querySelector('#inputUno');
const inputDos = document.querySelector('#inputDos');
const botonCalc = document.querySelector('#btnSumar');
const result = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', clicBtn);
botonCalc.addEventListener('onmouseover', overMouse);

function clicBtn(){
    event.preventDefault();
    const sumadatos = sumar(Number(inputUno.value), Number(inputDos.value));
    result.textContent = sumadatos;
}

function overMouse(){
    event.preventDefault();
    botonCalc.textContent = 'Sumando...';
    console.log('Sumando...');
}