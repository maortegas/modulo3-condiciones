
function addBorder(){
    const borderOn='2px solid rgb(255, 0, 0)';
    const borderOff='0px none rgb(33, 37, 41)';
    const border = document.getElementById("img-xbox");
    let elementStyle = window.getComputedStyle(border);

    if (elementStyle.border==borderOff ) {
        border.style.border=borderOn;
    } else {
        border.style.border=borderOff;
    }
}

function cuentaStickers(){
    let sumaSticker=0;
  
    const inputGo= Number(document.getElementById('go-cantidad').value);
    const inputC= Number(document.getElementById('c-cantidad').value);
    const inputJava= Number(document.getElementById('java-cantidad').value);
    let ouputTexto= document.getElementById('texto-cantidad');

    if (inputGo <0 || inputC<0 || inputJava<0 ){
        ouputTexto.textContent='Debe de ingresar valores positivos';
        return
    }

    sumaSticker=inputGo + inputC+ inputJava
    if(sumaSticker>10) {
        ouputTexto.textContent='Llevas demasiados stickers';   
    }else{
        ouputTexto.textContent='Llevas ' + sumaSticker + ' stickers';  
    }
}

function validaPassword(){
    const select1= document.getElementById('select1').value;
    const select2= document.getElementById('select2').value;
    const select3= document.getElementById('select3').value;

    let pass=select1+select2+select3

    if (pass=='911'){
        document.getElementById("texto-password").textContent = "Password 1 correcto";
    }
    else if (pass=='714'){
        document.getElementById("texto-password").textContent = "Password 2 correcto";
    }else{
        document.getElementById("texto-password").textContent = "Password incorrecto";   
    }
}