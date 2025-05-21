function adicionarProduto() {
    const nome = document.getElementById("nomeProduto").value.trim();
    const quantidade = document.getElementById("quantidadeProduto").value;

    if (nome !== "" && quantidade > 0) {
        const lista = document.getElementById("listaProdutos");
        const item = document.createElement("li");
        item.textContent = `${nome} - ${quantidade} unidade(s)`;

        item.addEventListener("click", function () {
            item.classList.toggle("riscado");
        });

        lista.appendChild(item);

        document.getElementById("nomeProduto").value = "";
        document.getElementById("quantidadeProduto").value = "";
    } else {
        alert("Por favor, preencha o nome e uma quantidade válida.");
    }
}

function limparLista() {
    document.getElementById("listaProdutos").innerHTML = "";
}
