function encriptar(texto) {
    // Convertir el texto a minúsculas y reemplazar caracteres especiales, excepto los espacios
    texto = texto.toLowerCase().replace(/[^a-z\s]/g, '');

    // Reemplazar cada letra según las reglas de encriptación
    texto = texto.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');

    return texto;
}
function desencriptar(texto) {
    // Reemplazar las palabras encriptadas por las letras originales
    texto = texto.replace(/enter/g, 'e')
                 .replace(/imes/g, 'i')
                 .replace(/ai/g, 'a')
                 .replace(/ober/g, 'o')
                 .replace(/ufat/g, 'u');
    return texto;
}

function procesarTexto(accion) {
    var textoOriginal = document.getElementById('valorUsuario').value;
    var textoProcesado = '';
    
    if (textoOriginal.trim() === '') {
        // Si el campo de entrada original está vacío, muestra el mensaje en el campo de salida
        document.getElementById('textoProcesado').value = 'Ningún mensaje fue encontrado';
    } else {
        if (accion === 'encriptar') {
            textoProcesado = encriptar(textoOriginal);
        } else if (accion === 'desencriptar') {
            textoProcesado = desencriptar(textoOriginal);
        }
        
        // Establece el texto procesado en el textarea de salida
        document.getElementById('textoProcesado').value = textoProcesado;
    }
}

function copiarAlPortapapeles() {
    var textoProcesado = document.getElementById('textoProcesado').value;

    // Crear un elemento de texto temporal
    var tempInput = document.createElement('input');
    tempInput.value = textoProcesado;
    document.body.appendChild(tempInput);

    // Seleccionar el texto del elemento
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Eliminar el elemento de texto temporal
    document.body.removeChild(tempInput);

    // Opcional: Notificar al usuario que el texto ha sido copiado
    alert('Texto copiado al portapapeles!');
}