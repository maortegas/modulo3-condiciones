let borderFlag=false;

function addBorder(){
  
    let inputImagen= document.getElementById('img-xbox')
    if (borderFlag==false) {
        inputImagen.style.border="solid 2px";
        inputImagen.style.borderColor="red";
        borderFlag=true;
    } else {
        inputImagen.style.border="none";
        borderFlag=false;
    }
}
