let qrcode = new QRCode(document.querySelector(".qrcode"));

function updateQrCode(text) {
    if (text.trim() === "") {
        
        qrcode.makeCode("Default Value");
    } else {
        qrcode.makeCode(text);
    }
}

function generateQr() {
    let inputText = document.querySelector("input").value;
    updateQrCode(inputText);
}

function downloadQr() {
    let canvas = document.querySelector(".qrcode canvas");
    let imageURI = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let link = document.createElement("a");
    link.href = imageURI;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


updateQrCode("Default Value");


document.querySelector("input").addEventListener("input", function() {
    generateQr();
});
