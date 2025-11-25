function verificar() {
    const login = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const url = '../Navegacao/Produtos.html';
    const url2 = '../Navegacao/Produtoclient.html'; 

    if (login === "admin" && senha === "123") {
        alert("Login realizado com sucesso!");
        window.location.href = url; // redireciona
        return false; // evita envio padrão do form
    } else {
        alert("Login ou senha incorretos.");
        window.location.href = url2; 
        return false;
    }
}
