document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("copiarBtn").addEventListener("click", function() {
        var texto = document.getElementById("datosDeposito");
        texto.select();
        document.execCommand("copy");
        alert("¡Texto copiado!");
    });
});
