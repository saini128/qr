let qrcode = new QRCode(document.querySelector(".qrcode"));

function updateQrCode(text) {
    if (text.trim() === "") {
        qrcode.makeCode("Input required");
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
    let borderSize = 15;
  
    let borderedCanvas = document.createElement("canvas");
    borderedCanvas.width = canvas.width + 2 * borderSize;
    borderedCanvas.height = canvas.height + 2 * borderSize;

    let ctx = borderedCanvas.getContext("2d");

    
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, borderedCanvas.width, borderedCanvas.height);

    
    ctx.drawImage(canvas, borderSize, borderSize, canvas.width, canvas.height);

    
    let imageURI = borderedCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

    
    let link = document.createElement("a");
    link.href = imageURI;
    link.download = "qrcode.png";

    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

updateQrCode("Input de BSDK!!");

document.querySelector("input").addEventListener("input", function() {
    generateQr();
});
