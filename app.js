/*Este app sera para encriptar y desencriptar un texto
se tienen varias condiciones a cumplir:
Las "llaves" de encriptación que se utilizan 
                        son las siguientes:

                        La letra "e" es convertida para "enter"
                        La letra "i" es convertida para "imes"
                        La letra "a" es convertida para "ai"
                        La letra "o" es convertida para "ober"
                        La letra "u" es convertida para "ufat"

                        Requisitos:
                        Debe funcionar solo con letras minúsculas
                        No deben ser utilizados letras con acentos 
                        ni caracteres especiales
                        Debe ser posible convertir una palabra para la versión encriptada
                        también devolver una palabra encriptada para su versión original.*/
const textoSecreto = document.querySelector("#textoencriptado");
const textoMensaje = document.querySelector("#textoMensaje");
                        
// Función para enviar el mensaje al servidor
function enviarMensaje() {
//Obtener el valor del input
    let mensaje = textoMensaje.value;
    //Validar si está vacío o no tiene solo espacios    
        if (mensaje.trim().length === 0) {
            alert("El campo debe estar lleno.");
        } else {
//Convertir todo a minúsculas
            mensaje = mensaje.toLowerCase();
//Imprimirlo en pantalla
            imprimirResultado(mensaje);
                              
// Función que muestra los resultados 
function imprimirResultado(valor){
    let parrafo = document.createElement("P");
    parrafo.innerText = "Tu mensaje es:\n" + valor ;
    textoSecreto.appendChild(parrafo);
    }
    }
}                    

document.querySelector('#botonenviar').addEventListener('click', enviarMensaje);
                       
// Función para mostrar la respuesta 
function mostrarRespuestaServidor(datos){
    let codigo = datos.codigo;
    let mensaje = datos.mensaje;
    let parrafo = document.createElement("P");
    parrafo.setAttribute("id", "respuestaServidor");
                            
        if (codigo ==  200) {
            parrafo.classList.add("exito"); 
            parrafo.innerText = "El mensaje ha sido enviado correctamente.\n\nMensaje recibido por el servidor:\n";
        } else {
            parrafo.classList.add("error");  
            parrafo.innerText = "Ocurrió un error.\n";
            }
            parrafo.innerText += mensaje;
            textoSecreto.appendChild(parrafo);  
                        
// Boton limpiar campo de texto y ocultar el resultado anterior
        let btnLimpiar = document.createElement("INPUT");
        btnLimpiar.setAttribute("type","button");
        btnLimpiar.setAttribute("value","Limpiar");
        btnLimpiar.className = "botonlimpiar";
        btnLimpiar.addEventListener("click", function(){
        location.reload();
        })
        textoSecreto.appendChild(btnLimpiar);   
    }
                        
// Función para verificar si el texto cumple las condiciones
function verificarTexto(texto) {
    let tieneMayusculas = /[A-Z]/.test(texto);
    let tieneEspeciales = /[^a-zA-Z0-9]/.test(texto);
        if (tieneMayusculas || tieneEspeciales){
            return true;
        } else {
            console.log("La cadena no contiene mayúsculas ni caracteres especiales.");
            return false;
    }
}                       
// Función que cambia las vocales por los valores indicados
function textoEncriptado(textoSecreto){
    return textoSecreto.replace(/e/g, "enter")
                       .replace(/i/g, "imes")
                       .replace(/a/g, "ai")
                       .replace(/o/g, "ober")
                       .replace(/u/g, "ufat");
} 
                            
// Proceso inverso
function recuperarTexto(textoEncriptado){
    return textoEncriptado.replace(/ufat/g, "u")
                          .replace(/ober/g, "o")
                          .replace(/ai/g, "a")
                          .replace(/imes/g, "i")
                          .replace(/enter/g, "e");
}
                          
// Función para copiar texto al portapapeles
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado al portapapeles!");
    });
}
                        
// Agregar eventos a los botones
document.querySelector("#btnEncriptar").addEventListener("click", () => {
    const textoEncriptado = textoEncriptado(textoSecreto.value);
    textoMensaje.value = textoEncriptado;
});
                          
document.querySelector("#btnDesEncriptar").addEventListener("click", () => {
    const textoDesencriptado = recuperarTexto(textoSecreto.value);
    textoMensaje.value = textoDesencriptado;
});
                          
document.querySelector("#btnCopiar").addEventListener("click", () => {
    copiarTexto(textoSecreto.value);
});
                        
// Función para verificar si el texto solo tiene letras minúsculas
function validarTexto(texto) {
    return !/[A-Z]/.test(texto);
}
                        
// Función para limpiar el campo de texto
function limpiarCaja(){
    document.querySelector('#textoMensaje').value ='';
}
                      
verificarTexto(textoSecreto)     // Verificación del texto al cargar la página
limpiarCaja()   // Limpieza de la caja de mensajes al cargar la página