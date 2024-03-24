function verificarMensaje (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù1234567890']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales o numeros ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}


let btnEncriptar = document.querySelector("#btnEncriptar");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (verificarMensaje (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})


const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let encriptar = "";
    for (const obj in reglas) {
        encriptar = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = encriptar;        
    }
    return (encriptar);
}


let btnCopiar = document.querySelector("#btnCopiar");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";

});

let btnDesEncriptar = document.querySelector("#btnDesEncriptar");

btnDesEncriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#input-texto").value;
    let Desencriptado = desEncriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
})



function desEncriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}