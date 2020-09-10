/**
 * Estructura de los nombres variables y funciones.
 * nombreVariable
 * nombre_variable
 */



/*function sumarDosNumero() {
    let numero1 = 2;
    let numero2 = 5;
}

document.getElementById('divTest').innerHTML = "Hola a todos"
swal("Hello world!");

*/




/**
 * La función permite mostrar un número.
 * La función hace el llamado a updateInput().
 * @param {*} data => Recibe los datos que se quieren mostrar.
 */
/*function printNumber(data) {
    updateInput(data.value);
}


function printOperator(data) {
    updateInput(` ${data.value} `);
}

function updateInput(newValue, clear = false) {
    var div = document.getElementById('data');
    div.value = clear ? newValue : `${div.value}${newValue}`;
}

function printOperation() {
    var data = document.getElementById('data').value;
    var result = validateOperator(data.split(' '));
    updateInput(result, true)
}

function validateOperator(arrayData) {
    var result;
    var number1 = Number(arrayData[0]);
    var number2 = Number(arrayData[2]);
    switch (arrayData[1]) {
        case '+':
            result = number1 + number2;
            break
        case '-':
            result = number1 - number2;
            break
        case '*':
            result = number1 * number2;
            break
        case '/':
            result = number1 / number2;
            break
    }
    return result;
}

function clearInput() {
    updateInput('', true)
}*/

/**
 * 
 CONDICIONALES
 Nos permiten validar si algo es cierto o no
 */
function pintarNumero(numero) {
    //document.getElementById('data').value=numero
    pintarDatos(numero)
}

function pintarOperador(operador) {
    // document.getElementById('data').value=operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato) {
    let valorInput = document.getElementById('data')
    //valorInput.value= valorInput.value+" "+dato
    valorInput.value = `${valorInput.value}${dato}`
}

function Limpiar() {
    document.getElementById('data').value = null
}

function mostrarResultado() {
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')
    /*  if (arreglo[1]=="+") {
        let suma=parseInt(arreglo[0])+parseInt(arreglo[2])
    document.getElementById('data').value=suma
}else if (arreglo[1]=="-") {
    let resta=parseInt(arreglo[0])-parseInt(arreglo[2])
    document.getElementById('data').value=resta
}else if (arreglo[1]=="*") {
    let multiplicar=parseInt(arreglo[0])*parseInt(arreglo[2])
    document.getElementById('data').value=multiplicar
}else if (arreglo[1]=="/") {
    let dividir=parseInt(arreglo[0])/parseInt(arreglo[2])
    document.getElementById('data').value=dividir
}
    
}*/

    switch (arreglo[1]) {
        case '+':
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById('data').value = suma
            break;
        case '-':
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById('data').value = resta
            break;
        case '*':
            let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
            document.getElementById('data').value = multiplicar
            break;
        case '/':
            let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
            document.getElementById('data').value = dividir
            break;
        default:
            alert('No existe el operador')
    }
}

function preguntas() {
    let dia = prompt('Ingrese el día en letras: ');
    switch (dia) {
        case 'lunes':
            document.getElementById('respuesta').innerHTML = ("Estamos en dia hábil, el día es: " + dia)
            break;
            case 'martes':
                document.getElementById('respuesta').innerHTML = ("Estamos en dia hábil, el día es: " + dia)
                break;
                case 'miercoles':
                    document.getElementById('respuesta').innerHTML = ("Estamos en dia hábil, el día es: " + dia)
                    break;
                    case 'jueves':
                        document.getElementById('respuesta').innerHTML = ("Estamos en dia hábil, el día es: " + dia)
                        break;
                        case 'viernes':
                            document.getElementById('respuesta').innerHTML = ("Estamos en dia hábil, el día es: " + dia)
                            break;
        case 'sabado':
            document.getElementById('respuesta').innerHTML = ("No es dia hábil, el día es: " + dia)
            break;
            case 'domingo':
                document.getElementById('respuesta').innerHTML = ("No es dia hábil, el día es: : " + dia)
                break;
        default:
            alert('no ingreso un dia')
            break;
    }
}