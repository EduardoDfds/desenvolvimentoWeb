function somar() {
    var campoValor1 = document.getElementById("valor1");
    var campoValor2 = document.getElementById("valor2");

    if (campoValor1.value != "" && campoValor2.value != "") {
        var valor1 = parseFloat(campoValor1.value);
        var valor2 = parseFloat(campoValor2.value);
        campoValor1.value = "";
        campoValor2.value = "";
        var resultado = valor1 + valor2
        document.getElementById("resultado").innerHTML = "Resultado " + resultado;

    } else{
        alert("Preencha os campos");
    }

}

function limpar(){
    var campoValor1 = document.getElementById("valor1").value = ""; 
    var campoValor2 = document.getElementById("valor2").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function esconderMostrar(){
    var divCalculadora = document.getElementById("calculadora").style.display;
    if(divCalculadora=="none"){
        document.getElementById("calculadora").style.display="block";
    }else{
        document.getElementById("calculadora").style.display = "none";
    }
}