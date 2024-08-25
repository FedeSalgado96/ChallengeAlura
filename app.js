
/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/



function desarmarArray(texto) {
    let textoDesarmado = texto.split('');
    return textoDesarmado
}

function rearmarArray(texto) {
    let textoRearmado = texto.join('');
    return textoRearmado;
}


function textoEncriptado() {
    let texto = document.getElementById('textoEncriptar').value;

    let textoDesarmado = desarmarArray(texto);

    for (let i = 0; i < textoDesarmado.length; i++) {
        let letra = textoDesarmado[i];
        switch (letra) {
            case 'a':
                textoDesarmado[i] = "ai";
                break;
            case 'e':
                textoDesarmado[i] = "enter";
                break;
            case 'i':
                textoDesarmado[i] = "imes";
                break;
            case 'o':
                textoDesarmado[i] = "ober";
                break;
            case 'u':
                textoDesarmado[i] = "ufat";
                break;
        }
    }


    document.getElementById('textoEncriptado').innerHTML = rearmarArray(textoDesarmado);;



}



function textoDesencriptado() {

    let texto = document.getElementById('textoDesencriptar').value;


    if (texto.includes("ai")) {
        texto = texto.split('ai').join('a');
    }
    if (texto.includes("enter")) {
        texto = texto.split('enter').join('e');
    }
    
    if (texto.includes("imes")) {
        texto = texto.split('imes').join('i');
    }
    
    if (texto.includes("ober")) {
        texto = texto.split('ober').join('o');
    }
    
    if (texto.includes("ufat")) {
        texto = texto.split('ufat').join('u');
    }
    
    document.getElementById('textoDesencriptado').innerHTML = texto;

}

function copiar(elemento){
    
let texto = document.getElementById(elemento).innerHTML;
navigator.clipboard.writeText(texto);

}