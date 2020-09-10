
/*
Mostrar mensajes a los usuarios       
El metodo alert("")
console.log-mostrar mensajes de usuario
imprimir en pantalla document.write()
 */
//alert('Hola desde Javascript')
//console.log("Este es un mensaje que se muestra en la consola")
//document.write('Hola desde html')
//prompt("ingresa nombre")

/*function sumarDiezedad(){
    let edad=prompt("Ingrese su edad")
    let nuevaedad = parseInt(edad)+10;
   alert('Esta es su edad ' +nuevaedad)
}
sumarDiezedad()*/

function sumarNumeros(){
    let num1 =parseInt(prompt("Ingresa el primer número"))
    let num2 =parseInt(prompt("Ingresa el segundo número"))

    let resultado= num1+num2
    alert("La suma de los numeros es: "+ resultado)

}
//sumarNumeros()
function cambiarMensaje(idDiv){
    let mensaje=prompt('Escribe tu mensaje')
    document.getElementById(idDiv).innerHTML=mensaje
    
}
