

let qrcode = document.querySelector('.qrcode');
let texto = document.querySelector('#texto');

let qr = new QRCode(qrcode,{
    text:'',
    width:300,
    height:300,
    colorDark:'#000000',
    colorLight:'#ffffff',
    correctLevel: QRCode.CorrectLevel.H
});



function limpiar(){
    let imagen = document.querySelector('img');
    imagen.src = '';
    texto.value = ''; 
}

function generarQr(){
    if(texto.value !=null && texto.value.trim('') !=''){
        qr.clear();
        qr.makeCode(texto.value);
    }else{
        alert('Escribe un texto en la caja.');
    }
}
