
function addBorder(){
    let borderOn='2px solid rgb(255, 0, 0)';
    let borderOff='0px none rgb(0, 0, 0)';
    let border = document.getElementById("img-xbox");
    let elementStyle = window.getComputedStyle(border);
    let outputImagen= document.getElementById('img-xbox');

    if (elementStyle.border==borderOff ) {
        outputImagen.style.border=borderOn;
    } else {
        outputImagen.style.border=borderOff;
    }
}

function cuentaStickers(){
    let sumaSticker=0;
  
    let inputGo= Number(document.getElementById('go-cantidad').value);
    let inputC= Number(document.getElementById('c-cantidad').value);
    let inputJava= Number(document.getElementById('java-cantidad').value);
    let ouputTexto= document.getElementById('texto-cantidad');
    ouputTexto.innerHTML='';  

    if (inputGo <0 || inputC<0 || inputJava<0 ){
        ouputTexto.innerHTML='Debe de ingresar valores positivos';
        return
    }

    sumaSticker=inputGo + inputC+ inputJava
    if(sumaSticker>10) {
        ouputTexto.innerHTML='Llevas demasiados stickers';   
    }else{
        ouputTexto.innerHTML='Llevas ' + sumaSticker + ' stickers';  
    }
}

function validaPassword(){
    const select1= document.getElementById('go-cantidad').value;

    switch (clave) {
        case "911":
          document.getElementById("mensaje").textContent = "password 1 correcto";
          break;
        case "714":
          document.getElementById("mensaje").textContent = "password 2 correcto";
          break;
        default:
          document.getElementById("mensaje").textContent = "password incorrecto";
          break;
      }
}