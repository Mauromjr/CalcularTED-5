var botao = document.getElementById("calcular");

botao.addEventListener("mouseenter", function () {
    botao.style.backgroundColor = "lightblue";
    botao.innerText = "Clique para calcular!";
});

botao.addEventListener("mouseleave", function () {
    botao.style.backgroundColor = "";
    botao.innerText = "Calcular";
});

botao.addEventListener("click", function () {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var resultado = document.getElementById("resultado");

    if ( n1 === "" || n2 === "") {
        resultado.innerText = "Preencha todos os campos!";
        resultado.style.color = "red";
    } else {
            resultado.innerText = Number(n1) + Number(n2);
        }
    }
);
