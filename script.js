var qrBox = document.querySelector("#qrBox");
var qrImage = document.querySelector("#qrImage");
var qrText = document.querySelector("#qrText");

function QRgenerator(){

    if(qrText.value.length > 0){

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    qrBox.classList.add("show-img");
}else{
    qrText.classList.add("error");
    setTimeout(()=>{
        qrText.classList.remove("error");
    },1000)
}
}