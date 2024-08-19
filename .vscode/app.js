function encriptar(texto) {
    // Convertir el texto a minúsculas y quitar caracteres especiales
    texto = texto.toLowerCase().replace(/[^a-z]/g, '');

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
