import cipher from './cipher.js';
//PÁGINAS PRINCIPALES CON LA FUNCIÓN DE OCULTAR Y MOSTRAR
document.getElementById('pag1').style.display='block';
document.getElementById('pag2').style.display='none';

//INDICACIÓN DE QUE AL MOMENTO DE CLICKEAR COMENZAR LA PÁGINA UNO DESAPAREZCA
let comenzar=document.getElementById('comenzar');
comenzar.addEventListener('click', pagina2);
function pagina2(){
    document.getElementById('pag1').style.display='none';
    document.getElementById('pag2').style.display='block';
}
//INDICAIÓN PARA VOLVER A LA PÁGINA 1 PRESIONANDO EL LOGO
let PaginaInicio=document.getElementById('logo');
PaginaInicio.addEventListener('click', volver);
function volver(){
   document.getElementById('pag1').style.display='block';
   document.getElementById('pag2').style.display='none';
}
//LLAMAR FUNCIONES CIFRAR, DESCIFRAR Y RESULTADO, Y UNIENDOLO CON CIPHER.JS
document.getElementById('cifrar').addEventListener('click', () => {
    let string = document.getElementById('mensaje').value;
    let offset = document.getElementById('desplazar').value;
    document.getElementById('resultado').value = cipher.encode(offset, string);
    console.log(cipher.encode(offset, string));
})

document.getElementById('descifrar').addEventListener('click', () => {
    let string = document.getElementById('mensaje').value;
    let offset = document.getElementById('desplazar').value;
    document.getElementById('resultado').value = cipher.decode(offset, string);
   
})

document.getElementById('resultado').addEventListener(('click'), () => {
  let string = document.getElementById('mensaje').value;
  let offset = document.getElementById('desplazar').value;
  document.getElementById('resultado').value = cipher(offset, string);
})

console.log(cipher);